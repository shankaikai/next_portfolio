import styled from "styled-components";

export const FixedNavContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background};
  height: 100vh;
  width: 250px;
  padding: 30px;
  align-items: center;
  row-gap: 15px;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: ${(props) => (props.active ? "flex" : "none")};
    right: ${(props) => (props.active ? "0px" : "-250px")};\
    z-index: 3;
    animation: slide 0.5s forwards;
  }
`;

export const BlurredBackground = styled.div`
  display: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.blurred};

  @media ${(props) => props.theme.breakpoints.sm} {
    display: ${(props) => (props.active ? "block" : "none")};
    right: 0px;
    z-index: 2;
  }
`;

export const Avatar = styled.img`
  height: 170px;
  width: 170px;
  border-radius: 100px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const Name = styled.h2`
  font-weight: 500;
  font-size: 20px;
`;

export const Role = styled.h3`
  font-weight: 300;
  font-size: 16px;
`;

export const SocialLinkList = styled.div`
  display: flex;
  flex-direction: row;
  width: 150px;
  justify-content: space-between;
`;

export const SocialLink = styled.a`
  color: ${(props) => props.theme.colors.highlight};
  height: 25px;
`;

export const Prompt = styled.p`
  font-weight: 100;
  font-size: 12px;
  text-align: center;
`;

export const NavbarDivider = styled.hr`
  background-color: ${(props) => props.theme.colors.secondary};
  margin-top: 5px;
  margin-bottom: 5px;
  height: 1px;
  width: 100%;
  border: none;
`;

export const NavItemList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NavFooter = styled.span`
  font-weight: 100;
  font-size: 12px;
  margin-top: auto;
`;

export const NavButton = styled.button`
  display: none;
  border: 0;
  background: ${(props) => (props.active ? 0 : props.theme.colors.highlight)};
  border-radius: 5px;
  position: ${(props) => (props.active ? "fixed" : "absolute")};
  cursor: pointer;
  right: 0px;
  margin: 20px;
  height: 42px;
  width: 42px;
  z-index: 4;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
  }
`;
