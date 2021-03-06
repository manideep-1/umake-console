import React from "react";
import { Col, Row } from "react-bootstrap";

function Footer() {
  return (
    <div className="app">
      <div className="py-5 px-sm-5 mb-0 w-100" style={{ bottom: "0", backgroundColor: "#141414" }}>
      <svg className="ml-5" width="136" height="45" viewBox="0 0 136 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.9597 38.9421H9.65272V42.0461L7.51474 38.9705V38.9421H6.222V44.2693C6.65528 44.2693 7.08856 44.2693 7.51474 44.2693V41.3003L9.57459 44.2693H10.9597L10.9597 38.9421Z" fill="white"/>
        <path d="M17.554 38.9563C16.0908 38.9563 14.8975 40.1425 14.8975 41.6199C14.8975 43.0831 16.0908 44.2693 17.554 44.2693C19.0243 44.2693 20.2176 43.0831 20.2176 41.6199C20.2176 40.1425 19.0243 38.9563 17.554 38.9563ZM17.554 40.2419C18.3211 40.2419 18.932 40.8528 18.932 41.6199C18.932 42.3728 18.3211 42.9908 17.554 42.9908C16.794 42.9908 16.1831 42.3728 16.1831 41.6199C16.1831 40.8528 16.794 40.2419 17.554 40.2419Z" fill="white"/>
        <path d="M27.0932 40.2419H28.7482V38.9421C27.2069 38.9421 25.6726 38.9421 24.1384 38.9421V40.2419H25.7934V44.2693H27.0932L27.0932 40.2419Z" fill="white"/>
        <path d="M38.4814 40.256H39.8736V42.3159C39.8736 43.218 38.4814 43.218 38.4814 42.3159V42.046H37.1603V42.3159C37.1603 43.4169 38.0695 44.2976 39.1846 44.2976C40.2856 44.2976 41.209 43.4168 41.209 42.3159V38.9491H38.4814V40.256Z" fill="white"/>
        <path d="M44.9354 38.9491V42.1312C44.9354 44.9369 49.2185 44.9369 49.2185 42.1312V38.9491H47.8973C47.8973 40.1282 47.8973 40.945 47.8973 42.1312C47.8973 43.1896 46.2637 43.1896 46.2637 42.1312C46.2637 40.945 46.2637 40.1282 46.2637 38.9491H44.9354Z" fill="white"/>
        <path d="M57.6 42.6072C57.6 40.597 54.6238 41.2363 54.4036 40.5828C54.2474 40.0998 55.8597 39.7589 56.1652 40.5402L57.4934 40.5118C57.4437 38.2318 53.047 38.4022 53.047 40.5402C53.047 42.4935 56.2717 42.0318 56.2717 42.6072C56.2646 43.1967 54.5173 43.3033 54.3681 42.6072H53.0399C53.0399 44.802 57.6 44.8233 57.6 42.6072Z" fill="white"/>
        <path d="M64.3476 40.2419H66.0026V38.9421C64.4613 38.9421 62.9271 38.9421 61.3928 38.9421V40.2419H63.0478V44.2693H64.3477L64.3476 40.2419Z" fill="white"/>
        <path d="M79.1236 42.6072C79.1236 40.597 76.1475 41.2363 75.9273 40.5828C75.7711 40.0998 77.3834 39.7589 77.6888 40.5402L79.0171 40.5118C78.9674 38.2318 74.5707 38.4022 74.5707 40.5402C74.5707 42.4935 77.7954 42.0318 77.7954 42.6072C77.7883 43.1967 76.041 43.3033 75.8918 42.6072H74.5636C74.5636 44.802 79.1236 44.8233 79.1236 42.6072Z" fill="white"/>
        <path d="M84.2173 42.2521H86.2345V44.2622H86.2771H87.5343V38.9421H86.2771H86.2345V40.9522H84.2173V38.9421H82.9174V44.2622H84.2173V42.2521Z" fill="white"/>
        <path d="M94.1126 38.9563C92.6494 38.9563 91.4561 40.1425 91.4561 41.6199C91.4561 43.0831 92.6494 44.2693 94.1126 44.2693C95.5829 44.2693 96.7762 43.0831 96.7762 41.6199C96.7762 40.1425 95.5829 38.9563 94.1126 38.9563ZM94.1126 40.2419C94.8797 40.2419 95.4906 40.8528 95.4906 41.6199C95.4906 42.3728 94.8797 42.9908 94.1126 42.9908C93.3526 42.9908 92.7418 42.3728 92.7418 41.6199C92.7418 40.8528 93.3526 40.2419 94.1126 40.2419Z" fill="white"/>
        <path d="M102.041 43.4311H103.014C106.047 43.4311 106.019 38.9491 103.014 38.9491H100.741C100.741 40.7106 100.741 42.4935 100.741 44.2692H102.041V43.4311ZM103.014 40.1921C104.293 40.1921 104.293 42.188 103.014 42.188H102.07V40.1921H103.014Z" fill="white"/>
        <path d="M110.45 43.4311H111.424C114.457 43.4311 114.428 38.9491 111.424 38.9491H109.151C109.151 40.7106 109.151 42.4935 109.151 44.2692H110.45V43.4311ZM111.424 40.1921C112.702 40.1921 112.702 42.188 111.424 42.188H110.479V40.1921H111.424Z" fill="white"/>
        <path d="M118.359 38.9421H117.066V44.2622H118.359V38.9421Z" fill="white"/>
        <path d="M126.526 38.9421H125.219V42.0461L123.081 38.9705V38.9421H121.788V44.2693C122.221 44.2693 122.655 44.2693 123.081 44.2693V41.3003L125.141 44.2693H126.526L126.526 38.9421Z" fill="white"/>
        <path d="M135.517 42.7634C135.624 42.5148 135.567 41.6838 135.567 41.35H133.23V42.6853H133.898C133.678 42.8345 133.408 42.9268 133.11 42.9268C131.348 42.9268 131.348 40.2561 133.11 40.2561C133.664 40.2561 134.161 40.5899 134.36 41.0942L135.596 40.6184C135.198 39.5955 134.211 38.9279 133.11 38.9279C129.608 38.9279 129.608 44.2622 133.11 44.2622C134.125 44.2622 135.063 43.6726 135.517 42.7634H135.517Z" fill="white"/>
        <path d="M27.0003 0.572632H20.7336C20.7156 0.572632 20.7009 0.58728 20.7009 0.60533V18.573C20.7009 22.4762 17.5255 25.6514 13.6223 25.6514C9.71906 25.6514 6.5436 22.4759 6.5436 18.573V0.60533C6.5436 0.58728 6.52896 0.572632 6.51091 0.572632H0.244234C0.226183 0.572632 0.211533 0.58728 0.211533 0.60533V18.573C0.211533 25.9676 6.2276 31.9837 13.6223 31.9837C21.0169 31.9837 27.033 25.9676 27.033 18.573V0.60533C27.033 0.58728 27.0183 0.572632 27.0003 0.572632H27.0003Z" fill="white"/>
        <path d="M74.215 0.585744C74.209 0.577372 74.199 0.572144 74.1886 0.572144H56.7323C56.7211 0.572144 56.7106 0.5779 56.7046 0.587841L47.5691 15.362L38.4333 0.587841C38.4275 0.578163 38.4168 0.572144 38.4055 0.572144H31.0365C31.0185 0.572144 31.0038 0.586791 31.0038 0.604842V31.9513C31.0038 31.9693 31.0185 31.984 31.0365 31.984H37.3016C37.3197 31.984 37.3343 31.9693 37.3343 31.9513V10.8487L47.5413 27.3541C47.5534 27.3734 47.585 27.3734 47.5971 27.3541L57.8012 10.854V31.9513C57.8012 31.9693 57.8158 31.984 57.8339 31.984H64.1016C64.1147 31.984 64.1239 31.9751 64.1291 31.9638C64.1296 31.9623 64.1322 31.9628 64.1327 31.9612L74.2197 0.614789C74.2228 0.604848 74.2213 0.594123 74.215 0.58575L74.215 0.585744ZM74.0559 21.41C74.062 21.4183 74.0719 21.4236 74.0824 21.4236H80.8785C80.8889 21.4236 80.8989 21.4183 80.9049 21.41C80.9109 21.4016 80.9127 21.3909 80.9096 21.3809L77.5115 10.8208C77.5029 10.7935 77.4579 10.7935 77.4493 10.8208L74.0512 21.3809C74.0481 21.3909 74.0499 21.4016 74.0559 21.41V21.41ZM82.9265 27.6515C82.922 27.6379 82.9095 27.6287 82.8953 27.6287H72.0655C72.0514 27.6287 72.0385 27.6379 72.0344 27.6515L70.6532 31.9413C70.65 31.9513 70.6516 31.962 70.6579 31.9704C70.6639 31.9787 70.6738 31.984 70.6843 31.984H84.2766C84.287 31.984 84.2969 31.9787 84.303 31.9704C84.3092 31.962 84.3108 31.9513 84.3077 31.9413L82.9265 27.6515Z" fill="white"/>
        <path d="M101.469 0.588886C101.463 0.578422 101.452 0.572144 101.44 0.572144H88.3214C88.3034 0.572144 88.2887 0.586797 88.2887 0.604847V21.8199C88.2887 21.8345 88.2984 21.8471 88.3125 21.8513C88.3154 21.852 88.3185 21.8526 88.3214 21.8526C88.3324 21.8526 88.3431 21.8471 88.3491 21.8369L101.468 0.621854C101.474 0.612176 101.474 0.599355 101.469 0.588892V0.588886ZM95.4592 22.2188C95.4474 22.1994 95.4155 22.1994 95.4037 22.2188L89.395 31.9343C89.3887 31.9442 89.3884 31.957 89.3942 31.9672C89.4 31.9777 89.4109 31.984 89.4227 31.984H101.44C101.452 31.984 101.463 31.9777 101.469 31.9672C101.474 31.957 101.474 31.9442 101.468 31.9343L95.4592 22.2188ZM135.563 6.90683C135.581 6.90683 135.595 6.89219 135.595 6.87414V0.604847C135.595 0.586797 135.581 0.572144 135.563 0.572144H108.807C108.805 0.572144 108.804 0.573712 108.802 0.573976C108.797 0.574762 108.792 0.576594 108.788 0.579731C108.786 0.581299 108.784 0.582608 108.782 0.584699C108.781 0.585745 108.78 0.586268 108.779 0.587577L99.0869 16.2621C99.0804 16.2726 99.0804 16.2859 99.0869 16.2964L108.779 31.9683C108.779 31.9693 108.781 31.9691 108.782 31.9699C108.788 31.978 108.796 31.9837 108.807 31.9837H135.563C135.581 31.9837 135.596 31.9691 135.596 31.951V25.682C135.596 25.6639 135.581 25.6493 135.563 25.6493H115.109V19.4454H129.296C129.314 19.4454 129.329 19.4308 129.329 19.4127V13.1434C129.329 13.1254 129.314 13.1107 129.296 13.1107H115.109V6.90682L135.563 6.90683Z" fill="white"/>
      </svg>


        <Row
          className="mx-5 pb-3 border-bottom border-light"
          style={{ fontSize: "13px",marginTop:"auto" }}
        >
          <Col className="p-0 pt-4 col-6 col-lg-4 col-xl-3">
            <p style={{color:"white"}}>CUSTOMER SERVICE</p>
            <a href="/helpandsupport" className="text-white" style={{opacity:"0.8"}}>
              Help and Support
            </a>
            <br />
            <a href="/feedback" className="text-white" style={{opacity:"0.8"}}>
              Feedback and Suggestions
            </a>
            <br/>
            <a href="/track" className="text-white" style={{opacity:"0.8"}}>
              Track Order
            </a>
            <br />
            <a href="/return" className="text-white" style={{opacity:"0.8"}}>
              Return Order
            </a>
            <br />
            <a href="/cancel" className="text-white" style={{opacity:"0.8"}}>
              Cancel Order
            </a>
            <br />
          </Col>
          <Col className="p-0 pt-4 col-6 col-lg-4 col-xl-3">
            <p style={{color:"white"}}>COMPANY</p>
            <a href="/contact-us" className="text-white" style={{opacity:"0.8"}}>
              About us
            </a>
            <br />
            <a href="/track" className="text-white" style={{opacity:"0.8"}}>
              Terms & Conditions
            </a>
            <br />
            <a href="/return" className="text-white" style={{opacity:"0.8"}}>
              Priacy policy
            </a>
            <br />
            <a href="/cancel" className="text-white" style={{opacity:"0.8"}}>
              Blog
            </a>
            <br />
          </Col>
          <Col className="p-0 pt-4 col-6 col-lg-4 col-xl-3">
            <p style={{color:"white"}}>CONNECT WITH US</p>
            <a href="#twitter">
              <i
                className="fa fa-facebook pr-3 text-white" style={{opacity:"0.8"}}
                style={{ fontSize: "20px" }}
              />
            </a>
            <a href="#snapchat">
              <i
                className="fa fa-instagram pr-3 text-white" style={{opacity:"0.8"}}
                style={{ fontSize: "20px" }}
              />
            </a>
            <a href="#twitter">
              <i
                className="fa fa-twitter pr-3 text-white" style={{opacity:"0.8"}}
                style={{ fontSize: "20px" }}
              />
            </a>
            <br />
            <br />
            <a href="#snapchat">
              <i
                className="fa fa-snapchat pr-3 text-white" style={{opacity:"0.8"}}
                style={{ fontSize: "20px" }}
              />
            </a>
            <a href="#pinterest">
              <i
                className="fa fa-pinterest pr-3 text-white" style={{opacity:"0.8"}}
                style={{ fontSize: "20px" }}
              />
            </a>
          </Col>
          <Col className="p-0 pt-4 col-12 col-md-6 col-lg-4 col-xl-3">
            <p style={{color:"white"}}>KEEP UP TO DATE</p>
            <form className="row col-12">
              <input
                className="bg-dark form-control shadow-none rounded-0 col-7 text-white" style={{opacity:"0.8"}}
                type="text"
                style={{ fontSize: "13px",borderColor:"white" }}
                placeholder="Enter Email ID"
              ></input>
              <div
                className="btn col-5 rounded-0"
                style={{ fontSize: "13px", color:"#141414", backgroundColor:"white" }}
              >
                SUBSCRIBE
              </div>
            </form>
          </Col>
          <Col className="p-0 pt-4 col-6 col-lg-4 col-xl-3">
            <br />
            <a href="/contact-us" className="text-white" style={{opacity:"0.8"}}>
              <i className="fa fa-repeat pr-2 text-white" style={{opacity:"0.8"}} />
              15 Days return policy
            </a>
            <br />
            <a href="/track" className="text-white" style={{opacity:"0.8"}}>
              <i className="fa fa-money pr-2 text-white" style={{opacity:"0.8"}} />
              Cash on delivery
            </a>
            <br />
          </Col>
          <Col className="p-0 pt-4 col-6 col-lg-4 col-xl-3">
            <p style={{color:"white"}}>DOWNLOAD THE APP</p>
          </Col>
          <Col className="p-0 pt-4 col-6 col-lg-4 col-xl-3">
            <p style={{color:"white"}}>100% SECURE PAYMENT</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
