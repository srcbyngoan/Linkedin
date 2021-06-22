import React from "react";
import "../style/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import logout from "../features/userSlice";

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.nicepng.com/png/detail/461-4616944_linkedin-logo-png-linked-in-icon-svg.png"
          alt="logo"
        />

        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      {/* RIGHT */}
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          title="My Account"
          onClick={logoutOfApp}
          avatar="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/151216467_1025021211239616_4081445976029628461_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=174925&_nc_ohc=-rDYnt1iiLcAX9RqfRR&_nc_oc=AQmZ3VQMZlUmT_yvznpLquQEE1xVWFoFohpPChrEafuQHYWHjYor_at25k9Qzv9ytkQ&_nc_ht=scontent-hkt1-1.xx&oh=0f4b17dae9259fcc56097f4530befdfa&oe=60D58EF8"
        />
      </div>
    </div>
  );
}

export default Header;
