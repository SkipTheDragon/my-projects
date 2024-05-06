'use strict';

/**
 * owner service
 */

const {createCoreService} = require('@strapi/strapi').factories;

module.exports = createCoreService('api::owner.owner', ({strapi}) => ({
  /**
   * Fetch owner from GitHub
   * @param username
   */
  fetchFromGithub: (username) => {
    return fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('[GithubSyncPlugin]  Network response was not ok, could not fetch username.');
        }
        return response.json();
      });
  },
  /**
   * Save the owner to the database
   * @param username
   */
  updateOrCreate: async (username) => {
    const ownerResponse = await strapi.service('api::owner.owner').fetchFromGithub(username)

    const mappedData = {
      login: ownerResponse.login,
      uid: ownerResponse.id.toString(),
      avatar_url: ownerResponse.avatar_url,
      html_url: ownerResponse.html_url,
      bio: ownerResponse.bio,
      hireable: ownerResponse.hireable,
      public_repos: ownerResponse.public_repos,
      public_gists: ownerResponse.public_gists,
      followers: ownerResponse.followers,
      following: ownerResponse.following,
      location: ownerResponse.location,
      blog: ownerResponse.blog,
      company: ownerResponse.company,
      joined: ownerResponse.created_at,
      email: ownerResponse.email
    };

    // Create owner if it doesn't exist:
    let owner = await strapi.query('api::owner.owner').findOne({
      select: ['id'],
      where: {uid: ownerResponse.id.toString()}
    });

    if (!owner) {
      console.log('[GithubSyncPlugin]  Creating owner', ownerResponse.login)
      owner = await strapi.entityService.create('api::owner.owner', {
        data: mappedData,
      });
      console.log('[GithubSyncPlugin]  Created new owner', ownerResponse.login)
    } else {
      console.log('[GithubSyncPlugin]  Updating existing owner', ownerResponse.login)
      owner = await strapi.entityService.update('api::owner.owner', owner.id, {
        data: mappedData
      });
      console.log('[GithubSyncPlugin]  Updated existing owner', ownerResponse.login)
    }

    return owner;
  }
}));
