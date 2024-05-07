import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTitle, getPosts } from "../store/PostSlice";
import Spinner from "react-bootstrap/Spinner";
import Card from "../Card/Card";
import classes from "./Page.module.css";

const Page = () => {
  const dispatch = useDispatch();
  const { title, posts, isLoading } = useSelector((state) => state.postSlice);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div className={classes.cards}>
          {posts &&
            posts.map((user) => (
              <div className={classes.card}>
                <Card cardInfo={user} />
              </div>
            ))}
        </div>
      )}
      <h2>{title}2</h2>
      <button onClick={() => dispatch(changeTitle())}>+</button>
    </div>
  );
};

export default Page;
