import ShellContainer from '@src/Containers/ShellContainer'
import React from 'react'
import {Outlet} from 'react-router-dom';

function index() {
  return (
    <ShellContainer styleClass={'gap-4 !h-full sm:px-0 sm:pt-20  !min-h-screen'}>
      <Outlet/>
    </ShellContainer>
  )
}

export default index
