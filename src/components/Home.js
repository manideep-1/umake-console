// import React from "react";
// import {
//   Container,
//   Carousel,
//   Row,
//   Card,
//   InputGroup,
//   FormControl,
// } from "react-bootstrap";
// import { Search } from "react-bootstrap-icons";
// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <div className="app">
//       {/* Body */}
//       <Container className="mt-0 mb-sm-2 mb-3 mb-sm-5 p-0">
//         <InputGroup className="ml-auto d-flex justify-content-end d-lg-none my-sm-2 p-0 col-sm-6 border-bottom border-muted">
//           <InputGroup.Prepend>
//             <InputGroup.Text className="bg-white rounded-0 border-0">
//               <Search className="text-muted" size={14} />
//             </InputGroup.Text>
//           </InputGroup.Prepend>
//           <FormControl
//             className="rounded-0 shadow-none border-0 "
//             placeholder="Search"
//             style={{ fontSize: "14px" }}
//           />
//         </InputGroup>
//         <Carousel nextIcon="" prevIcon="" interval="5000">
//           <Carousel.Item>
//             <img
//               className="float-right"
//               src="carousel1.jpg"
//               alt="First slide"
//             />
//             <div
//               className="m-2"
//               style={{ position: "absolute", top: "20%", left: "5%" }}
//             >
//               <h3 className="text-white col-lg-8 mx-0 px-0">
//                 Customize your clothes
//               </h3>
//               <p className="text-white col-lg-8 mx-0 px-0">
//                 Be It for business, group or event, design exciting and trendy
//                 customized clothing
//               </p>
//               <a
//                 className="btn px-5 shadow-none border-0 cust-btn bg-white"
//                 href="/customize"
//               >
//                 {" "}
//                 Get Started{" "}
//               </a>
//             </div>
//             <Carousel.Caption>
//               {/* <h3>First slide label</h3>
//                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img src="carousel2.jpg" alt="Second slide" />
//             <Carousel.Caption>
//               <h3>Second slide label</h3>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img src="carousel3.jpg" alt="Third slide" />
//             <Carousel.Caption>
//               <h3>Third slide label</h3>
//               <p>
//                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//               </p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//         <h4
//           className="mt-5 text-secondary mx-5 mx-sm-0"
//           style={{
//             textDecoration: "underline",
//             textDecorationColor: "rgba(20,20,20)",
//           }}
//         >
//           Men
//         </h4>
//         <Row className="d-flex justify-content-center align-items-center">
//           <a href="/design/men1">
//             <Card className="mx-3 mt-3 mt-sm-5 home-card">
//               <Card.Img variant="top" src="tshirt.jpg" />
//               <div className="m-2" style={{ position: "absolute", bottom: "0" }}>
//                 <h5 className="text-white">T-Shirts</h5>
//               </div>
//             </Card>
//           </a>
//           <a href="/design/men2">
//             <Card className="mx-3 mt-3 mt-sm-5 home-card">
//               <Card.Img variant="top" src="shirt.jpg" />
//               <div className="m-2" style={{ position: "absolute", bottom: "0" }}>
//                 <h5 className="text-white">Shirts</h5>
//               </div>
//             </Card>
//           </a>
//           <a href="/design/men3">
//             <Card className="mx-3 mt-3 mt-sm-5 home-card">
//               <Card.Img variant="top" src="hoodie.jpg" />
//               <div className="m-2" style={{ position: "absolute", bottom: "0" }}>
//                 <h5 className="text-white">Hoodies</h5>
//               </div>
//             </Card>
//           </a>
//         </Row>
//         <h4
//           className="mt-5 text-secondary mx-5 mx-sm-0"
//           style={{
//             textDecoration: "underline",
//             textDecorationColor: "rgba(20,20,20)",
//           }}
//         >
//           Women
//         </h4>
//         <Row className="d-flex justify-content-center">
//           <a href="/design/women1">
//             <Card className="mx-3 mt-3 mt-sm-5 home-card">
//               <Card.Img variant="top" src="tshirt-w.jpg" />
//               <div className="m-2" style={{ position: "absolute", bottom: "0" }}>
//                 <h5 className="text-white">T-Shirts</h5>
//               </div>
//             </Card>
//           </a>
//           <a href="/design/women2">
//             <Card className="mx-3 mt-3 mt-sm-5 home-card">
//               <Card.Img variant="top" src="dress-w.jpg" />
//               <div className="m-2" style={{ position: "absolute", bottom: "0" }}>
//                 <h5 className="text-white">Dresses</h5>
//               </div>
//             </Card>
//           </a>
//           <a href="/design/women3">
//             <Card className="mx-3 mt-3 mt-sm-5 home-card">
//               <Card.Img variant="top" src="hoodie-w.jpg" />
//               <div className="m-2" style={{ position: "absolute", bottom: "0" }}>
//                 <h5 className="text-white">Hoodies</h5>
//               </div>
//             </Card>
//           </a>
//         </Row>
//       </Container>
      
//     </div>
//   );
// }

// export default Home;
import React from "react";
import {
  Container,
  Carousel,
  Row,
  Card,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

function Home() {
  return (
    <div className="app">
      {/* Body */}
      <Container className="mt-0 mb-sm-2 mb-3 mb-sm-5 p-0">
        <InputGroup className="ml-auto d-flex justify-content-end d-lg-none my-sm-2 p-0 col-sm-6 border-bottom border-muted">
          <InputGroup.Prepend>
            <InputGroup.Text className="bg-white rounded-0 border-0">
              <Search className="text-muted" size={14} />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            className="rounded-0 shadow-none border-0 "
            placeholder="Search"
            style={{ fontSize: "14px" }}
          />
        </InputGroup>
        <Carousel nextIcon="" prevIcon="" interval="5000">
          <Carousel.Item>
            <img
              className="float-right"
              src="carousel1.jpg"
              alt="First slide"
            />
            <div
              className="m-2"
              style={{ position: "absolute", top: "20%", left: "5%" }}
            >
              <h3 className="text-white col-lg-8 mx-0 px-0">
                Customize your clothes
              </h3>
              <p className="text-white col-lg-8 mx-0 px-0">
                Be It for business, group or event, design exciting and trendy
                customized clothing
              </p>
              <a
                className="btn px-5 shadow-none border-0 cust-btn bg-white"
                href="/customize"
              >
                {" "}
                Get Started{" "}
              </a>
            </div>
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="carousel2.jpg" alt="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="carousel3.jpg" alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h4
          className="mt-5 text-secondary mx-5 mx-sm-0"
          style={{
            textDecoration: "underline",
            textDecorationColor: "rgba(20,20,20)",
          }}
        >
          Men
        </h4>
        <Row className="d-flex justify-content-center align-items-center">
        <a href="/design/men1">
          <Card className="mx-3 mt-3 mt-sm-5 home-card">
            <Card.Img variant="top" src="tshirt.jpg" />
            <div className="m-2" style={{ position: "absolute", bottom: "0" }}>
              <h5 className="text-white">T-Shirts</h5>
            </div>
          </Card>
          </a>
          <a href="/design/men2">
          <Card className="mx-3 mt-3 mt-sm-5 home-card">
            <Card.Img variant="top" src="shirt.jpg" />
            <div className="m-2" style={{ position: "absolute", bottom: "0" }}>
              <h5 className="text-white">Shirts</h5>
            </div>
          </Card>
          </a>
          <a href="/design/men3">
          <Card className="mx-3 mt-3 mt-sm-5 home-card">
            <Card.Img variant="top" src="hoodie.jpg" />
            <div className="m-2" style={{ position: "absolute", bottom: "0" }}>
              <h5 className="text-white">Hoodies</h5>
            </div>
          </Card>
          </a>
        </Row>
        <h4
          className="mt-5 text-secondary mx-5 mx-sm-0 "
          style={{
            textDecoration: "underline",
            textDecorationColor: "rgba(20,20,20)",
          }}
        >
          Women
        </h4>
        <Row className="d-flex justify-content-center">
        <a href="/design/women1">
          <Card className="mx-3 mt-3 mt-sm-5 home-card">
            <Card.Img variant="top" src="tshirt-w.jpg" />
            <div className="m-2" style={{ position: "absolute", bottom: "0" }}>
              <h5 className="text-white">T-Shirts</h5>
            </div>
          </Card>
          </a>
          <a href="/design/women2">
          <Card className="mx-3 mt-3 mt-sm-5 home-card">
            <Card.Img variant="top" src="dress-w.jpg" />
            <div className="m-2" style={{ position: "absolute", bottom: "0" }}>
              <h5 className="text-white">Dresses</h5>
            </div>
          </Card>
          </a>
          <a href="/design/women3">
          <Card className="mx-3 mt-3 mt-sm-5 home-card">
            <Card.Img variant="top" src="hoodie-w.jpg" />
            <div className="m-2" style={{ position: "absolute", bottom: "0" }}>
              <h5 className="text-white">Hoodies</h5>
            </div>
          </Card>
          </a>
        </Row>
      </Container>
      
    </div>
  );
}

export default Home;
