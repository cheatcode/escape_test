import joystick from "@joystick.js/ui-canary";

const App = joystick.component({
  render: ({ props, component }) => {
    return `
      <div>
        ${component(props.page, props)}
      </div>
    `;
  },
});

export default App;
