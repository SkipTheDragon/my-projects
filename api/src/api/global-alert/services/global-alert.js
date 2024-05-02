'use strict';

/**
 * global-alert service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-alert.global-alert');
