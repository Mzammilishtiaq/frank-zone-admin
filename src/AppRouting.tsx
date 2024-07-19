import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '@src/Pages/Auth/Login';
import ForgotPassword from '@src/Pages/Auth/ForgotPassword';
import VerificationCode from '@src/Pages/Auth/verificationcode';
import NewPassword from '@src/Pages/Auth/NewPassword';
import HomeContainer from './Containers/HomeContainer';
import UserMangment from './Pages/UserManagment/Index';
import UserMangmentList from './Pages/UserManagment/UserManagmentList';
import UserManagmentProfile from './Pages/UserManagment/UserManagmentProfile';
import VendorManagment from './Pages/VendorManagment/index';
import EcommerceShop from './Pages/VendorManagment/EcommerceShop';
import FoodOrdering from './Pages/VendorManagment/FoodOrdering';
import HealthBeauty from './Pages/VendorManagment/HealthBeauity';
import Handyman from './Pages/VendorManagment/Handman';
import OnlineConsulation from './Pages/VendorManagment/onlineConsulation';


const routes = [
  {
    path: '/login',
    component: <Login />,
  },
  {
    path: '/login',
    component: <Login />,
  },
  {
    path: '/forgotpassword',
    component: <ForgotPassword />,
  },
  {
    path: '/verificationcode',
    component: <VerificationCode />,
  },
  {
    path: '/newpassword',
    component: <NewPassword />,
  },
  {
    path: '/',
    component: <HomeContainer />,
    children: [
      {
        path:'/user_management',
        component:<UserMangment/>,
        children:[
          {
            path:'',
            component:<UserMangmentList/>
          }, {
            path:'profile/:id',
            component:<UserManagmentProfile/>
          }
        ]
      },
      {
        path:'/vendor_managment',
        component:<VendorManagment/>,
        children:[
          {
            path:'ecommerce_shop',
            component:<EcommerceShop/>,
          },
          {
            path:'food_ordering',
            component:<FoodOrdering/>,
          },
          {
            path:'health_beauty',
            component:<HealthBeauty/>,
          }, {
            path:'handyman',
            component:<Handyman/>,
          },{
            path:'online_consulation',
            component:<OnlineConsulation/>
          }

          
        ]
      }
    ]
  }
]



function AppRouting() {
  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map(({ path, component, children }) => (
            <Route path={path} element={component} key={Math.random()}>
              {
                children?.map(({ path, component,children }) => (
                  <Route path={path} element={component} key={Math.random()}>
                    {children &&
                                        children?.length > 0 &&
                                        children.map(({path,component})=>(
                                          <Route path={path} element={component} key={Math.random()}/>
                                        ))}
                  </Route>
                ))
              }
            </Route>
          ))}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouting
