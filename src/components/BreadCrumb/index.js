import React from "react";
import { Link } from "react-router-dom";
//Styles
import { Wrapper, Content } from "./BreadCrumb.styles";

const BreadCrumb = ({ movieTitle }) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home</span>
      </Link>
      <spam>|</spam>
      <spam>{movieTitle}</spam>
    </Content>
  </Wrapper>
);

export default BreadCrumb;
