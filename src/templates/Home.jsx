import React from "react";
import { getUserId, getUsername } from "../reducks/users/selectors";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../reducks/users/operations";

const Home = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const uid = getUserId(selector);
  const username = getUsername(selector);
  return (
    <>
      <h2>Home</h2>
      <p>ユーザID: {uid}</p>
      <p>ユーザ名: {username}</p>
      <button onClick={() => dispatch(signOut())}>サインアウト</button>
    </>
  );
};

export default Home;
