
import {Link} from 'react-router-dom'
function CustomDropdown() {
  return (
    <div className="dropdown">
        <button className="btn btn-dark dropdown-toggle" id="dropdownMenuButton1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="../src/assets/avatar.png" alt="avatar" width="30" height="30"/>
        </button>
        <ul className="dropdown-menu dropdown-menu-dark" id="menuDrop">
            <li><Link className="dropdown-item" to="/manageprofiles"> <i className="fas fa-user-alt pe-2"></i>Manage Profiles</Link></li>
            <li><Link className="dropdown-item" to="/account"> <i className="fas fa-cog pe-2"></i>Account</Link></li>
            <li><Link className="dropdown-item" to="/helpcenter"> <i className="fas fa-door-open pe-2"></i>Help Center</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/signoutnetflix"> <i className="fas fa-door-open pe-2"></i>Signout Netflix</Link></li>
        </ul>
    </div>
  );
}

export default CustomDropdown;