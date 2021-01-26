import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
                <div className="sidebar-brand-icon rotate-n-15">
                    {/* <i className="fas fa-laugh-wink"></i> */}
                    <img src="/logo192.png" style={{ width: 40 }} alt=""/>
                </div>
                <div className="sidebar-brand-text mx-3">
                    React CRUD
                </div>
            </Link>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link to="/dashboard" className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                Menus
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
           <hr className="sidebar-divider d-none d-md-block" />

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </ul>
    );
}

export default Sidebar;