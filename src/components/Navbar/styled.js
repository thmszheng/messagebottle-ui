import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: relative;
  z-index: 1000;

  width: 100%;
  height: 80px;
  padding: 10px 20px 10px 20px;

  background-color: ${(props) => props.theme.backgroundColor.secondary};
  border-bottom: 1px solid lightgrey;

  -webkit-box-shadow: 0 2px 1px -1px lightgrey;
  -moz-box-shadow: 0 2px 1px -1px lightgrey;
  box-shadow: 0 2px 1px -1px lightgrey;

  display: flex;
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
