import React from "react";
import { getUserId, getUsername } from "../reducks/users/selectors";
import { useSelector } from "react-redux";

const Home = () => {
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const username = getUsername(selector);
  return (
    <>
      <h2>Home</h2>
      <p>ユーザID: {uid}</p>
      <p>ユーザ名: {username}</p>
    </>
  );
};

export default Home;
