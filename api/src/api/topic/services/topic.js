'use strict';

/**
 * topic service
 */

const {createCoreService} = require('@strapi/strapi').factories;

module.exports = createCoreService('api::topic.topic', ({strapi}) => ({
  /**
   * Create a topic if it doesn't exist
   * @param topics
   * @returns {Promise<*[]>}
   */
  createIfNotExists: async (topics) => {
    // Add topic if it doesn't exist and store it in a variable:
    const topicsAsEntities = [];

    for (let topic of topics) {
      let topicEntity = await strapi.query('api::topic.topic').findOne({
        select: '*',
        where: {name: topic},
      });

      if (!topicEntity) {
        console.log('[GithubSyncPlugin]  Creating topic', topic)
        topicEntity = await strapi.entityService.create('api::topic.topic', {
          data: {
            name: topic,
          },
        });
        console.log('[GithubSyncPlugin]  Created topic', topic)
      }

      console.log('[GithubSyncPlugin]  Adding existing topic', topic)
      topicsAsEntities.push(topicEntity);
    }

    return topicsAsEntities;
  }
}));
