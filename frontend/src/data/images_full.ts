import Apple from '../components/images_full/products/AppleProductImage';
import StrawBerry from '../components/images_full/products/StrawberryProductImage';

import Home from '../components/images_full/navbar/HomeIcon'
import Dashboard from '../components/images_full/navbar/DashboardIcon'
import Products from '../components/images_full/navbar/ProductsIcon'
import AddProduct from '../components/images_full/navbar/AddProductIcon'
import Login from '../components/images_full/navbar/LoginIcon'
import Signup from '../components/images_full/navbar/SignupIcon'
import Cart from '../components/images_full/navbar/CartIcon'
import Logout from '../components/images_full/navbar/LogoutIcon'

const products = { Apple, StrawBerry };
const routes = { Home, Dashboard, Products, AddProduct, Login, Signup, Cart, Logout }

export const productImages = Object.fromEntries(
  Object.entries(products).map(([key, value]) => [key.toLowerCase(), value])
);

export const routeImages = Object.fromEntries(
  Object.entries(routes).map(([key, value]) => [key.toLowerCase(), value])
);




