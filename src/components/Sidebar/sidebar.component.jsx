import { Link, NavLink } from "react-router-dom";
import "./sidebar.styles.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="nav">
        <ul className="nav__ul">
          <li className="nav__li">
            <NavLink
              to="/home"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M19.5,24H4.5c-2.481,0-4.5-2.019-4.5-4.5V9.561c0-1.497,.741-2.892,1.983-3.729L9.483,.771c1.527-1.033,3.505-1.033,5.034,0l7.499,5.061c1.242,.838,1.983,2.232,1.983,3.729v9.939c0,2.481-2.019,4.5-4.5,4.5ZM12,.996c-.682,0-1.363,.201-1.957,.603L2.542,6.659c-.966,.652-1.542,1.736-1.542,2.901v9.939c0,1.93,1.57,3.5,3.5,3.5h15c1.93,0,3.5-1.57,3.5-3.5V9.561c0-1.165-.576-2.249-1.542-2.901L13.958,1.599c-.595-.401-1.276-.603-1.958-.603Z" />
              </svg>
              <span>Home</span>
            </NavLink>
          </li>
          <li className="nav__li">
            <NavLink
              to="/create"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M17,12c0,.276-.224,.5-.5,.5h-4v4c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5v-4H7.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h4V7.5c0-.276,.224-.5,.5-.5s.5,.224,.5,.5v4h4c.276,0,.5,.224,.5,.5Zm7-7.5v15c0,2.481-2.019,4.5-4.5,4.5H4.5c-2.481,0-4.5-2.019-4.5-4.5V4.5C0,2.019,2.019,0,4.5,0h15c2.481,0,4.5,2.019,4.5,4.5Zm-1,0c0-1.93-1.57-3.5-3.5-3.5H4.5c-1.93,0-3.5,1.57-3.5,3.5v15c0,1.93,1.57,3.5,3.5,3.5h15c1.93,0,3.5-1.57,3.5-3.5V4.5Z" />
              </svg>
              <span>Add CrewMate</span>
            </NavLink>
          </li>
          <li className="nav__li">
            <NavLink
              to="crew-mate"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M24,3.5c0,.28-.22,.5-.5,.5H.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5H23.5c.28,0,.5,.22,.5,.5ZM7.5,21H.5c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5H7.5c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5ZM15.5,12H.5c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5H15.5c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5Z" />
              </svg>
              <span>CrewMate Gallery</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
