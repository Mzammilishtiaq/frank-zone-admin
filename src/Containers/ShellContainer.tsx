import React, { ReactNode } from 'react'

export interface ShellProps{
    children:ReactNode;
    styleClass:string;
}
function ShellContainer({children,styleClass}: ShellProps) {
  return (
    <div className={` flex flex-col pt-24 pb-6 px-6 min-h-screen  bg-gradient ${styleClass}`}>
      {children}
    </div>
  )
}

export default ShellContainer
