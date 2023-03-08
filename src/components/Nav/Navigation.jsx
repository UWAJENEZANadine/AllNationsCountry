import { BsMoon } from "react-icons/bs";
import './nav.css'

const Navigation =({ changeTheme}) => {
  return (
      <div className='nav-container bg-primary text-white'>
        <p className="nav-para">Where in the world?</p>
          <span className="nav-icon" onClick={changeTheme}> <BsMoon /> Dark Mode</span>
      </div>
  );
}

export default Navigation;