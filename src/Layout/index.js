import Head from "next/head";
import Navbar from "../components/Navbar";
import {
  BlurredBackground,
  NavButton,
} from "../components/Navbar/NavbarStyles";
import { Content } from "./LayoutStyles";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useTheme } from "styled-components";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const [navActive, setNavActive] = useState(false);
  const theme = useTheme();

  const handleClick = () => {
    setNavActive(!navActive);
  };

  return (
    <div>
      <Head>
        <title>Shan Kai&#39;s Portfolio</title>
      </Head>
      <Navbar active={navActive} setNavActive={handleClick} />
      <NavButton active={navActive} onClick={() => handleClick()}>
        {navActive ? (
          <Icon
            icon="clarity:close-line"
            width="30px"
            height="30px"
            color={theme.colors.highlight}
          />
        ) : (
          <Icon
            icon="mdi:hamburger"
            width="30px"
            height="30px"
            color={theme.colors.background}
          />
        )}
      </NavButton>
      <BlurredBackground active={navActive} onClick={() => handleClick()} />
      <Content>{children}</Content>
    </div>
  );
}
