import joystick, { set } from '@joystick.js/ui-canary';

const Index = joystick.component({
  data: async (api = {}, req = {}, input = {}, instance = {}) => {
    return {
      escape_test: await api.get('escape_test')
    };
  },
  css: {
    min: {
      width: {
        0: `
          textarea {
            width: 100%;
            height: 300px;
          }
        `,
      },
    },
  },
  events: {
    'submit form': (event = {}, instance = {}) => {
      event.preventDefault();
      set('escape_test', {
        input: {
          message: event.target.message.value,
        },
      }).then(() => {
        instance.data.refetch();
      })
    },
  },
  render: ({ props, state, data, when, methods }) => {
    return `
      <div>
        <p>Sample Code</p>
        <form>
          <textarea name="message"></textarea>
          <button type="submit">Save</button>
        </form>
        ${when(data?.escape_test?.message, () => `
          <div>
            ${data?.escape_test?.message}
          </div>
        `)}
      </div>
    `;
  },
});

export default Index;