import React from "react";
import {
  Navbar,
  Nav,
  InputGroup,
  FormControl,
  Dropdown,
} from "react-bootstrap";
import { Heart, Cart, Search, Person } from "react-bootstrap-icons";
import { Component } from 'react'

export class Header extends Component {

  logout = () => {
    localStorage.setItem('user_id', null)
  }
  render() {
    return (
      <div className="app w-100 bg-white">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="white"
          className="bg-primary border-bottom border-dark-1 mx-sm-5 pt-3"
          variant="light"
          sticky="top"
        >
          <Navbar.Brand className="ml-4 text-secondary" href="/">
            {/* <img src={require(`./headlogo.png`)} style={{ width: "120px"}}/> */}
            <svg width="150" height="60" viewBox="0 0 150 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="150" height="59.4952" fill="white"/>
              <path d="M17.9597 45.9421H16.6527V49.0461L14.5147 45.9705V45.9421H13.222V51.2693C13.6553 51.2693 14.0886 51.2693 14.5147 51.2693V48.3003L16.5746 51.2693H17.9597L17.9597 45.9421Z" fill="black"/>
              <path d="M24.554 45.9563C23.0908 45.9563 21.8975 47.1425 21.8975 48.6199C21.8975 50.0831 23.0908 51.2693 24.554 51.2693C26.0243 51.2693 27.2176 50.0831 27.2176 48.6199C27.2176 47.1425 26.0243 45.9563 24.554 45.9563ZM24.554 47.2419C25.3211 47.2419 25.932 47.8528 25.932 48.6199C25.932 49.3728 25.3211 49.9908 24.554 49.9908C23.794 49.9908 23.1831 49.3728 23.1831 48.6199C23.1831 47.8528 23.794 47.2419 24.554 47.2419Z" fill="black"/>
              <path d="M34.0932 47.2419H35.7482V45.9421C34.2069 45.9421 32.6726 45.9421 31.1384 45.9421V47.2419H32.7934V51.2693H34.0932L34.0932 47.2419Z" fill="black"/>
              <path d="M45.4814 47.256H46.8736V49.3159C46.8736 50.218 45.4814 50.218 45.4814 49.3159V49.046H44.1603V49.3159C44.1603 50.4169 45.0695 51.2976 46.1846 51.2976C47.2856 51.2976 48.209 50.4168 48.209 49.3159V45.9491H45.4814V47.256Z" fill="black"/>
              <path d="M51.9354 45.9491V49.1312C51.9354 51.9369 56.2185 51.9369 56.2185 49.1312V45.9491H54.8973C54.8973 47.1282 54.8973 47.945 54.8973 49.1312C54.8973 50.1896 53.2637 50.1896 53.2637 49.1312C53.2637 47.945 53.2637 47.1282 53.2637 45.9491H51.9354Z" fill="black"/>
              <path d="M64.6 49.6072C64.6 47.597 61.6238 48.2363 61.4036 47.5828C61.2474 47.0998 62.8597 46.7589 63.1652 47.5402L64.4934 47.5118C64.4437 45.2318 60.047 45.4022 60.047 47.5402C60.047 49.4935 63.2717 49.0318 63.2717 49.6072C63.2646 50.1967 61.5173 50.3033 61.3681 49.6072H60.0399C60.0399 51.802 64.6 51.8233 64.6 49.6072Z" fill="black"/>
              <path d="M71.3476 47.2419H73.0026V45.9421C71.4613 45.9421 69.9271 45.9421 68.3928 45.9421V47.2419H70.0478V51.2693H71.3477L71.3476 47.2419Z" fill="black"/>
              <path d="M86.1236 49.6072C86.1236 47.597 83.1475 48.2363 82.9273 47.5828C82.7711 47.0998 84.3834 46.7589 84.6888 47.5402L86.0171 47.5118C85.9674 45.2318 81.5707 45.4022 81.5707 47.5402C81.5707 49.4935 84.7954 49.0318 84.7954 49.6072C84.7883 50.1967 83.041 50.3033 82.8918 49.6072H81.5636C81.5636 51.802 86.1236 51.8233 86.1236 49.6072Z" fill="black"/>
              <path d="M91.2173 49.2521H93.2345V51.2622H93.2771H94.5343V45.9421H93.2771H93.2345V47.9522H91.2173V45.9421H89.9174V51.2622H91.2173V49.2521Z" fill="black"/>
              <path d="M101.113 45.9563C99.6494 45.9563 98.4561 47.1425 98.4561 48.6199C98.4561 50.0831 99.6494 51.2693 101.113 51.2693C102.583 51.2693 103.776 50.0831 103.776 48.6199C103.776 47.1425 102.583 45.9563 101.113 45.9563ZM101.113 47.2419C101.88 47.2419 102.491 47.8528 102.491 48.6199C102.491 49.3728 101.88 49.9908 101.113 49.9908C100.353 49.9908 99.7418 49.3728 99.7418 48.6199C99.7418 47.8528 100.353 47.2419 101.113 47.2419Z" fill="black"/>
              <path d="M109.041 50.4311H110.014C113.047 50.4311 113.019 45.9491 110.014 45.9491H107.741C107.741 47.7106 107.741 49.4935 107.741 51.2692H109.041V50.4311ZM110.014 47.1921C111.293 47.1921 111.293 49.188 110.014 49.188H109.07V47.1921H110.014Z" fill="black"/>
              <path d="M117.45 50.4311H118.424C121.457 50.4311 121.428 45.9491 118.424 45.9491H116.151C116.151 47.7106 116.151 49.4935 116.151 51.2692H117.45V50.4311ZM118.424 47.1921C119.702 47.1921 119.702 49.188 118.424 49.188H117.479V47.1921H118.424Z" fill="black"/>
              <path d="M125.359 45.9421H124.066V51.2622H125.359V45.9421Z" fill="black"/>
              <path d="M133.526 45.9421H132.219V49.0461L130.081 45.9705V45.9421H128.788V51.2693C129.221 51.2693 129.655 51.2693 130.081 51.2693V48.3003L132.141 51.2693H133.526L133.526 45.9421Z" fill="black"/>
              <path d="M142.517 49.7634C142.624 49.5148 142.567 48.6838 142.567 48.35H140.23V49.6853H140.898C140.678 49.8345 140.408 49.9268 140.11 49.9268C138.348 49.9268 138.348 47.2561 140.11 47.2561C140.664 47.2561 141.161 47.5899 141.36 48.0942L142.596 47.6184C142.198 46.5955 141.211 45.9279 140.11 45.9279C136.608 45.9279 136.608 51.2622 140.11 51.2622C141.125 51.2622 142.063 50.6726 142.517 49.7634H142.517Z" fill="black"/>
              <path d="M34.0003 7.57263H27.7336C27.7156 7.57263 27.7009 7.58728 27.7009 7.60533V25.573C27.7009 29.4762 24.5255 32.6514 20.6223 32.6514C16.7191 32.6514 13.5436 29.4759 13.5436 25.573V7.60533C13.5436 7.58728 13.529 7.57263 13.5109 7.57263H7.24423C7.22618 7.57263 7.21153 7.58728 7.21153 7.60533V25.573C7.21153 32.9676 13.2276 38.9837 20.6223 38.9837C28.0169 38.9837 34.033 32.9676 34.033 25.573V7.60533C34.033 7.58728 34.0183 7.57263 34.0003 7.57263H34.0003Z" fill="black"/>
              <path d="M81.215 7.58574C81.209 7.57737 81.199 7.57214 81.1886 7.57214H63.7323C63.7211 7.57214 63.7106 7.5779 63.7046 7.58784L54.5691 22.362L45.4333 7.58784C45.4275 7.57816 45.4168 7.57214 45.4055 7.57214H38.0365C38.0185 7.57214 38.0038 7.58679 38.0038 7.60484V38.9513C38.0038 38.9693 38.0185 38.984 38.0365 38.984H44.3016C44.3197 38.984 44.3343 38.9693 44.3343 38.9513V17.8487L54.5413 34.3541C54.5534 34.3734 54.585 34.3734 54.5971 34.3541L64.8012 17.854V38.9513C64.8012 38.9693 64.8158 38.984 64.8339 38.984H71.1016C71.1147 38.984 71.1239 38.9751 71.1291 38.9638C71.1296 38.9623 71.1322 38.9628 71.1327 38.9612L81.2197 7.61479C81.2228 7.60485 81.2213 7.59412 81.215 7.58575L81.215 7.58574ZM81.0559 28.41C81.062 28.4183 81.0719 28.4236 81.0824 28.4236H87.8785C87.8889 28.4236 87.8989 28.4183 87.9049 28.41C87.9109 28.4016 87.9127 28.3909 87.9096 28.3809L84.5115 17.8208C84.5029 17.7935 84.4579 17.7935 84.4493 17.8208L81.0512 28.3809C81.0481 28.3909 81.0499 28.4016 81.0559 28.41V28.41ZM89.9265 34.6515C89.922 34.6379 89.9095 34.6287 89.8953 34.6287H79.0655C79.0514 34.6287 79.0385 34.6379 79.0344 34.6515L77.6532 38.9413C77.65 38.9513 77.6516 38.962 77.6579 38.9704C77.6639 38.9787 77.6738 38.984 77.6843 38.984H91.2766C91.287 38.984 91.2969 38.9787 91.303 38.9704C91.3092 38.962 91.3108 38.9513 91.3077 38.9413L89.9265 34.6515Z" fill="black"/>
              <path d="M108.469 7.58889C108.463 7.57842 108.452 7.57214 108.44 7.57214H95.3214C95.3034 7.57214 95.2887 7.5868 95.2887 7.60485V28.8199C95.2887 28.8345 95.2984 28.8471 95.3125 28.8513C95.3154 28.852 95.3185 28.8526 95.3214 28.8526C95.3324 28.8526 95.3431 28.8471 95.3491 28.8369L108.468 7.62185C108.474 7.61218 108.474 7.59936 108.469 7.58889V7.58889ZM102.459 29.2188C102.447 29.1994 102.416 29.1994 102.404 29.2188L96.395 38.9343C96.3887 38.9442 96.3884 38.957 96.3942 38.9672C96.4 38.9777 96.4109 38.984 96.4227 38.984H108.44C108.452 38.984 108.463 38.9777 108.469 38.9672C108.474 38.957 108.474 38.9442 108.468 38.9343L102.459 29.2188ZM142.563 13.9068C142.581 13.9068 142.595 13.8922 142.595 13.8741V7.60485C142.595 7.5868 142.581 7.57214 142.563 7.57214H115.807C115.805 7.57214 115.804 7.57371 115.802 7.57398C115.797 7.57476 115.792 7.57659 115.788 7.57973C115.786 7.5813 115.784 7.58261 115.782 7.5847C115.781 7.58574 115.78 7.58627 115.779 7.58758L106.087 23.2621C106.08 23.2726 106.08 23.2859 106.087 23.2964L115.779 38.9683C115.779 38.9693 115.781 38.9691 115.782 38.9699C115.788 38.978 115.796 38.9837 115.807 38.9837H142.563C142.581 38.9837 142.596 38.9691 142.596 38.951V32.682C142.596 32.6639 142.581 32.6493 142.563 32.6493H122.109V26.4454H136.296C136.314 26.4454 136.329 26.4308 136.329 26.4127V20.1434C136.329 20.1254 136.314 20.1107 136.296 20.1107H122.109V13.9068L142.563 13.9068Z" fill="black"/>
            </svg>

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto d-flex justify-content-end mr-2 align-items-center">
              <Nav.Link href="/" active>
                Home
            </Nav.Link>
              
              <Nav.Link href="/customize">Customize</Nav.Link>
              <Nav.Link href="/bulk">Bulk </Nav.Link>
              <InputGroup className="mx-2">
                <InputGroup.Prepend>
                  <InputGroup.Text className="bg-light border-right-0 d-none d-lg-flex">
                    <Search className="text-muted" size={14} />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  className="bg-light shadow-none border-left-0 pl-0 d-none d-lg-block"
                  placeholder="Search"
                  style={{ fontSize: "14px" }}
                />
              </InputGroup>
              <span
                className="bg-secondary m-2 d-none d-lg-block"
                style={{ width: "2px" }}
              >
                ???
            </span>
              <Nav.Link
                href="/login"
              >
                Login
            </Nav.Link>
              <Nav.Link className="d-none d-lg-block" href="/wishlist">
                <Heart className="ml-1 text-muted mt-1" size={15} />
              </Nav.Link>
              <Nav.Link className="d-none d-lg-block" href="/cart">
                <Cart className="ml-2 text-muted" size={16} />
              </Nav.Link>
              <Dropdown alignRight className="ml-1 pt-1">
                {/*  Add/Remove hidden  */}
                <Dropdown.Toggle
                  className="text-muted shadow-none"
                  variant="white"
                >
                  <Person className=" text-muted rounded-circle" size={19} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Header>{localStorage.getItem('user_name')}</Dropdown.Header>
                  {/* Username */}
                  <Dropdown.Item eventKey="1" variant="white" href="/wishlist">
                    Wishlist
                </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="2"
                    variant="white"
                    href="/savedtshirts"
                  >
                    Saved TShirts
                </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="3"
                    variant="white"
                    href="/accounts/orders"
                  >
                    My Orders
                </Dropdown.Item>
                  <Dropdown.Item eventKey="4" variant="white" href="/accounts">
                    My Account
                </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={this.logout} eventKey="4" variant="white">
                    Logout
                </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header;
