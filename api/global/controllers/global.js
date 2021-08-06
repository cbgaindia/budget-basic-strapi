const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve the record.
   *
   * @return {Object}
   */

  async find(ctx) {
    const entity = await strapi.services.global.find({}, ['suggested_sections.chapter']);
    return sanitizeEntity(entity, { model: strapi.models.global });
  },
};