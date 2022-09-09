import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { Router } from "./routes/Router";
import { GlobalStyle } from "./styles/global";
import light from "./styles/themes/light";

export function App() {
  return (
    <ThemeProvider theme={light}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
