import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
