import { StrictMode } from "react";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import theme from "./theme";

const rootElement = document.getElementById("root");
render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  rootElement
);
