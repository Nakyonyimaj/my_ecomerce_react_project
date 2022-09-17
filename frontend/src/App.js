import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {Store} from './Store';
import CartScreen from "./Screens/CartScreen";
import SigninScreen from "./Screens/SigninScreen";



function App() {
  const {state,dispatch:ctxtDispatch} = useContext(Store);
  const {cart,userInfo} = state;

  const signoutHandler=()=>{
    ctxtDispatch({type:'USER_SIGNOUT'})
    localStorage.removeItem(userInfo);
  }

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-Container ">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Amazona</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to = "/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 &&(
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a,c) => a+c.quantity,0)}
                    </Badge>
                  )}
                </Link>
                {userInfo?(
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>

                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>

                    </LinkContainer>
                    <NavDropdown.Divider>
                      <Link className="drop-item" to ="#signout" onClick={signoutHandler}>
                        Sign Out
                      </Link>
                    </NavDropdown.Divider>
                  </NavDropdown>                ):(
                  <Link className="nav-link" to="/signi">
                  Sign In
                  </Link>
                )}
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />

            </Routes>
          </Container>
        </main>
        <footer>
           <div className="text-center">All rights reservered</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
