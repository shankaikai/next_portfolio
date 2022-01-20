import {
  Avatar,
  FixedNavContainer,
  Name,
  NavbarDivider,
  Role,
  SocialLink,
  SocialLinkList,
  Prompt,
  NavItemList,
  NavFooter,
} from "./NavbarStyles";
import { Icon } from "@iconify/react";
import { socials, navitems } from "../../constants/constants";
import NavItem from "../NavItem";
import { useRouter } from "next/router";

export default function Navbar({ active, handleClick }) {
  const router = useRouter();

  return (
    <FixedNavContainer active={active}>
      <Avatar src="/images/profile_pic.jpg" />
      <Name>Tiong Shan Kai</Name>
      <Role>Software Enginner</Role>
      <SocialLinkList>
        <SocialLink href={socials.email} target="_blank">
          <Icon icon="fluent:mail-24-filled" height="25px" display={"block"} />
        </SocialLink>
        <SocialLink href={socials.github} target="_blank">
          <Icon icon="akar-icons:github-fill" height="25px" display={"block"} />
        </SocialLink>
        <SocialLink href={socials.linkedin} target="_blank">
          <Icon
            icon="akar-icons:linkedin-fill"
            height="25px"
            display={"block"}
          />
        </SocialLink>
      </SocialLinkList>
      <Prompt>Feel free to to reach out on any of my socials!</Prompt>
      <NavbarDivider />
      <NavItemList>
        {navitems.map(({ title, link, icon }) => (
          <NavItem
            key={title}
            title={title}
            link={link}
            icon={icon}
            active={router.route === link}
          />
        ))}
      </NavItemList>
      <NavFooter>&copy; 2021 Shan Kai</NavFooter>
    </FixedNavContainer>
  );
}
