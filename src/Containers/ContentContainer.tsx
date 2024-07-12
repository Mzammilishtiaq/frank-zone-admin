import React, { ReactNode } from 'react';

export interface ContentContainerProps{
    children:ReactNode,
    styleClass:string
}

function ContentContainer({styleClass, children}: ContentContainerProps) {
  return (
    <div className={`flex flex-col items-center justify-center pt-20 pb-20 px-32  ${styleClass}`}>
      {children}
    </div>
  )
}

export default ContentContainer
