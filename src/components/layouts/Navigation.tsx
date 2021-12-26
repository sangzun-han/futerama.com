import styled from "@emotion/styled";
import Link from "next/link";
import { ROUTES } from "../../constants";

interface ROUTE {
  ID: number;
  PATH: string;
  LABEL: string;
}

export const Navigation = () => {
  return (
    <Header>
      <Logo>
        <Img src="logo.png" alt="logo" />
      </Logo>
      <Burger>
        <Line></Line>
        <Line></Line>
        <Line></Line>
      </Burger>
      {ROUTES.map((routeObject: ROUTE) => {
        return (
          <Link key={`navbar-${routeObject.ID}`} href={routeObject.PATH}>
            <Item>{routeObject.LABEL}</Item>
          </Link>
        );
      })}
    </Header>
  );
};

const Item = styled.li`
  list-style: none;
  font-size: 20px;
  cursor: pointer;
  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

const Header = styled.header`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1280px) {
    width: 90%;
  }
`;

const Logo = styled.div`
  display: flex;
  padding: 1.5rem;
`;

const Img = styled.img`
  max-width: 250px;
  background-color: transparent;

  @media screen and (max-width: 1280px) {
    width: 70%;
  }
`;

const Burger = styled.div`
  display: none;

  @media screen and (max-width: 1280px) {
    display: block;
    cursor: pointer;
    position: absolute;
    right: 3%;
  }
`;

const Line = styled.div`
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 5px 0px;
`;
