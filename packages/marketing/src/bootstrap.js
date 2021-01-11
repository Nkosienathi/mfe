import React, { Componet } from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Mount Function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};
// if we are in development and in isolation
// call mount immediates
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}
// we are running  through a container
// and we should export mount function
export { mount };
