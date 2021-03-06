import "./topbar.css";
// import { Search, Person, Chat, ChatBubbleOutline, Notifications, Settings, PostAdd, Home} from "@material-ui/icons";
import { Search, Person, Chat, Notifications, Home} from "@material-ui/icons";
// import { Grid } from '@material-ui/core';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
export default function Topbar() {

  const { user }  = useContext(AuthContext);
  const PF  = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
      <Link to ="/" style={{textDecoration:"none"}}>
        <span className="logo">USN App</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">

          <span className="topbarLink"></span>
          {/* <span className="topbarLink">Timeline</span> */}
        </div>


        <div className="topbarIcons">
          <div className="topbarIconItem">
          <Home />
        </div>
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
          <Link to={`/profile/${user.username}`}>
          <img src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="" className="topbarImg"/>
          </Link>
        </div>
        </div>

      </div>
    </div>
  );
}
