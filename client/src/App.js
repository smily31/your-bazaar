import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from './screens/HomeScreen';
import LoginScreen from "./screens/LoginScreen";
import ProductDetails from './screens/ProductDetails';
import CartScreen from './screens/CartScreen';
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/login" component={LoginScreen} exact />
          <Route path="/profile" component={ProfileScreen} exact />
          <Route path="/register" component={RegisterScreen} exact />
          <Route path="/product/:id" component={ProductDetails} exact />
          <Route path="/cart/:id?" component={CartScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
