import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AuthProvider from "./context/AuthProvider";
import AllOrders from "./Pages/AllOrders/AllOrders";
import CreateaNewService from "./Pages/CreateaNewService/CreateaNewService";
import Banner from "./Pages/Home/Banner/Banner";
import Footer from "./Pages/Home/Footer/Footer";
import Grocery from "./Pages/Home/Grocery/Grocery";
import Header from "./Pages/Home/Header/Header";
import JoinUS from "./Pages/Home/JoinUS/JoinUS";
import Restaurants from "./Pages/Home/Restaurants/Restaurants";
import Services from "./Pages/Home/Services/Services";
import Login from "./Pages/Login/Login"
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import PrivateRoute from "./PrivateRoute/PrivateRoute"
import Myorders from "./Pages/Myorders/Myorders"
import NotFound from './Pages/NotFound/NotFound'
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Banner></Banner>
              <Services></Services>
              <Restaurants></Restaurants>
              <Grocery></Grocery>
              <JoinUS></JoinUS>
            </Route>
            <Route exact path="/home">
              <Banner></Banner>
              <Services></Services>
              <Restaurants></Restaurants>
              <Grocery></Grocery>
              <JoinUS></JoinUS>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/placeorder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/allorders">
              <AllOrders></AllOrders>
            </PrivateRoute>
            <PrivateRoute path="/addservices">
              <CreateaNewService></CreateaNewService>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <Myorders></Myorders>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
