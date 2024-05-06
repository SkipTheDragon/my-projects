'use strict';

/**
 * repository service
 */

const {createCoreService} = require('@strapi/strapi').factories;

module.exports = createCoreService('api::repository.repository', ({strapi}) => ({
  /**
   * Fetch repositories from GitHub
   * @param username
   * @returns {Promise<any>}
   */
  fetchFromGithub: (username) => {
    return fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => {
        if (!response.ok) {
          throw new Error('[GithubSyncPlugin]  Network response was not ok, could not fetch repos.');
        }
        return response.json();
      });
  },
  /**
   * Create or update a repository
   * @param repo
   * @param owner
   * @param topicsAsEntities
   * @returns {Promise<void>}
   */
  createOrUpdate: async (repo, owner, topicsAsEntities) => {
    // If the repository already exists update it:
    const existingRepo = await strapi.query('api::repository.repository').findOne({
      select: ['full_name', 'id'],
      where: {full_name: repo.full_name}
    });

    const mappedData = {
      populate: '*',
      data: {
        name: repo.name,
        full_name: repo.full_name,
        html_url: repo.html_url,
        description: repo.description,
        fork: repo.fork,
        createdTime: repo.created_at,
        updatedTime: repo.updated_at,
        pushedTime: repo.pushed_at,
        git_url: repo.git_url,
        ssh_url: repo.ssh_url,
        clone_url: repo.clone_url,
        homepage: repo.homepage,
        stargazers_count: repo.stargazers_count,
        watchers_count: repo.watchers_count,
        language: repo.language,
        owner: owner,
        topics: topicsAsEntities,
      },
    };

    if (repo.license) {
      mappedData.data.license = {
        name: repo.license.name,
        spdx_id: repo.license.spdx_id,
        url: repo.license.url,
        key: repo.license.key,
      };
    }

    if (existingRepo) {
      console.log('[GithubSyncPlugin]  Updating repository', existingRepo.full_name)
      await strapi.entityService.update('api::repository.repository', existingRepo.id, {
        data: mappedData
      });
      console.log('[GithubSyncPlugin]  Updated repository', existingRepo.full_name)

      return
    }

    console.log('[GithubSyncPlugin]  Adding repository', repo.full_name)
    await strapi.entityService.create('api::repository.repository', mappedData);
    console.log('[GithubSyncPlugin]  Added repository', repo.full_name)
  },
  /**
   * Entry point for syncing with GitHub.
   * @param username
   * @returns {Promise<void>}
   */
  syncWithGithub: async (username) => {
    console.log('[GithubSyncPlugin]  Syncing with GitHub...');

    const response = await strapi.service('api::repository.repository').fetchFromGithub(username);

    // Fetch the owner from the github api
    const owner = await strapi.service('api::owner.owner').updateOrCreate(username);

    for (const repo of response) {
      console.log('[GithubSyncPlugin]  Adding topics for', repo.full_name)
      const topicsAsEntities = await strapi.service('api::topic.topic').createIfNotExists(repo.topics);
      console.log('[GithubSyncPlugin]  Added topics for', repo.full_name)

      console.log('[GithubSyncPlugin]  Creating or updating repo ', repo.full_name)
      await strapi.service('api::repository.repository').createOrUpdate(repo, owner, topicsAsEntities)
      console.log('[GithubSyncPlugin]  Created or updated repo', repo.full_name)

      console.log('[GithubSyncPlugin]  Finished sync.')
    }
  }
}));
