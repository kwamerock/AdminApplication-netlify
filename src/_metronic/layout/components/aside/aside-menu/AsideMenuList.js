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
    <ul className={`menu-nav ${layoutProps.ulClasses} ${getMenuItemRender('/billing', false)}`}>
      {/*begin::1 Level*/}
      <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
              "/billing", true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
      >
        <NavLink className="menu-link menu-toggle" to="/billing">
        <span className="svg-icon menu-icon">
          <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Cap-2.svg")}/>
        </span>
          <span className="menu-text">General</span>
          <i className="menu-arrow"/>
        </NavLink>
        <div className="menu-submenu ">
          <i className="menu-arrow"/>
          <ul className="menu-subnav">
            <li className="menu-item  menu-item-parent" aria-haspopup="true">
            <span className="menu-link">
              <span className="menu-text">General</span>
            </span>
            </li>

            {/* Inputs */}
            {/*begin::2 Level*/}
            <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                    "/general#currentServices", true
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
            >
              <NavLink className="menu-link menu-toggle" to="/billing#currentServices">
                <i className="menu-bullet menu-bullet-dot">
                  <span/>
                </i>
                <span className="menu-text">Current Services</span>
              </NavLink>

            </li>
            <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                    "/general#invoices", true
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
            >
              <NavLink className="menu-link menu-toggle" to="/billing#invoices">
                <i className="menu-bullet menu-bullet-dot">
                  <span/>
                </i>
                <span className="menu-text">Invoices</span>
              </NavLink>

            </li>
            <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                    "/general#billingDetails", true
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
            >
              <NavLink className="menu-link menu-toggle" to="/billing#billingDetails">
                <i className="menu-bullet menu-bullet-dot">
                  <span/>
                </i>
                <span className="menu-text">Billing Details</span>
              </NavLink>

            </li>


          </ul>
        </div>
      </li>

    </ul>

    <ul className={`menu-nav ${layoutProps.ulClasses} ${getMenuItemRender('/teamSettings', false)}`}>
      {/*begin::1 Level*/}
      <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
              "/teamSettings", true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
      >
        <NavLink className="menu-link menu-toggle" to="/teamSettings#General">
        <span className="svg-icon menu-icon">
          <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Cap-2.svg")}/>
        </span>
          <span className="menu-text">General</span>
          <i className="menu-arrow"/>
        </NavLink>
        <div className="menu-submenu ">
          <i className="menu-arrow"/>
          <ul className="menu-subnav">
            <li className="menu-item  menu-item-parent" aria-haspopup="true">
            <span className="menu-link">
              <span className="menu-text">General</span>
            </span>
            </li>

            {/* Inputs */}
            {/*begin::2 Level*/}
            <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                    "/teamSettings#teamDetails", true
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
            >
              <NavLink className="menu-link menu-toggle" to="/teamSettings#teamDetails">
                <i className="menu-bullet menu-bullet-dot">
                  <span/>
                </i>
                <span className="menu-text">Team Details</span>
              </NavLink>

            </li>
            <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                    "/teamSettings#dangerZone", true
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
            >
              <NavLink className="menu-link menu-toggle" to="/teamSettings#dangerZone">
                <i className="menu-bullet menu-bullet-dot">
                  <span/>
                </i>
                <span className="menu-text">Danger Zone</span>
              </NavLink>

            </li>


          </ul>
        </div>

        
      </li>

      <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
              "/teamSettings#Sites", true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
      >
        <NavLink className="menu-link menu-toggle" to="/teamSettings#Sites">
        <span className="svg-icon menu-icon">
          <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Cap-2.svg")}/>
        </span>
          <span className="menu-text">Sites</span>
          <i className="menu-arrow"/>
        </NavLink>
        <div className="menu-submenu ">
          <i className="menu-arrow"/>
          <ul className="menu-subnav">
            <li className="menu-item  menu-item-parent" aria-haspopup="true">
            <span className="menu-link">
              <span className="menu-text">Sites</span>
            </span>
            </li>

            {/* Inputs */}
            {/*begin::2 Level*/}
            <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                    "/teamSettings#globalSiteSettings", true
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
            >
              <NavLink className="menu-link menu-toggle" to="/teamSettings#globalSiteSettings">
                <i className="menu-bullet menu-bullet-dot">
                  <span/>
                </i>
                <span className="menu-text">Global Site Settings</span>
              </NavLink>

            </li>
            <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                    "/teamSettings#notifications", true
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
            >
              <NavLink className="menu-link menu-toggle" to="/teamSettings#notifications">
                <i className="menu-bullet menu-bullet-dot">
                  <span/>
                </i>
                <span className="menu-text">Notifications</span>
              </NavLink>

            </li>


          </ul>
        </div>

        
      </li>

    </ul>

    {/* end::Menu Nav */}
  </>
  );
}
