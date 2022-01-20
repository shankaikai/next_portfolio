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
