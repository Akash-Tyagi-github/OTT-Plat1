import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const navigate = useNavigate();

  const handleClick = () => {
    setIsSignInForm(!isSignInForm);
  };

  //   const updateName = () => {
  //     updateProfile(auth, {
  //       displayName: name.current.value,photoURL: "https://example.com/jane-q-user/profile.jpg"
  //     })
  //       .then((user) => {
  //         console.log("user 123", user);
  //         navigate("/browse");
  //       })
  //       .catch((error) => {
  //         setErrorMessage(error.message);
  //       });
  //   };

  const handleSubmit = () => {
    const message = validate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (isSignInForm) {
      //sign in logic
      console.log("first");
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("user :", user);
          const { uid, email, displayName } = user;
          dispatch(
            addUser({ uid: uid, email: email, displayName: displayName })
          );
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          const { uid, email, displayName } = user;
          dispatch(
            addUser({ uid: uid, email: email, displayName: displayName })
          );
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute w-full h-full">
        <img className="w-full h-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-8/12 md:w-3/12 lg:3/12 absolute p-8 md:p-10 lg:p-12 mx-auto left-0 right-0 my-24  bg-opacity-80 text-white  bg-black"
      >
        <h1 className="text-3xl font-bold">
          {isSignInForm ? "Sign in" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full name"
            className="w-full p-2 my-4 bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="w-full p-2 my-4 bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" w-full p-2  my-4 bg-gray-700"
        />
        <p className="text-red-600">{errorMessage}</p>
        <button
          className="p-2  font-bold bg-red-700 w-full my-6 rounded-lg"
          onClick={handleSubmit}
        >
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        <p className="cursor-pointer" onClick={handleClick}>
          {isSignInForm ? "New user? Sign up" : "Already a user? Sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
