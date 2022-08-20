import styled from "styled-components"
import {Link }from "react-router-dom"

const Container= styled.div`
    display: flex;
    justify-content: center;
    gap:80px;
    height: 50px;
    background-color: #7575cd;
    color: white;
`

const Pages= styled.p`
    font-family: sans-serif;
    font-weight: 700;
`

export const Navbar = () => {
    return (
      <div>
        <Container>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            {" "}
            <Pages>Home</Pages>
          </Link>
          <Link
            to={"/register"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Pages>Register</Pages>
          </Link>

          <Link
            to={"/login"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Pages>Login</Pages>
          </Link>
        </Container>
      </div>
    );
}