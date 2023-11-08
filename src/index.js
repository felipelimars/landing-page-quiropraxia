import { GlobalState } from "./Database/GlobalState";
import FormProvider from "./Hooks/useForm";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";
import ButtonProvider from "./Hooks/useButton";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalState>
    <ButtonProvider>
      <FormProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </FormProvider>
    </ButtonProvider>
  </GlobalState>
);
