import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReduser from "./reducer/userReduser";
import AppClone from "./AppClone";

const Redux = () => {
  const store = configureStore({
    reducer: userReduser,
    devTools: process.env.Node_ENV !== "production",
  });

  return (
    <div>
      <Provider store={store}>
        <AppClone />
      </Provider>
    </div>
  );
};

export default Redux;
