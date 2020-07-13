/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import {useLocation} from "react-router";
import {NavLink}  from "react-router-dom";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl, checkIsActive} from "../../../../_helpers";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
        ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open `
        : "";
  };

  const getMenuItemRender = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
        ? ""
        : "d-none";
  };

  return (
      <>
        
        {/* begin::Menu Nav */}
        <ul className={`menu-nav ${layoutProps.ulClasses} ${getMenuItemRender("/billing", false)}`}>

          {/* begin::section */}
          <li className="menu-section ">
            <h4 className="menu-text">General</h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>
          {/* end:: section */}

          {/* eCommerce */}
          {/*begin::1 Level*/}
          <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/billing#currentServices", true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/billing#currentServices">
            <span className="svg-icon menu-icon">
              {/*<SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Bag2.svg")}/> */}
            </span>
              <span className="menu-text">Current Services</span>
            </NavLink>
            <div className="menu-submenu">
              <i className="menu-arrow"/>
              
            </div>
          </li>
          <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/billing#invoices", true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/billing#invoices">
            <span className="svg-icon menu-icon">
              {/*<SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Bag2.svg")}/> */}
            </span>
              <span className="menu-text">Invoices</span>
            </NavLink>
            <div className="menu-submenu">
              <i className="menu-arrow"/>
              
            </div>
          </li>
          <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/billing#billingDetails", true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/billing#billingDetails">
            <span className="svg-icon menu-icon">
              {/*<SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Bag2.svg")}/> */}
            </span>
              <span className="menu-text">Billing Details</span>
            </NavLink>
            <div className="menu-submenu">
              <i className="menu-arrow"/>
              
            </div>
          </li>
          {/*end::1 Level*/}

         
        </ul>


        <ul className={`menu-nav ${layoutProps.ulClasses} ${getMenuItemRender("/teamSettings", false)}`}>

          {/* begin::section */}
          <li className="menu-section ">
            <h4 className="menu-text">General</h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>
          {/* end:: section */}

          {/* eCommerce */}
          {/*begin::1 Level*/}
          <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/teamSettings#teamDetails", true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/teamSettings#teamDetails">
            <span className="svg-icon menu-icon">
              {/*<SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Bag2.svg")}/> */}
            </span>
              <span className="menu-text">Team Details</span>
            </NavLink>
            <div className="menu-submenu">
              <i className="menu-arrow"/>
              
            </div>
          </li>
          <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/billing#dangerZone", true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/billing#dangerZone">
            <span className="svg-icon menu-icon">
              {/*<SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Bag2.svg")}/> */}
            </span>
              <span className="menu-text">Danger Zone</span>
            </NavLink>
            <div className="menu-submenu">
              <i className="menu-arrow"/>
              
            </div>
          </li>

          {/* begin::section */}
          <li className="menu-section ">
            <h4 className="menu-text">Sites</h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>
          {/* end:: section */}

          {/* eCommerce */}
          {/*begin::1 Level*/}
          <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/teamSettings#globalSiteSettings", true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/teamSettings#globalSiteSettings">
            <span className="svg-icon menu-icon">
              {/*<SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Bag2.svg")}/> */}
            </span>
              <span className="menu-text">Global Site Settings</span>
            </NavLink>
            <div className="menu-submenu">
              <i className="menu-arrow"/>
              
            </div>
          </li>
          <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/billing#notifications", true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/billing#notifications">
            <span className="svg-icon menu-icon">
              {/*<SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Bag2.svg")}/> */}
            </span>
              <span className="menu-text">Notifications</span>
            </NavLink>
            <div className="menu-submenu">
              <i className="menu-arrow"/>
              
            </div>
          </li>

          {/*end::1 Level*/}

         
        </ul>

        {/* end::Menu Nav */}
      </>
  );
}
