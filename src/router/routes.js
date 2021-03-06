import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';

export default [
  {
    path: "/",
    component: Home
  },
  {
    path: "/home",
    component: Home
  },
  {
    name:"search",
    path: "/search/:keyword?", // params参数可传可不传
    component: Search
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: Register
  },
]