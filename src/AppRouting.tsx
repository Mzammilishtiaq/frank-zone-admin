import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '@src/Pages/Auth/Login';
import ForgotPassword from '@src/Pages/Auth/ForgotPassword';
import VerificationCode from '@src/Pages/Auth/verificationcode';
import NewPassword from '@src/Pages/Auth/NewPassword';
import HomeContainer from './Containers/HomeContainer';
import UserMangment from './Pages/UserManagment/Index';
import UserMangmentList from './Pages/UserManagment/UserManagmentList';
import UserManagmentProfile from './Pages/UserManagment/UserManagmentProfile/index';
import VendorManagment from './Pages/VendorManagment/index';
import EcommerceShop from './Pages/VendorManagment/EcommerceShop/index';
import EcommerceShopList from './Pages/VendorManagment/EcommerceShop/EcommerceShopList';
import EcommerceShopProfile from './Pages/VendorManagment/EcommerceShop/EcommerceShopProfile/index';
import FoodOrdering from './Pages/VendorManagment/FoodOrdering/index';
import FoodOrderingList from '@src/Pages/VendorManagment/FoodOrdering/FoodOrderingList';
import HealthBeauty from './Pages/VendorManagment/HealthBeauity/index';
import HealthBeautyList from './Pages/VendorManagment/HealthBeauity/HealthBeauityList';
import HealthBeautyProfile from './Pages/VendorManagment/HealthBeauity/HealthBeauityProfile/index';
import Handyman from './Pages/VendorManagment/Handyman';
import OnlineConsulation from './Pages/VendorManagment/OnlineConsulation/index';
import OnlineConsulationList from './Pages/VendorManagment/OnlineConsulation/OnlineConsulationList';
import HandymanProfile from './Pages/VendorManagment/Handyman/HandymanProfile';
import HandymanList from './Pages/VendorManagment/Handyman/HandymanList';
import FoodOrderingProfile from './Pages/VendorManagment/FoodOrdering/FoodOrderingProfile';
import OrderManagment from '@src/Pages/OrderManagment/index';
import Listing from './Pages/OrderManagment/Listing';
import ListingProfile from './Pages/OrderManagment/Listing/ListingProfile/ListingProfile';
import ListingList from './Pages/OrderManagment/Listing/ListingList';
import Booking from './Pages/OrderManagment/Booking';
import BookingList from './Pages/OrderManagment/Booking/BookingList';
import Dashboard from './Pages/Dashboard';
import  AuthGuide from '@src/Shared/utils/authGuide/authGuide';
import VendorManagmentList from './Pages/VendorManagment/VendorManagmentList';
import VendorManagmentProfile from './Pages/VendorManagment/VendorManagmentView';

const routes = [
  {
    path: '/',
    component: <Login />,
    protectedPath:false
  },
  {
    path: '/login',
    component: <Login />,
    protectedPath:false

  },
  {
    path: '/forgotpassword',
    component: <ForgotPassword />,
    protectedPath:false
  },
  {
    path: '/verificationcode',
    component: <VerificationCode />,
    protectedPath:false
  },
  {
    path: '/newpassword',
    component: <NewPassword />,
    protectedPath:false
  },
  {
    path: '/',
    component: <HomeContainer />,
    children: [
      {
        path: '/dashboard',
        component: <Dashboard />,
        protectedPath:true

      },
      {
        path: '/user_management',
        component: <UserMangment />,
        protectedPath:true,
        children: [
          {
            path: '',
            component: <UserMangmentList />
          }, {
            path: 'profile/:id',
            component: <UserManagmentProfile />
          }
        ]
      },
      {
        path: '/vendor_managment',
        component: <VendorManagment />,
        protectedPath:true,
        children: [
          {path:'',component:<VendorManagmentList/>},
          {path:'vendor_details/:id',component:<VendorManagmentProfile/>},
          {path:'vendor_details/?module_id',component:<VendorManagmentProfile/>},
          {path:'*',component:<h1 className='text-2xl font-semibold text-center my-10'>404 NOT FOUND</h1>}
          // {
          //   path: 'ecommerce_shop',
          //   component: <EcommerceShop />,
          //   children: [
          //     {
          //       path: 'ecommerce_shop_list',
          //       component: <EcommerceShopList />

          //     },
          //     {
          //       path: 'ecommerce_shop_profile/:id',
          //       component: <EcommerceShopProfile />
          //     }
          //   ]
          // },
          // {
          //   path: 'food_order',
          //   component: <FoodOrdering />,
          //   children: [
          //     {
          //       path: 'food_order_list',
          //       component: <FoodOrderingList />
          //     },
          //     {
          //       path: 'food_order_profile/:id',
          //       component: <FoodOrderingProfile />
          //     }
          //   ]
          // },
          // {
          //   path: 'health_beauty',
          //   component: <HealthBeauty />,
          //   children: [
          //     {
          //       path: "health_beauty_list",
          //       component: <HealthBeautyList />
          //     },
          //     {
          //       path: "health_beauty_profile/:id",
          //       component: <HealthBeautyProfile />
          //     }
          //   ]
          // },
          // {
          //   path: 'handyman',
          //   component: <Handyman />,
          //   children: [
          //     {
          //       path: 'handymanlist',
          //       component: <HandymanList />
          //     },
          //     {
          //       path: 'handyprofile/:id',
          //       component: <HandymanProfile />
          //     }
          //   ]
          // },
          // {
          //   path: 'online_consulation',
          //   component: <OnlineConsulation />,
          //   children: [
          //     {
          //       path: 'online_consulation_list',
          //       component: <OnlineConsulationList />
          //     }
          //   ]
          // }
        ]
      },
      {
        path: '/order_managment',
        component: <OrderManagment />,
        protectedPath:true,
        children: [
          {
            path: 'listing',
            component: <Listing />,
            children: [
              {
                path: 'listing_list',
                component: <ListingList />
              },
              {
                path: 'listing_profile/:id',
                component: <ListingProfile />
              }
            ]
          }, {
            path: 'booking',
            component: <Booking />,
            children: [
              {
                path: 'booking_list',
                component: <BookingList />
              }
            ]
          }
        ]
      }
    ]
  },{
    path:'*',
    component:<h1 className='text-2xl font-semibold text-center my-10'>404 NOT FOUND</h1>,
    protectedPath:false
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
                children?.map(({ path,protectedPath, component,children }) => (
                  <Route path={path} element={
                  <AuthGuide protectedPath={protectedPath}>{component}</AuthGuide>
                  } key={Math.random()}>
                    {
                      children && children.map(({ path, component, children }: any) => (
                        <Route path={path} element={component} key={Math.random()}>
                          {
                            children && children.map(({ path, component }: any) => (
                              <Route key={Math.random()} path={path} element={component} />
                            ))
                          }
                        </Route>
                      ))}
                  </Route>
                ))
              }
            </Route>
          ))}
          <Route path="*" element={<h1 className='text-2xl font-semibold text-center my-10'>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouting
