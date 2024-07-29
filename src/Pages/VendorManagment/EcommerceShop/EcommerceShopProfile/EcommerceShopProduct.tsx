import { Checkbox } from '@mui/material'
import CustomCard from '@src/Shared/Card/CustomCard'
import CustomButton from '@src/Shared/CustomButton'
import Search from '@src/Shared/Search/Search'
import { Table } from '@src/Shared/Table/Table'
import React, { useState } from 'react'
import filledicon from '@src/assets/icon/filter-icon.svg';
import { GrPowerReset } from 'react-icons/gr'
import Searchicon from '@src/assets/icon/search-icon.svg';


function EcommerceShopProduct() {
    const [drop, setDrop] = useState(false);
  function handleDrop(): void {
    setDrop((prevDrop: any) => !prevDrop)
  }
  
    const ProduteData = [
        {
          product: 'Rounded Chair',
          category: 'chair',
          status: 'ENABLE',
          variants: '4 variants',
          price: '204$'
        }, {
          product: 'Head Phone',
          category: 'Electron',
          status: 'DISABLE',
          variants: '2 variants',
          price: '24$'
        }, {
          product: 'Head Phone',
          category: 'Electron',
          status: 'DISABLE',
          variants: '2 variants',
          price: '24$'
        }, {
          product: 'Head Phone',
          category: 'Electron',
          status: 'DISABLE',
          variants: '2 variants',
          price: '24$'
        }, {
          product: 'Head Phone',
          category: 'Electron',
          status: 'DISABLE',
          variants: '2 variants',
          price: '24$'
        }
      ]
      const ProduteColumn = [
        {
          title: (
            <div className='w-full flex items-start justify-start'>
              <span className="font-semibold text-black-900 text-[15px] opacity-[1]">{'Products'}</span>
            </div>
          ),
          dataIndex: 'index',
          key: 'index',
          width: 50,
          render: (name: string, row: any) => (
            <div className="w-full flex items-start justify-start">
              <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px]'>{row.product}</p>
            </div>
          )
        },
        {
          title: (
            <div className='w-full flex items-center justify-center'>
              <span className="font-semibold text-black-900 text-[15px] opacity-[1]">{'Category'}</span>
            </div>
          ),
          dataIndex: 'index',
          key: 'index',
          width: 50,
          render: (name: string, row: any) => (
            <div className="w-full flex items-center justify-center">
              <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate'>{row.category}</p>
            </div>
          )
        },
        {
          title: (
            <div className='w-full flex items-center justify-center'>
              <span className="font-semibold text-black-900 text-[15px] opacity-[1]">{'Documnet'}</span>
            </div>
          ),
          dataIndex: 'index',
          key: 'index',
          width: 50,
          render: (name: string, row: any) => (
            <div className="flex items-center justify-center px-3">
              <p className={
                row.status && row.status == 'DISABLE'
                  ? 'text-red-500  rounded px-5 py-1 font-normal'
                  : 'text-green-500  rounded px-5 py-1 font-normal'
              }>
                {row.status?.charAt(0).toUpperCase() + row.status?.slice(1)?.toLowerCase()}
              </p>
            </div>
          )
        },
        {
          title: (
            <div className='w-full flex items-center justify-center'>
              <span className="font-semibold text-black-900 text-[15px] opacity-[1]">{'Variants'}</span>
            </div>
          ),
          dataIndex: 'index',
          key: 'index',
          width: 50,
          render: (name: string, row: any) => (
            <div className="w-full flex items-center justify-center">
              <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px]'>{row.variants}</p>
            </div>
          )
        },
        {
          title: (
            <div className='w-full flex items-end justify-end -ml-5'>
              <span className="font-semibold text-black-900 text-[15px] opacity-[1]">{'Price'}</span>
            </div>
          ),
          dataIndex: 'index',
          key: 'index',
          width: 50,
          render: (name: string, row: any) => (
            <div className="w-full flex items-end justify-end -ml-5">
              <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate'>{row.price}</p>
            </div>
          )
        }]
  return (
    <div className="produts">
    <div className="w-full flex items-center">
      <div className='px-2 py-1 cursor-pointer relative top-0'>
        <img src={filledicon} className='' onClick={handleDrop} />

        {drop && <div className="w-[20vw] absolute top-10 z-50 border border-gray-300">
          <CustomCard styleClass='p-2'>
            <div className='flex'>
              <div className='text-left flex flex-col gap-1'>
                <h5 className='ml-3 text-black-900 font-semibold '>Category</h5>
                {
                  ['Computers & Tablets',
                    'Cell Phones & Accessies',
                    'TV & Home Theater',
                    'Cameras & Photo',
                    'Kitchen & Photo'
                  ].map((cateitem) => (
                    <div className='flex items-center'>
                      <Checkbox
                        // checked={checked}
                        // onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 13 } }}
                      />
                      <p className='text-[13px]'>{cateitem}</p>
                    </div>
                  ))
                }
              </div>
              <div className=" text-left flex flex-col ">
                <h5 className='ml-3 text-black-900 font-semibold '>Status</h5>
                {
                  ['Disable', 'Enable'].map((status) => (
                    <div className='flex  items-center'>
                      <Checkbox
                        // checked={checked}
                        // onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 13 } }}
                      />
                      <p className='text-[13px]'>{status}</p>
                    </div>
                  ))
                }
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
        <Search type={'search'} placeholder={'Start typing to search  for user'} icon={<img src={Searchicon} className='w-[28px] opacity-[1]' />} styleClass={''} />
      </div>
    </div>
    <Table
      tableLayout="fixed"
      columns={ProduteColumn as any}
      emptyText={'No data found'}
      data={ProduteData as any}
      rowKey="id"
      scroll={{ x: 1000 }}
      sticky={true}
      className="custom-table"
      onHeaderRow={() => ({
        className: '',
      })}
    />
  </div>
  )
}

export default EcommerceShopProduct