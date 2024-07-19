import ShellContainer from '@src/Containers/ShellContainer'
import React from 'react'
import { Outlet } from 'react-router-dom'

function Index() {
  return (
    <ShellContainer  styleClass={''}>
        <Outlet/>
    </ShellContainer>
  )
}

export default Index
