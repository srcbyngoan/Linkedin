import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./style/App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./app/Feed";
import Login from "./components/Login";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            displayName: userAuth.name,
            uid: userAuth.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  });
  return (
    <div className="app">
      <Header />
      {!user? (<Login />) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
