import React from "react";
// import { Card, Row, Col, Button } from 'react-bootstrap';
import CIcon from '@coreui/icons-react';
import "../Css/Sidebar.css";
import { RxExit } from "react-icons/rx";
import { CiSettings } from "react-icons/ci";
import { HiCube } from "react-icons/hi";
// import useDarkMode from 'use-dark-mode';

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader className="title" prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
          <HiCube />  DashCube
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="dashboard" icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
           
            <div className="analysis">
            <CDBSidebarMenuItem className="heading">ANALYTICS</CDBSidebarMenuItem>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="dashboard" icon="chart-line">Performance</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="dashboard" icon="exclamation-circle">Hotjar</CDBSidebarMenuItem>
            </NavLink>
            
            </div>
            <CDBSidebarMenuItem className="heading">SUPPORT</CDBSidebarMenuItem>
            <div className="analysis">
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="dashboard" icon="table">Tickets</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="dashboard" icon="user">Agents</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="dashboard" icon="user">Customers</CDBSidebarMenuItem>
            </NavLink>
            </div>

            <CDBSidebarMenuItem className="heading">SHOP</CDBSidebarMenuItem>
            <div className="analysis">
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="dashboard" icon="table">Products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="dashboard" icon="user">Orders</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="dashboard" icon="user">Reports</CDBSidebarMenuItem>
            </NavLink>
            </div>
            
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div className="sidebar_footer">
            <CDBSidebarMenuItem className="setting" icon="setting"><CiSettings /> Setting</CDBSidebarMenuItem>
            <CDBSidebarMenuItem className="setting" icon="exit"><RxExit />  Log out</CDBSidebarMenuItem>
          </div>

        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;


