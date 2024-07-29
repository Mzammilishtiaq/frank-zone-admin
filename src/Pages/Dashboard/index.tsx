import ShellContainer from '@src/Containers/ShellContainer'
import CustomCard from '@src/Shared/Card/CustomCard'
import React from 'react'

function Dashboard() {
  return (
    <ShellContainer  styleClass={'gap-4 !h-full sm:px-0   !min-h-screen'}>
        <CustomCard styleClass='p-5'>
        <h5 className='text-lg text-black-900 font-medium'>Dashboard</h5>
        </CustomCard>
        </ShellContainer>
  )
}

export default Dashboard
