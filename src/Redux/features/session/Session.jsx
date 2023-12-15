import React from "react";
import Form from "../form/Form";
import { Link } from "react-router-dom";

import { fetchSession } from "./sessionSlice";
// YourReactComponent.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Session() {
  const dispatch = useDispatch();
  const { token, status, error } = useSelector((state) => {
    return state.session;
  });

  useEffect(() => {
    dispatch(fetchSession());
  }, []);

  if (status === "loading") {
    return (
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"
      ></div>
    );
  }

  if (status === "failed") {
    return (
      <section className="flex items-center h-screen p-16 bg-gray-50 dark:bg-gray-700">
        <div className="container flex flex-col items-center ">
          <div className="flex flex-col gap-6 max-w-md text-center">
            <h2 className="font-extrabold text-9xl text-gray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl md:text-3xl dark:text-gray-400">
              Sorry, we couldn't find this page.
            </p>
            <span className="px-8 py-4 text-xl font-semibold rounded bg-blue-400 text-gray-50 hover:text-gray-200">
              <Link to="/"> Back to homepage</Link>
            </span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div>
      {console.log("thsi si the data i am passing from session to Form", token)}

      <Form token={token} />
    </div>
  );
}

export default Session;
