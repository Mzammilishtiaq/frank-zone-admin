import { Breadcrumbs, Checkbox, Switch, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import CustomCard from '@src/Shared/Card/CustomCard'
import CustomButton from '@src/Shared/CustomButton'
import Search from '@src/Shared/Search/Search'
import SeperatorLine from '@src/Shared/SeperatorLine/SeperatorLine'
import Pagination from '@src/Shared/Table/Pagination'
import { Table } from '@src/Shared/Table/Table'
import filledicon from '@src/assets/icon/filter-icon.svg';
import Searchicon from '@src/assets/icon/search-icon.svg';
import viewbtn from '@src/assets/icon/view.svg';
import { Status } from '@src/Shared/enum/enum'
import LazyImage from '@src/Shared/LazyImage/LazyImage'

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GrPowerReset } from 'react-icons/gr'
import Input from '@src/Shared/Input/Input'
import { backendCall } from '@src/Shared/utils/BackendService/backendCall'
import { handleToastMessage } from '@src/Shared/toastify'
import { OrderManagementModel } from '@src/Shared/Models/OrderManage/OrderManagementModel'
import moment from 'moment'
import { Spinner } from '@src/Shared/Spinner/Spinner'
interface filterType {
    searchValue: any;
    offset: any;
    limit: any;
    order: string;
    accountState: string
}

function ListingList() {
    const navigate = useNavigate();
    const [drop, setDrop] = useState(false);
    const [orderdata, setOrderData]= useState([]) as any
    function handleDrop(): void {
        setDrop(prevDrop => !prevDrop)
    }
    const [activeTab, setActiveTab] = useState('All');
    const [isloading, seIsLoading] = useState(false)
    const [filterValue, setFilterValue] = useState<filterType>({
        searchValue: '',
        offset: 0,
        limit: 10,
        order: 'asc',
        accountState: ''
    })

    const handleTab = (item: string) => {
        setActiveTab(item)
    }
    const ListingTab = [
        "All", "Ecommerce", "Food", "Health & Beauty"
    ]
    // let Data1: any = [
    //     {
    //         firstname: "ali",
    //         lastname: "khan",
    //         phone: "222233384",
    //         email: "alukhan@gmail.comalukhan@gmail.comalukhan@gmail.comalukhan@gmail.comalukhan@gmail.comalukhan@gmail.comalukhan@gmail.comalukhan@gmail.comalukhan@gmail.comalukhan@gmail.comalukhan@gmail.com",
    //         status: 'PENDING'
    //     },
    //     {
    //         firstname: "ali2",
    //         lastname: "khan2",
    //         phone: "22223338422",
    //         email: "alukhan2@gmail.com",
    //         status: 'REJECTED'
    //     }, {
    //         firstname: "ali3",
    //         lastname: "khan3",
    //         phone: "22223338433",
    //         email: "alukhan3@gmail.com",
    //         status: 'DELIVERED'
    //     }, {
    //         firstname: "ali4",
    //         lastname: "khan4",
    //         phone: "22223338444",
    //         email: "alukhan4@gmail.com",
    //         status: 'PENDING'
    //     }, {
    //         firstname: "ali",
    //         lastname: "khan",
    //         phone: "222233384",
    //         email: "alukhan@gmail.com",
    //         status: 'SHIPPED'
    //     }, {
    //         firstname: "ali5",
    //         lastname: "khan5",
    //         phone: "22223338455",
    //         email: "alukhan55@gmail.com",
    //         status: 'IN TRANSIT'
    //     }
    // ]

const handleChangePage= (event:any)=>{
    setFilterValue({...filterValue, offset:event})
}
const handleChangeRowsPerPage = (event: any) => {
    console.log(event);
    setFilterValue({ ...filterValue, limit: event });
};
console.log('order data == ', orderdata)
    useEffect(() => {
        let delttime = setTimeout(() => {
            FetchOrderApi();
        }, 600);

        return () => clearTimeout(delttime)
    }, [filterValue])
    const FetchOrderApi = () => {
        seIsLoading(true)
        backendCall({
            url: `/api/admin/order_management/?limit=${filterValue.limit}&offset=${filterValue.offset}&order=desc`,
            method: 'GET',
            dataModel: OrderManagementModel
        }).then((res) => {
            if (res != res.error) {
                setOrderData(res.data)
                seIsLoading(false)
            } else {
                handleToastMessage('error', res.message)
                seIsLoading(false)
            }
        })
    }

    const handleupdate = (e:any, id:any)=>{
        let action = e.target.checked ? 'ENABLE' : 'DISABLE';
        backendCall({
            url:`/api/admin/order_management/${id}/status?action=${action}`,
            method:'PUT'
        }).then((res)=>{
            if(res != res.error){
                handleToastMessage('success', res.message)
                FetchOrderApi()
            }
        })
    }

    const column = [
        {
            title: (
                <div className='w-full flex items-start justify-start'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Order ID'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 70,
            render: (name: string, row: any) => (
                <div className="w-full flex items-start justify-start">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] sm:text-[10px] md:text-[10px]'>#{row.id}</p>
                </div>
            )
        },
        {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Name'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 110,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]'>{row?.name || '-'}</p>
                </div>
            )
        },{
            title: (
                <div className='w-full flex items-start justify-start'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Quantity'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 110,
            render: (name: string, row: any) => (
                <div className="w-full flex items-start justify-start">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]'>{row?.quantity || '-'}</p>
                </div>
            )
        },
          {
            title: (
                <div className='w-full flex items-start justify-start'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Item'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 110,
            render: (name: string, row: any) => (
                <div className="w-full flex items-start justify-start">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]' title={row.email}>{row?.items || '-'}</p>
                </div>
            )
        }, {
            title: (
                <div className='w-full flex items-start justify-start'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Date'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 110,
            render: (name: string, row: any) => (
                <div className="w-full flex items-start justify-start">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]'>{moment(row.email).utc().format('DD-MM-YYYY')}</p>
                </div>
            )
        },
        {
            title: (
                <div className='w-full flex items-center justify-start ml-14'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Action'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 110,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-start  gap-3 ml-14">
                     <Switch
                        checked={row.is_active == 1}
                        onChange={(e)=>handleupdate(e,row?.id)}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <CustomButton icon={<LazyImage src={viewbtn} className='w-4' />} handleButtonClick={() => navigate(`/order_managment/listing/listing_profile/${row.id}`)} type={'button'} />
                </div>
            )
        }
    ]

    // const column = [
    //     {
    //         title: (
    //             <div className='w-full flex items-start justify-start'>
    //                 <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Order ID'}</span>
    //             </div>
    //         ),
    //         dataIndex: 'index',
    //         key: 'index',
    //         width: 50,
    //         render: (name: string, row: any) => (
    //             <div className="w-full flex items-start justify-start">
    //                 <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] sm:text-[10px] md:text-[10px]'>{row.phone}</p>
    //             </div>
    //         )
    //     },
    //     {
    //         title: (
    //             <div className='w-full flex items-center justify-center'>
    //                 <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Category'}</span>
    //             </div>
    //         ),
    //         dataIndex: 'index',
    //         key: 'index',
    //         width: 50,
    //         render: (name: string, row: any) => (
    //             <div className="w-full flex items-center justify-center">
    //                 <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]'>{row.lastname}</p>
    //             </div>
    //         )
    //     }, {
    //         title: (
    //             <div className='w-full flex items-center justify-center'>
    //                 <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Customer'}</span>
    //             </div>
    //         ),
    //         dataIndex: 'index',
    //         key: 'index',
    //         width: 50,
    //         render: (name: string, row: any) => (
    //             <div className="w-full flex items-center justify-center">
    //                 <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]'>{row.phone}</p>
    //             </div>
    //         )
    //     }, {
    //         title: (
    //             <div className='w-full flex items-center justify-center'>
    //                 <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Item'}</span>
    //             </div>
    //         ),
    //         dataIndex: 'index',
    //         key: 'index',
    //         width: 50,
    //         render: (name: string, row: any) => (
    //             <div className="w-full flex items-center justify-center">
    //                 <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]' title={row.email}>{row.email}</p>
    //             </div>
    //         )
    //     }, {
    //         title: (
    //             <div className='w-full flex items-center justify-center'>
    //                 <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Price'}</span>
    //             </div>
    //         ),
    //         dataIndex: 'index',
    //         key: 'index',
    //         width: 50,
    //         render: (name: string, row: any) => (
    //             <div className="w-full flex items-center justify-center">
    //                 <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]' title={row.email}>{row.email}</p>
    //             </div>
    //         )
    //     },

    //     {
    //         title: (
    //             <div className='w-full flex items-center justify-center'>
    //                 <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Status'}</span>
    //             </div>
    //         ),
    //         dataIndex: 'index',
    //         key: 'index',
    //         width: 50,
    //         render: (name: string, row: any) => (
    //             <div className="flex items-center justify-center px-3">
    //                 <p className={
    //                     row.status && row.status === 'PENDING' ? 'text-white bg-yellow-200  rounded px-5 py-1 font-normal sm:text-[10px] md:text-[10px]'
    //                         : row.status == 'REJECTED' ? 'text-white  bg-red-500  rounded px-5 py-1 font-normal sm:text-[10px] md:text-[10px]'
    //                             : row.status == 'IN TRANSIT' ? 'text-white  bg-blue-900  rounded px-5 py-1 font-normal sm:text-[10px] md:text-[10px]'
    //                                 : row.status == 'SHIPPED' ? 'text-white  bg-pink-100  rounded px-5 py-1 font-normal sm:text-[10px] md:text-[10px]'
    //                                     : 'text-white bg-green-500  rounded px-5 py-1 font-normal'
    //                 }>
    //                     {row.status?.charAt(0).toUpperCase() + row.status?.slice(1)?.toLowerCase()}
    //                 </p>
    //             </div>
    //         )
    //     }, {
    //         title: (
    //             <div className='w-full flex items-end justify-center ml-5'>
    //                 <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Action'}</span>
    //             </div>
    //         ),
    //         dataIndex: 'index',
    //         key: 'index',
    //         width: 50,
    //         render: (name: string, row: any) => (
    //             <div className="w-full flex items-center justify-end gap-3 -ml-14">
    //                 <CustomButton icon={<LazyImage src={viewbtn} className='w-4' />} handleButtonClick={() => navigate(`/order_managment/listing/listing_profile/${row.phone}`)} type={'button'} />
    //             </div>
    //         )
    //     }
    // ]

    return (
        <>
            <CustomCard styleClass={'p-5'}>
                <div role="presentation" className='mb-3'>
                    <Breadcrumbs aria-label="breadcrumb" className='opacity-[0.3]'>
                        <Link to='/dashboard' className='text-sm hover:border-b-2 hover:border-gray-500'>
                            Dashboard
                        </Link>
                        <Typography color="" className='text-[10px]'>Orders Management</Typography>
                        <Typography color="" className='text-[10px]'>Listing</Typography>
                    </Breadcrumbs>
                    <div className="flex items-center justify-between">
                        <h5 className='text-2xl sm:text-lg font-medium text-[rgba(5, 25, 23, 1)]'>Orders Listing Management</h5>
                    </div>
                </div>
                <div className="w-full flex items-center gap-5 pb-2">
                    <div className='cursor-pointer relative top-0'>
                        <LazyImage src={filledicon} className='text-2xl text-gray-400 font-thin' handleClick={handleDrop} />

                        {drop && <div className="w-[60vw] sm:w-[90vw] md:w-[50vw] absolute top-10 z-50 border border-gray-300  ">
                            <CustomCard styleClass='p-2'>
                                <div className='flex gap-0 sm:gap-4 sm:w-full sm:overflow-x-auto'>
                                    <div className='text-left sm:w-full flex flex-col sm:items-start gap-1 w-full'>
                                        <h5 className='ml-3 text-black-900 sm:text-[12px] md:text-[12px] font-semibold '>Category</h5>
                                        {
                                            ['Computers & Tablets',
                                                'Cell Phones & Accessies',
                                                'TV & Home Theater',
                                                'Cameras & Photo',
                                                'Kitchen & Photo'
                                            ].map((cateitem) => (
                                                <div className='flex items-center w-full'>
                                                    <Checkbox
                                                        // checked={checked}
                                                        // onChange={handleChange}
                                                        inputProps={{ 'aria-label': 'controlled' }}
                                                        sx={{ '& .MuiSvgIcon-root': { fontSize: 13 } }}
                                                    />
                                                    <p className='text-[13px] sm:text-[8px] md:text-[10px] sm:w-full'>{cateitem}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className=" text-left flex flex-col w-full sm:w-full sm:items-center ">
                                        <h5 className='ml-3 text-black-900 text-[13px] sm:text-[12px] md:text-[12px] font-semibold '>Booking Type</h5>
                                        {
                                            ['Appointment', 'Consulation'].map((status) => (
                                                <div className='flex  items-center'>
                                                    <Checkbox
                                                        // checked={checked}
                                                        // onChange={handleChange}
                                                        inputProps={{ 'aria-label': 'controlled' }}
                                                        sx={{ '& .MuiSvgIcon-root': { fontSize: 13 } }}
                                                    />
                                                    <p className='text-[13px] sm:text-[10px] md:text-[10px]'>{status}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className=" text-left flex flex-col w-full sm:w-full sm:items-center ">
                                        <h5 className='ml-3 text-black-900 sm:text-[12px] md:text-[12px] font-semibold '>Status</h5>
                                        {
                                            ['Shipped', 'Delived', 'Pending', 'In Transit'].map((status) => (
                                                <div className='flex  items-center'>
                                                    <Checkbox
                                                        // checked={checked}
                                                        // onChange={handleChange}
                                                        inputProps={{ 'aria-label': 'controlled' }}
                                                        sx={{ '& .MuiSvgIcon-root': { fontSize: 13 } }}
                                                    />
                                                    <p className='text-[13px] sm:text-[10px] md:text-[10px]'>{status}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="flex flex-col w-full sm:w-full sm:items-end">
                                        <div className=" text-left">
                                            <h5 className='text-black-900 sm:text-[12px] md:text-[12px] font-semibold '>Start Date</h5>
                                            <div className='flex flex-col  items-left'>
                                                <div className='flex items-center py-2'>
                                                    <input type="date" placeholder='Select Start Date' className='border-b-2  placeholder:text-sm ' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" text-left">
                                            <h5 className='text-black-900 sm:text-[12px] md:text-[12px] font-semibold '>End Date</h5>
                                            <div className='flex flex-col  items-left'>
                                                <div className='flex items-center py-2'>
                                                    <input type="date" placeholder='Select Start Date' className='border-b-2   outline-transparent placeholder:text-gray-500 cursor-pointer' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-end justify-end gap-2'>
                                    <CustomButton type={'button'} labelClass='text-[13px] text-blue-900' label='Reset' icon={<GrPowerReset />} leftIconClass='text-[13px] text-blue-900' styleClass='' />
                                    <CustomButton type={'button'} label='Apply Filter' labelClass='text-[10px] text-white' styleClass='bg-black-900 px-4 py-1' />
                                </div>

                            </CustomCard>
                        </div>}
                    </div>
                    <div className='w-full'>
                        <Input type={'text'} placeholder={'Start typing to search  for user'} leftIcon={<LazyImage src={Searchicon} className='w-[28px] opacity-[1]' />} className={'sm:placeholder:text-xs px-3 sm:w-50'} name='searchValue' />
                    </div>
                </div>
                <Spinner isLoading={isloading}/>
                <div className="flex gap-10 sm:gap-2 sm:overflow-x-auto">
                    {

                        ListingTab.map((item, index) => (
                            <div className={`text-gray-900 flex sm:text-[10px]  cursor-pointer pb-[5px] 
                      ${activeTab === item ? 'border-black-900 border-b-2 text-black-900 font-medium' : null}`}
                                onClick={() => handleTab(item)} key={index}
                            >{item}</div>
                        ))
                    }
                </div>
                <Table
                    tableLayout="fixed"
                    columns={column as any}
                    emptyText={'No data found'}
                    data={orderdata.rows as any}
                    rowKey="id"
                    scroll={{ x: 1000 }}
                    sticky={true}
                    className=""
                    onHeaderRow={() => ({
                        className: '',
                    })}
                />
                <Pagination 
                 handleChangePage={handleChangePage}
                 handleChangeRowsPerPage={handleChangeRowsPerPage}
                 totalCount={orderdata.count}
                />
            </CustomCard>
        </>
    )
}

export default ListingList
