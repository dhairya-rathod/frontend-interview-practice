import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { retrieveTodos } from "../redux/slices/todoSlice";
import { retrieveUsers } from "../redux/slices/userSlice";

export const ReduxPractice = () => {
  const dispatch = useDispatch();

  const { loading: todoLoading, todos } = useSelector((state) => state.todo);
  const { loading: userLoading, users } = useSelector((state) => state.user);

  // console.group();
  // console.log("TCL ~ ReduxPractice ~ todos:", todos);
  // console.log("TCL ~ ReduxPractice ~ todoLoading:", todoLoading);
  // console.groupEnd();
  // console.group();
  // console.log("TCL ~ ReduxPractice ~ users:", users);
  // console.log("TCL ~ ReduxPractice ~ userLoading:", userLoading);
  // console.groupEnd();

  useEffect(() => {
    dispatch(retrieveTodos());
    dispatch(retrieveUsers());
  }, []);

  return <div>redux-practice</div>;
};
