import React from 'react';
import search from '@assets/icon/search-interface-symbol.svg'
import subscriptionicon from '@assets/icon/subscription.svg'
import notificationicon from '@assets/icon/notification.svg'
import profileicon from '@assets/icon/Profile-Menu.png'

function Header() {
  return (
    <div>
      <div className='flex items-center gap-5'>
        <img src={search} className='w-4 opacity-50' alt="" />
      <div className='inline-flex gap-1'>
        <span className='font-semibold opacity-20'>Ctrl K</span>
        <input type="search" placeholder='search anything..' className='outline-transparent px-3' />
      </div>
      </div>
      <div>
        <img src={subscriptionicon} alt="" />
        <img src={notificationicon} alt="" />
        <img src={profileicon} alt="" />
      </div>
    </div>
  )
}

export default Header
