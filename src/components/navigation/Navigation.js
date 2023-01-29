import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../images/logo.jpg";
import { FormControl, InputGroup, Nav, Navbar, Stack } from "react-bootstrap";

const Navigation = () => {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark" style={{ fontFamily: "Garamond" }}>
        <Link className="logo-container" to="/">
          <Navbar.Brand href="/" className="logo" alt="logo">
            <img
              src={Logo}
              width="300"
              height="50"
              className="d-inline-block align-top"
              alt="Adventure Outdoors Logo"
            />
          </Navbar.Brand>
        </Link>
        <Stack direction="horizontal" gap={5}>
          <Nav className="justify-content-center text-center">
            <Link className="nav-link" to="/equipment">
              Equipment
            </Link>

            <Link className="nav-link" to="/account">
              Account
            </Link>

            <Link className="nav-link" to="/register">
              Register
            </Link>

            <Link className="nav-link" to="/login">
              Login
            </Link>
          </Nav>
          <InputGroup
            className=""
            style={{ width: 300, justifyContent: "right" }}
          >
            <FormControl placeholder="Quick Search"></FormControl>
          </InputGroup>
        </Stack>
      </Navbar>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
