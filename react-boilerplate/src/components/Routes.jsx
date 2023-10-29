import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { About, Home, Login, ReduxPractice } from "../pages";
import TypeAhead from "../pages/type-ahead";
import ColorPicker from "../pages/color-pickcer";
import CommentBox from "../pages/comment-box";
import TickTackToe from "../pages/tick-tack";
import Timer from "../pages/timer";

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
        <Route path="type-ahead" element={<TypeAhead />} />
        <Route path="color-picker" element={<ColorPicker />} />
        <Route path="comment-box" element={<CommentBox />} />
        <Route path="tick-tack-toe" element={<TickTackToe />} />
        <Route path="timer" element={<Timer />} />
      </Routes>
    </BrowserRouter>
  );
};
