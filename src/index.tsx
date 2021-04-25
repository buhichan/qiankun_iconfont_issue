import * as ReactDOM from "react-dom";
import { registerMicroApps, start } from "qiankun";
import * as React from "react";

function App() {
  const ref = React.useRef();

  React.useLayoutEffect(() => {
    const container = ref.current;
    if (container) {
      registerMicroApps([
        {
          name: "microapp",
          entry: "/public/microapp.html",
          container,
          activeRule: "/",
        },
      ]);

      start({
        sandbox: {
          strictStyleIsolation: true,
        },
      });
    }
  }, []);

  return (
    <div>
      this is the shell app, below is the micro app
      <div
        ref={ref}
        style={{
          border: "2px solid cyan",
          minHeight: 400,
        }}
      ></div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
