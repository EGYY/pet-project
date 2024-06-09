import { render } from "react-dom";
import { App } from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "shared/contexts";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("app")
);
