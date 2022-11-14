import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const MobileExpandButton = styled.button`
  width: 50px;
  height: 50px;
  background: transparent;
  float: right;
  display: none;
  margin-right: 1rem;
  position: relative;
  border: 0;
  z-index: 100;
  cursor: pointer;

  &.expanded {
    &:after {
      transform: rotateZ(-45deg);
      background-color: black;
    }
    &:before {
      transform: translate(7px, -10px) rotateZ(45deg) scaleX(2);
      background-color: black;
    }
  }
  &:after {
    content: "";
    width: 20px;
    height: 4px;
    background: white;
    position: absolute;
    top: 17px;
    left: 14px;
    transform-origin: right top;
    transition: transform 0.15s;
  }
  &:before {
    content: "";
    width: 10px;
    height: 4px;
    background: white;
    position: absolute;
    top: 27px;
    left: 16px;
    transform-origin: left top;
    transition: transform 0.15s;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Sider = styled.div<{ show: boolean }>`
  display: flex;
  align-items: center;
  width: auto;
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  transition: all 0.25s;
  ${({ show }) =>
    show ? "transform: translateY(0);" : "transform: translateY(100vh);"}
  border-top: 2px solid white;
  flex-shrink: 0;

  &:before {
    content: "";
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 200px;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-top: 2rem;
  padding-top: 0;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const SideMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const routes = [
    { name: "Home", route: "/" },
    { name: "Blog", route: "/blog" },
    { name: "Art", route: "/art" },
    { name: "Contact", route: "#contact" },
  ];
  return (
    <>
      <MobileExpandButton
        className={showMenu ? "expanded" : ""}
        onClick={() => setShowMenu(!showMenu)}
      />
      <Sider show={showMenu}>
        <Menu>
          {routes.map(({ name, route }, index) => (
            <MenuItem key={index}>
              <Link href={route} passHref>
                <a
                  style={{ color: "black" }}
                  onClick={() => setShowMenu(false)}
                >
                  {name}
                </a>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Sider>
    </>
  );
};
export default SideMenu;
