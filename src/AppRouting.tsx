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
