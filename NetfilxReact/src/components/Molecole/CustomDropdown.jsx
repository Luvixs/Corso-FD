

function CustomDropdown() {
  return (
    <div className="dropdown">
        <button className="btn btn-dark dropdown-toggle" id="dropdownMenuButton1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="../src/assets/avatar.png" alt="avatar" width="30" height="30"/>
        </button>
        <ul className="dropdown-menu dropdown-menu-dark" id="menuDrop">
            <li><a className="dropdown-item" href="#"> <i className="fas fa-user-alt pe-2"></i>Manage Profiles</a></li>
            <li><a className="dropdown-item" href="#"> <i className="fas fa-cog pe-2"></i>Account</a></li>
            <li><a className="dropdown-item" href="#"> <i className="fas fa-door-open pe-2"></i>Help Center</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#"> <i className="fas fa-door-open pe-2"></i>Signout Netflix</a></li>
        </ul>
    </div>
  );
}

export default CustomDropdown;