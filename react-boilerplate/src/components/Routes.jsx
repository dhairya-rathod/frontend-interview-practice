import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { About, Home, Login, ReduxPractice } from "../pages";

const AuthRoute = () => {
  const token = "";
  if (!token) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route element={<AuthRoute />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="redux-practice" element={<ReduxPractice />} />
      </Routes>
    </BrowserRouter>
  );
};
