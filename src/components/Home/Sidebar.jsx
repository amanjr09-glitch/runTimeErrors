import React, { useEffect, useState } from "react";
import { Sidebar, Sidenav, Navbar, Nav } from "rsuite";
import "rsuite/dist/rsuite.css";
import AngleLeftIcon from "@rsuite/icons/legacy/AngleLeft";
import AngleRightIcon from "@rsuite/icons/legacy/AngleRight";
// import DropDown from "../UI/DropDown";
import SiteIcon from '@rsuite/icons/Site';
import { Link, useParams } from "react-router-dom";
import RemindFillIcon from '@rsuite/icons/RemindFill';
import FolderFillIcon from '@rsuite/icons/FolderFill';
import CharacterAuthorizeIcon from '@rsuite/icons/CharacterAuthorize';
import PageIcon from '@rsuite/icons/Page';
import TextImageIcon from '@rsuite/icons/TextImage';
import GlobalIcon from '@rsuite/icons/Global';
import WechatOutlineIcon from '@rsuite/icons/WechatOutline';
// import { readAll, readID } from "../../api/fb";
// import { useHome } from "../../screens/Home";



const headerStyles = {
  padding: 10,
  fontSize: 16,
  color: " #fff",
  whiteSpace: "nowrap",
  overflow: "hidden",
};

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Nav pullRight>
        <Nav.Item onClick={onChange} style={{ width: 56, textAlign: "center" }}>
          {expand ? <AngleLeftIcon /> : <AngleRightIcon />}
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default () => {
  const [expand, setExpand] = React.useState(true);
  const { field } = useParams();
  return (
    <div className="bg-gray-600 relative scrollbar-hide overflow-scroll flex flex-col justify-between h-full">
      <Sidebar
        style={{ display: "flex", flexDirection: "column" }}
        width={expand ? 300 : 10}
        collapsible
      >
        <Sidenav.Header>
          <div style={headerStyles}>
            {expand && (
              <div className="mb-6">
                <img
                  className="w-fit h-[6rem] object-cover"
                  src="/djlogo.png"
                />
                <button
                  className="flex mb-2 rounded-none bg-gray-500 text-xs font-bold w-fit text-theme py-1 px-2 items-center gap-1"
                >
                  <span className="uppercase">
                    Vaibhav Pal
                  </span>
                </button>
              </div>
            )}
          </div>
        </Sidenav.Header>
        <Sidenav
          expanded={expand}
          defaultOpenKeys={[parseInt(field)]}
          appearance="subtle"
        >
          <Sidenav.Body>
            <Nav>
              <Nav.Item
                as={Link}
                to={`/1`}
                active={field === "1"}
                eventKey="1"
                icon={<SiteIcon />}
              >
                Home
              </Nav.Item>
              <Nav.Item
                // as={Link}
                // to={`/${name}/${id}/2`}
                // active={field === "2"}
                // eventKey="2"
                icon={<CharacterAuthorizeIcon />}
              >
                Services
              </Nav.Item>
              {/* <Nav.Item
                // as={Link}
                // to={`/${name}/${id}/3`}
                // active={field === "3"}
                // eventKey="3"
                icon={<RemindFillIcon />}
              >
                Service
              </Nav.Item> */}
              {/* <Nav.Item
                // as={Link}
                // to={`/${name}/${id}/4`}
                // active={field === "4"}
                // eventKey="4"
                icon={<FolderFillIcon />}
              >
                Document Portal
              </Nav.Item> */}
              <Nav.Item
                // as={Link}
                // to={`/${name}/${id}/5`}
                // active={field === "5"}
                // eventKey="5"
                icon={<PageIcon />}
              >
                About
              </Nav.Item>
              <Nav.Item
                // as={Link}
                // to={`/${name}/${id}/6`}
                // active={field === "6"}
                // eventKey="6"
                icon={<TextImageIcon />}
              >
                Logout
              </Nav.Item>
              {/* <Nav.Item
                // as={Link}
                // to={`/${name}/${id}/7`}
                // active={field === "7"}
                // eventKey="7"
                icon={<GlobalIcon />}
              >
                Adjustments
              </Nav.Item> */}
              {/* <Nav.Item
                // as={Link}
                // to={`/${name}/${id}/8`}
                // active={field === "8"}
                // eventKey="8"
                icon={<WechatOutlineIcon />}
              >

              </Nav.Item> */}
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </Sidebar>
      <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
    </div>
  );
};