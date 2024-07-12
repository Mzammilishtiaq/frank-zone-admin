import Header from '@src/Shared/AdminComponents/Header/Header';
import React, { ReactNode } from 'react';


export interface LayoutProps {
    children: ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    const slidlink: any = [
        {
            name: 'Dashboard'
        },
        {
            name: 'User Management'
        },
        {
            name: 'Vendor Management'
        },
        {
            name: 'Order Management'
        },
        {
            name: 'Deals Management'
        },
        {
            name: 'Category'
        },
        {
            name: 'Delivery Management'
        },
        {
            name: 'Questionare'
        },
        {
            name: 'Chat'
        },
        {
            name: 'Notification'
        },
        {
            name: 'Subscription'
        },
        {
            name: 'Setting'
        }
    ]
    return (
        <div className='min-h-screen'>
            <div className="flex  gap-10 items-start md:py-12 py-6">
                <div className="col-span-2 sticky bg-dry border border-gray-800 p-6 rounded xl:mb-0 mb-5">
                    {
                        slidlink.map((link: any, index: any) => (
                            <h5 key={index}>{link.name}</h5>
                        ))
                    }
                </div>

                <div
                    data-aos="fade-up" data-aos-duration="1000" data-aos-delay="10" data-aos-offset="100"
                    className="col-span-6 rounded-md bg-dry border-gray-800 p-6">
                        <Header/>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
