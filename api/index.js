import joystick, { escape_html } from '@joystick.js/node-canary';

const api = {
  getters: {
    escape_test: {
      get: async () => {
        const data = await process.databases.mongodb.collection('contact_form').findOne();
        return {
          ...data,
          message: escape_html(data?.message),
        };
      },
    },
  },
  setters: {
    escape_test: {
      set: (input = {}) => {
        return process.databases.mongodb.collection('contact_form').insertOne({
          _id: joystick.id(),
          message: input?.message,
        });
      },
    },
  },
};

export default api;