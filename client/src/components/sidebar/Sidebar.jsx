import "./sidebar.css";
import {
  RssFeed,
  Event,
Storefront
} from "@material-ui/icons";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <Storefront className="sidebarIcon" />
            <span className="sidebarListItemText">Market Place</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
            <ul className="sidebarGroupList">
            <h4 class="sidebarTitle">Groups</h4>
            </ul>
        {/* <ul className="sidebarFriendList">
          {
            Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))
        }
        </ul> */}
      </div>
    </div>
  );
}
