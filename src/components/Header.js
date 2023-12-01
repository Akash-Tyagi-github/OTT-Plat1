import React, { useEffect } from "react";
import { onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
const Header = ({ isLogggedIn, search, watch }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSearch = () => {
    navigate("/search");
  };
  return (
    <div className="absolute w-full px-12 p-2 bg-gradient-to-b from-black z-30 flex justify-between">
      <img className="w-36" src={LOGO} />
      {isLogggedIn && (
        <div>
          <button
            className={
              watch
                ? "hidden"
                : "bg-red-700 mt-2 me-2 h-10 text-white font-bold px-3 rounded-md"
            }
            onClick={() => navigate("/video-player")}
          >
            Watch
          </button>
          <button
            className={
              search
                ? "hidden"
                : "bg-red-700 mt-2 me-2 h-10 text-white font-bold px-3 rounded-md"
            }
            // className="bg-red-700 mt-2 me-2 h-10 text-white font-bold px-3 rounded-md"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="bg-red-700 mt-2 me-2 h-10 text-white font-bold px-3 rounded-md"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
