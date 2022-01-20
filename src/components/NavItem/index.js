import { NavLink, NavTitle } from "./NavItemStyles";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useTheme } from "styled-components";

export default function NavItem({ title, link, icon, active }) {
  const theme = useTheme();

  return (
    <Link href={link} passHref>
      <NavLink>
        <Icon
          icon={icon}
          height="20px"
          color={active ? theme.colors.highlight : theme.colors.secondary}
        />
        <NavTitle active={active}>{title}</NavTitle>
      </NavLink>
    </Link>
  );
}
