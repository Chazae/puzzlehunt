/*
 * Menu.jsx
 * The main Sidebar Menu
 */

import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

Menu = class Menu extends React.Component {

  _logout(event) {
    event.preventDefault();
    return Meteor.logout(() => FlowRouter.go('/'));
  }

  _adminMenu() {
    return [
      <div className="ui divider" key="admin-divider"></div>,
      (
      <a className="item" href="/admin" key="edit-btn">
        <i className="green edit icon"></i>
        Settings
      </a>
      ),
    ];
  }

  _initSideBarMenu() {
    // Init Semantic-UI SideBar
    const reactRoot = $('.app-root.ui.pushable');
    const sideBar = reactRoot.find('> .ui.sidebar');

    sideBar.sidebar({
      context: reactRoot[0]
    })
    .sidebar('attach events', '.app-root.ui.pushable > .ui.sidebar > a.item');
  }

  componentDidMount() {
    this._initSideBarMenu();
  }

  componentDidUpdate() {
    this._initSideBarMenu();
  }

  render() {
    const adminMenu = this.props.isAdmin() ? this._adminMenu() : null;

    return (
    <div className="ui borderless sidebar vertical labeled icon menu">
      <a className="item" href="/">
        <img className="ui centered mini menu-logo image" src="/img/logo.png"/>
        Home
      </a>
      <a className="item" href="/tags">
        <i className="blue tags icon"></i>
        Tags
      </a>
      <a className="item" href="/archive">
        <i className="teal archive icon"></i>
        Archive
      </a>
      {adminMenu}
    </div>
    );
  }
}
