/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import SVG from "react-inlinesvg";
import objectPath from "object-path";
import { useHtmlClassService } from "../../../_core/MetronicLayout";
import { toAbsoluteUrl } from "../../../../_helpers";
import { DropdownButtonToggler, DropdownMenu4 } from "../../../../_partials/dropdowns";

export function HeaderSelector() {
  const bgImage = toAbsoluteUrl("/media/misc/bg-2.jpg");
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      offcanvas:
        objectPath.get(uiService.config, "extras.quick-actions.layout") ===
        "offcanvas",
    };
  }, [uiService]);

  return (
    <>
      <div className="header-dropdown-container">
      <Dropdown className="dropdown-inline">
          <Dropdown.Toggle
            className="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
            variant="transparent"
            id="dropdown-toggle-top"
            as={DropdownButtonToggler}
          >
            <i className="ki ki-bold-more-hor" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
            <DropdownMenu4 />
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}
