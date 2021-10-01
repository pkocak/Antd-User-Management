import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider, useSelector } from "react-redux";
import reduxStore from "./redux/index";
import "./App.css";
import "antd/dist/antd.css";

import BaseScreen from "./screens/base-screen";
import { Loader } from "./components";
import { Login } from "./screens/auth";
import { isLoadingState, loggedInSelector } from "./redux/selectors";
import AuthRoutes from "./AuthRoutes";

const { store, persistor } = reduxStore();

function Nav() {
  const isLoading = useSelector(isLoadingState);
  const isLogged = useSelector(loggedInSelector);

  return (
    <div className="App">
      {isLogged ? <BaseScreen /> : <Login />}
      {isLoading ? <Loader /> : null}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <AuthRoutes>
            <Nav />
          </AuthRoutes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
