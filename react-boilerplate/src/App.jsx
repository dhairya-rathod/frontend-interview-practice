import { Provider as ReduxProvider } from "react-redux";

import { AppRoutes } from "./components";
import { store } from "./redux/store";
import "./App.css";

function App() {
  return (
    <ReduxProvider store={store}>
      <AppRoutes />
    </ReduxProvider>
  );
}

export default App;
