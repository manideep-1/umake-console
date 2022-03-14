import React from 'react';
import Home from './components/Home'
import Product from './components/Product'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AccountHead from './components/AccountHead';
import AccountBox from './components/AccountBox';
import MyAddress from './components/MyAddress';
import MyAddressBody from './components/MyAddressBody';
import AddAddress from './components/AddAddress';
import { MyProfile } from './components/MyProfile';
import MyProfileHead from './components/MyProfileHead';
import EditAddress from './components/EditAddress';
import Orders from './components/Orders';
import OrdersBody from './components/OrdersBody';
import MyWallet from './components/MyWallet';
import MyWalletHead from './components/MyWalletHead';
import OrderInfo from './components/OrderInfo';
import OrderInfoHead from './components/OrderInfoHead';
import SleeveTshirtHead from './components/SleeveTshirtHead';
import SleeveTshirtBody from './components/SleeveTshirtBody';
import WishList from './components/WishList'
import Cart from './components/Cart'
import SelectDeliveryAddress from './components/SelectDeliveryAddress'
import CartHead from './components/CartHead'
import QueryHead from './components/QueryHead'
import QueryBox from './components/QueryBox'
import OrdersrelatedHead from './components/OrdersrelatedHead';
import RefundsRelated from './components/RefundsRelated';
import WalletRelated from './components/WalletRelated';
import AccountRelated from './components/AccountRelated';
import AnotherRelated from './components/AnotherRelated';
import OrdersrelatedBody from './components/OrdersrelatedBody';
import DeliveryRelatedHead from './components/DeliveryRelatedHead';
import RefundsRelatedBody from './components/RefundsRelatedBody';
import WalletRelatedBody from './components/WalletRelatedBody';
import DeliverRelatedBody from './components/DeliverRelatedBody';
import AccountRelatedBody from './components/AccountRelatedBody';
import PaymentRelatedHead from './components/PaymentRelatedHead';
import AnotherRelatedBody from './components/AnotherRelatedBody';
import PaymentRelatedBody from './components/PaymentRelatedBody';
import ReturnRelatedHead from './components/ReturnRelatedHead';
import ReturnRelatedBody from './components/ReturnRelatedBody';
import FeedbackHead from './components/FeedbackHead';
import FeedbackBody from './components/FeedbackBody';
import LoginPage from './components/LoginPage';
import Customize from './components/Customize';
import CustomizeAdmin from './components/CustomizeAdmin'
import Upload from './components/Upload';
import DisplayImage from './components/DisplayImage';
import PageNotFound from './components/404';
import Bulk from './components/Bulk';
import Savedtshirts from './components/Savedtshirts';
import Savedtshirtshead from './components/Savedtshirtshead';
import AdminDesigns from './components/AdminDesigns'
import AdminDesignsHead from './components/AdminDesignsHead'
import "./App.css";
import { Display } from 'react-bootstrap-icons';
import Wishlist_head from './components/Wishlist_head';
import AdminDesign from './components/AdminDesign';


function App() {

  return (
    <div className="app">
      <div className="sticky-top">
      <Header/>
      </div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/design/men1/productView" exact component={Product}/>
          <Route path="/design/men1/productView/:productId" exact component={Product}/>
          <Route path="/design/men2/productView" exact component={Product}/>
          <Route path="/design/men2/productView/:productId" exact component={Product}/>
          <Route path="/design/men3/productView" exact component={Product}/>
          <Route path="/design/men3/productView/:productId" exact component={Product}/>
          <Route path="/design/women1/productView" exact component={Product}/>
          <Route path="/design/women1/productView/:productId" exact component={Product}/>
          <Route path="/design/women2/productView" exact component={Product}/>
          <Route path="/design/women2/productView/:productId" exact component={Product}/>
          <Route path="/design/women3/productView" exact component={Product}/>
          <Route path="/design/women3/productView/:productId" exact component={Product}/>
          <Route path="/accounts" exact component={Account}/>
          <Route path="/accounts/addresses" exact component={addressestotal}></Route>
          <Route path="/accounts/orders" exact component={Orderstotal}></Route>
          <Route path="/accounts/orders/ordersinfo/:order_info" exact component={OrderInfototal}></Route>
          <Route path="/accounts/addresses/addaddress" exact component={AddAddressTotal}></Route>
          {/* <Route path="/accounts/addresses/editaddress"
          exact component={EditAddressTotal}></Route>  */}
          <Route path="/accounts/addresses/editaddress/:address_form"
          exact component={EditAddressTotal}></Route>
          <Route path="/savedtshirts" exact component={SavedtshirtsTotal}></Route>
          <Route path="/adminDesigns" exact component={AdminDesignsTotal}></Route>
          {/* <Route path="/address/editaddress/" component={AddressDetails}></Route> */}
          <Route path="/accounts/myprofile" exact component={MyProfileTotal}></Route>
          <Route path="/accounts/mywallet" exact component={Wallettotal}></Route>
          <Route path="/accounts/orders/ordersinfo" exact component={OrderInfototal}></Route>
          <Route path="/design/men1" exact component= {Sleevetshirttotal}></Route>
          <Route path="/design/men2" exact component= {Sleevetshirttotal}></Route>
          <Route path="/design/men3" exact component= {Sleevetshirttotal}></Route>
          <Route path="/design/women1" exact component= {Sleevetshirttotal}></Route>
          <Route path="/design/women2" exact component= {Sleevetshirttotal}></Route>
          <Route path="/design/women3" exact component= {Sleevetshirttotal}></Route>
          <Route path="/cart" exact component= {CartTotal}></Route>
          {/* <Route path="/cart/selectAddress" exact component= {SelectDeliveryAddress}></Route> */}
          <Route path="/cart/selectAddress" render={(props) => <SelectDeliveryAddress {...props}/>}/>
          <Route path="/wishlist" exact component= {WishlistTotal}/>
          <Route path="/helpandsupport" exact component={Query}/>
          <Route path="/helpandsupport/ordersrelated" exact component={OrdersRelate} />
          <Route path="/helpandsupport/deliveryrelated" exact component={Delivery} />
          <Route path="/helpandsupport/paymentrelated" exact component={Payment} />
          <Route path="/helpandsupport/refundsandreturns" exact component={Refunds} />
          <Route path="/helpandsupport/related" exact component={Related} />
          <Route path="/helpandsupport/wallet" exact component={Wallet} />
          <Route path="/helpandsupport/account" exact component={AccountRelate} />
          <Route path="/helpandsupport/another" exact component={Another} />
          <Route path="/feedback" exact component={Feedback}/>
          <Route path="/adminDesign/men1" exact component={AdminDesign}/>
          <Route path="/login" exact component={LoginPage}/>
          <Route path="/customize" render={(props) => <Customize {...props}/>}/>
          <Route path="/customizeAdmin" render={(props) => <CustomizeAdmin {...props}/>}/>
          <Route path="/upload" exact component={Upload}/>
          <Route path="/display" exact component={DisplayImage}/>
          <Route path="/bulk" exact component={Bulk}/>
          <Route path="/" component={PageNotFound}/>
         
          
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}
const Sleevetshirttotal =() =>(

  <div >
      {/* <div className=""> */}
        <div className="">
        <SleeveTshirtHead></SleeveTshirtHead>
        </div>
        <div className="">
        <SleeveTshirtBody></SleeveTshirtBody>
        </div>
        
      
  </div>

  
  )
  const CartTotal=()=>(
   
    <div className="container" >
      <div className="row">
     <CartHead></CartHead>
      </div>
      <div>
     <Cart></Cart>
      </div>
    </div>
  )
const WishlistTotal=()=>(
  // <div>
  //   <div>
  //   ?<Savedtshirtshead></Savedtshirtshead>
  <div className="container" >
    <div className="row">
    <Wishlist_head></Wishlist_head>
    </div>
    <div>
    <WishList></WishList>
    </div>
  </div>
)
const SavedtshirtsTotal=()=>(
  // <div>
  //   <div>
  //   ?<Savedtshirtshead></Savedtshirtshead>
  <div className="container" >
    <div className="row">
    <Savedtshirtshead></Savedtshirtshead>
    </div>
    <div>
    <Savedtshirts></Savedtshirts>
    </div>
  </div>
  //   </div>
  // </div>

)

const AdminDesignsTotal=()=>(
  // <div>
  //   <div>
  //   ?<Savedtshirtshead></Savedtshirtshead>
  <div className="container" >
    <div className="row">
    <AdminDesignsHead></AdminDesignsHead>
    </div>
    <div>
    <AdminDesigns></AdminDesigns>
    </div>
  </div>
  //   </div>
  // </div>

)

const Account =() =>(

  <div>
  
  <div className="container">
    <AccountHead></AccountHead>
 
    <AccountBox></AccountBox>
  </div>
  </div>
 
  
);
const Feedback =() =>(

  <div>
    <div>
    <div class="container "  id="scaled">
      <FeedbackHead></FeedbackHead>
      <FeedbackBody></FeedbackBody>
    </div>
    </div>
    </div>
  
    
  );
  

const addressestotal = () =>(

<div>
  <div>
  <div className="container "  id="scaled">
    <MyAddress></MyAddress>
    <MyAddressBody></MyAddressBody>
  </div>
  </div>
  </div>


);

const AddAddressTotal =() =>(

<div>
  <div>
  <div className="container ">
    <MyAddress></MyAddress>
  
    <AddAddress></AddAddress>
  </div>
  </div>
  </div>

);
const MyProfileTotal =() =>(

<div>
    <div>
    <div className="container ">
      <MyProfileHead></MyProfileHead>
    
      <MyProfile></MyProfile>
    </div>
    </div>
    </div>

);
const EditAddressTotal = () =>(

  <div>
      <div>
      <div className="container "  id="scaled">
        <MyAddress></MyAddress>
        <EditAddress></EditAddress>
      </div>
      </div>
      </div>
  
  
  );
  const Orderstotal = () =>(

    <div id="orderscolor">
        <div>
        <div className="container ">
          <Orders></Orders>
          <OrdersBody></OrdersBody>
        </div>
        </div>
        </div>
    
    
    );
    const Wallettotal = () =>(

      <div>
    <div>
    <div className="container ">
    <MyWalletHead></MyWalletHead>
   <MyWallet></MyWallet>
     
    </div>
    </div>
    </div>
      
      
      );
const OrderInfototal =() =>(

<div id="orderscolor">
    <div className="container" >
      <OrderInfoHead></OrderInfoHead>
    
      <OrderInfo></OrderInfo>
    </div>
</div>

);

  const Query =() => (
  <div className="container">
  <div className="row">
          <QueryHead></QueryHead>
  </div>
  <div className="">
          <QueryBox></QueryBox>
  </div>
</div>  
  );
  const OrdersRelate = () => (
  <div className="container">
  <div className="row">
          <OrdersrelatedHead></OrdersrelatedHead>
  </div>
  <div className="">
          <OrdersrelatedBody></OrdersrelatedBody>
  </div>
</div>  
  )

  const Delivery = () => (    
  <div className="container">
  <div className="row">
          <DeliveryRelatedHead></DeliveryRelatedHead>
  </div>
  <div className="">
          <DeliverRelatedBody></DeliverRelatedBody>
  </div>
</div>  
  )

  const Payment = () => (
  <div className="container">
  <div className="row">
          <PaymentRelatedHead></PaymentRelatedHead>
  </div>
  <div className="">
          <PaymentRelatedBody></PaymentRelatedBody>
  </div>
</div>  
  )
  
  const Refunds = () => (
  <div className="container">
  <div className="row">
          <RefundsRelated ></RefundsRelated>
  </div>
  <div className="">
          <RefundsRelatedBody ></RefundsRelatedBody>
  </div>
</div>  
  )

  const Related = () => (
    
  <div className="container">
  <div className="row">
          <ReturnRelatedHead>
          </ReturnRelatedHead>
  </div>
  <div className="">
          <ReturnRelatedBody>
          </ReturnRelatedBody>
  </div>
</div>  
  )
  
  const Wallet = () => (
  <div className="container">
  <div className="row">
        <WalletRelated ></WalletRelated>
  </div>
  <div className="">
        <WalletRelatedBody ></WalletRelatedBody>
  </div>
</div>  
  )
  
  const AccountRelate = () => (
    <div className="container">
      <div className="row">
        <AccountRelated ></AccountRelated>
      </div>
      <div className="">
        <AccountRelatedBody></AccountRelatedBody>
      </div>
    </div>  
  )
  
  const Another = () => (
    <div className="container">
      <div className="row">
        <AnotherRelated></AnotherRelated>
      </div>
      <div className="">
        <AnotherRelatedBody ></AnotherRelatedBody>
      </div>
    </div>  
  )

export default App;
