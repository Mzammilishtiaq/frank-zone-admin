import React, { useState } from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import CustomCard from '@src/Shared/Card/CustomCard';
import Search from '@src/Shared/Search/Search';
import SeperatorLine from '@src/Shared/SeperatorLine/SeperatorLine';
import { BsSearch } from 'react-icons/bs';
import Profileimg from '@src/assets/icon/Profile-Menu.png';
import Bannerimg from '@src/assets/image/banner.png';
import { Table } from '@src/Shared/Table/Table';
import { VscCheck } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import Popup from '@src/Shared/Popup/Popup';
import CustomButton from '@src/Shared/CustomButton';
import CircleCross from '@src/assets/icon/circlecross.svg'
import frontcard from '@src/assets/image/front.jpeg'
import backcard from '@src/assets/image/back.jpeg'
import passport from '@src/assets/image/passport.jpg'
import { TbAdjustmentsFilled } from 'react-icons/tb';
import { IoSearchOutline } from 'react-icons/io5';


function VendorManagmentDetail() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectTab, setSelectTab] = useState();
  const [deletepopup, setDeletePopup] = useState(false);
  const [imgpopup, setImgPopup] = useState(false);
  const [imgpopupdata, setImgPopupData] = useState(null);
  const [drop, setDrop] = useState(false);
  function handleDrop(): void {
    setDrop(prevDrop => !prevDrop)
  }
  const handleTab = (id: any) => {
    setActiveTab(id)
  }

  const handlepopimg = (imgurl: any) => {
    setImgPopupData(imgurl)
    setImgPopup(true)
  }

  const Data1 = [
    {
      docname: "Front(Card)",
      date: "04-06-2024",
      status: "APPROVED",
      filelabel: '@src/assets/image/front.jpeg',
      img: frontcard
    }, {
      docname: "Back(Card)",
      date: "04-06-2024",
      status: "PENDING",
      filelabel: '@src/assets/image/back.jpeg',
      img: backcard
    }, {
      docname: "Passport(Card)",
      date: "04-06-2024",
      status: "APPROVED",
      filelabel: '@src/assets/image/passport.jpg',
      img: passport
    }
  ]
  const Column = [
    {
      title: (
        <div className="flex items-center justify-center">
          <p className='text-lg font-bold'>{'Document Name'}</p>
        </div>
      ),
      dataindex: "name",
      key: "name",
      render: ((name: string, row: any) => (
        <div className='flex items-center justify-center'>{row.docname}</div>
      ))
    }, {
      title: (
        <div className="flex items-center justify-center">
          <p className='text-lg font-bold'>{'Date'}</p>
        </div>
      ),
      dataindex: "name",
      key: "name",
      render: ((name: string, row: any) => (
        <div className='flex items-center justify-center'>{row.date}</div>
      ))
    }, {
      title: (
        <div className="flex items-center justify-center">
          <p className='text-lg font-bold'>{'Document'}</p>
        </div>
      ),
      dataindex: "name",
      key: "name",
      render: ((name: string, row: any) => (
        <div className="flex items-center justify-center">
          <p className={
            row.status && row.status === 'PENDING'
              ? 'text-white bg-orange-500  rounded px-2 py-1'
              : row.status == 'REJECTED'
                ? 'text-white  bg-red-500  rounded px-2 py-1'
                : 'text-white bg-green-500  rounded px-2 py-1'
          }>
            {row.status?.charAt(0).toUpperCase() + row.status?.slice(1)?.toLowerCase()}
          </p>
        </div>
      ))
    }, {
      title: (
        <div className="flex items-center justify-center">
          <p className='font-bold text-lg'>{'Files'}</p>
        </div>
      ),
      dataindex: "name",
      key: "name",
      render: ((name: string, row: any) => (
        <div className='flex items-center justify-center'>
          <CustomButton type={"button"} handleButtonClick={() => handlepopimg(row.img)} styleClass='hover:border-b-2 border-gray-300 rounded-none' label={row.filelabel} />
        </div>
      ))
    }, {
      title: (
        <div className="flex items-center justify-center">
          <p className='font-bold text-lg'>{'Actions'}</p>
        </div>
      ),
      dataindex: "name",
      key: "name",
      render: ((name: string, row: any) => {
        return (
          <div className={`flex items-center justify-center gap-1
       
        `}>

            <VscCheck className={` bg-green-600 text-white text-[20px] rounded-full p-1 w-7 h-7 ${row.status !== 'PENDING' ? '!text-gray-800 !bg-gray-300 pointer-events-none opacity-50' : ''}`} />
            <VscChromeClose className={`bg-red-600 text-white text-[20px] rounded-full p-1 w-7 h-7 ${row.status !== 'PENDING' ? '!text-gray-800 !bg-gray-300 pointer-events-none opacity-50' : ''}`}
              onClick={() => setDeletePopup(true)}
            />
          </div>
        );
      })
    }
  ]
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
    }
  ]
  const ColumProdute=[
    {
      title:("title"),
      dataindex:'name',
      key:'name',
      render:((name:string,row:any)=>(
        "title"
      ))
    }, {
      title:("title"),
      dataindex:'name',
      key:'name',
      render:((name:string,row:any)=>(
        "title"
      ))
    }, {
      title:("title"),
      dataindex:'name',
      key:'name',
      render:((name:string,row:any)=>(
        "title"
      ))
    }, {
      title:("title"),
      dataindex:'name',
      key:'name',
      render:((name:string,row:any)=>(
        "title"
      ))
    }, {
      title:("title"),
      dataindex:'name',
      key:'name',
      render:((name:string,row:any)=>(
        "title"
      ))
    }
  ]
  const profilrdetail = ['Vendor Details', "Questionnaire", "Documents Verification", "Products", "Reviews & Ratings"]
  return (
    <>
      {/* <Popup isOpen={deletepopup} handleClose={() => setDeletePopup(false)} isShowHeader={true}>
        <div className="flex flex-col justify-center items-center gap-3">
          <img src={CircleCross} className="h-[70px] mt-6" />
          <h5 className="font-bold text-2xl mt-5">Rejection</h5>
          <div className="flex flex-col justify-center items-center">
            <p className="font-medium text-sm text-gray-400 ">
              Kindly Give Reason For Rejection
            </p>
          </div>

          <div className="space-y-3 mt-8 flex justify-around w-4/5">
            <CustomButton
              handleButtonClick={() => setDeletePopup(false)}
              label={'Close'}
              type={'button'}
              styleClass={'bg-gray-300 py-4 text-white w-full  !rounded-xl !font-medium mr-2 '}
            />
            <CustomButton
              // handleButtonClick={handleDelete}
              label={'Yes, Reject'}
              type={'button'}
              variant={'outlined'}
              styleClass={'bg-red-500 text-white w-full !mt-0 !rounded-xl !font-medium ml-2'}

            />
          </div>
        </div>
      </Popup>
      <Popup isOpen={imgpopup} handleClose={() => setImgPopup(false)} isShowHeader={true}>
        <div className="flex flex-col justify-center items-center gap-3">
          <img src={imgpopupdata} className="h-[220px] mt-6" />
        </div>
      </Popup> */}
      <CustomCard styleClass={'p-4 mx-4'}>
        <div role="presentation flex flex-col gap-2">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href='/dashboard' className=''>
              Dashboard
            </Link>
            <Typography color="text-sm">User</Typography>
          </Breadcrumbs>
          <h5 className='text-2xl font-semibold font-sans'>User Management</h5>
        </div>
        <Search icon={<BsSearch className='text-gray-400my-4' />} type={'search'} placeholder={'Start typing to search for user'} styleClass={''} />
        <SeperatorLine className='!border !border-gray-300' />
        <div className="flex item-start">
          {
            profilrdetail.map((item, index) => (
              <p className={`text-gray-900  flex cursor-pointer mx-3
                      ${activeTab === index ? 'border-red-300 border-b-2 text-black font-medium' : null}`}
                onClick={() => handleTab(index)}
              >{item}</p>
            ))
          }
        </div>
        <SeperatorLine className='!border !border-gray-300 -mt-1' />
        {/* start profile detail */}
        {/* <div className="profiledetail">
          <div className=" flex flex-col gap-2 py-5">
            <h5 className='font-bold font-sans text-2xl'>Profile Details</h5>
            <div className="flex items-center justify-start gap-5">
              <img src={Profileimg} className='w-40' alt="" />
              <div className='flex flex-col gap-3 px-14 border-r-2 border-gray-400'>
                <p className='text-lg font-medium text-black font-sans'>First Name: <span className='text-gray-500 ml-4'>Admin</span></p>
                <p className='text-lg font-medium text-black font-sans'>Last Name: <span className='text-gray-500 ml-4'>"There is No Success Without Hard Work".</span></p>
              </div>
              <div className='flex flex-col gap-3 px-14'>
                <p className='text-lg font-medium text-black font-sans'>Email: <span className='text-gray-500 ml-4'>John Doe</span></p>
                <p className='text-lg font-medium text-black font-sans'>Phone Number: <span className='text-gray-500 ml-4'>+49 878493483</span></p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-2 py-5">
            <h5 className='font-bold font-sans text-2xl'>Ecommerce Shop Details</h5>
            <img src={Bannerimg} className='w-full my-2' alt="" />
            <div className="flex items-center justify-start gap-5">
              <div className='flex flex-col gap-3 px-14 border-r-2 border-gray-400'>
                <p className='text-lg font-medium text-black font-sans'>Shop Name: <span className='text-gray-500 ml-4'>Clarks</span></p>
                <p className='text-lg font-medium text-black font-sans'>Landline Number: <span className='text-gray-500 ml-4'>+(48) 889998889</span></p>
                <p className='text-lg font-medium text-black font-sans'>City: <span className='text-gray-500 ml-4'>Berlin</span></p>
                <p className='text-lg font-medium text-black font-sans'>Country: <span className='text-gray-500 ml-4'>Germany</span></p>
                <p className='text-lg font-medium text-black font-sans'>Quote: <span className='text-gray-500 ml-4'>"There is No Success Without Hard Work".</span></p>
              </div>
              <div className='flex flex-col gap-3 px-14'>
                <p className='text-lg font-medium text-black font-sans'>Business Email: <span className='text-gray-500 ml-4'>Admin@codesorbit.com</span></p>
                <p className='text-lg font-medium text-black font-sans'>Postal Code: <span className='text-gray-500 ml-4'>4344</span></p>
                <p className='text-lg font-medium text-black font-sans'>Tax No: <span className='text-gray-500 ml-4'>2344</span></p>
                <p className='text-lg font-medium text-black font-sans'>Phone Number: <span className='text-gray-500 ml-4'>+49 878493483</span></p>
              </div>
            </div>
          </div>

          <div>
            <h5 className='font-bold font-sans text-2xl mb-4'>Branches Details</h5>
            <CustomCard styleClass={'p-4 !flex-row items-center'}>
              <div className='flex flex-col items-center'>
                <p className='text-green-500 font-medium font-sans'>Branch 01</p>
                <img src={Profileimg} className='w-40' alt="" />
              </div>
              <div className='flex flex-col gap-3 px-14'>
                <p className='text-lg font-medium text-black font-sans'>Business Email: <span className='text-gray-500 ml-4'>Admin@codesorbit.com</span></p>
                <p className='text-lg font-medium text-black font-sans'>Bussiness Address: <span className='text-gray-500 ml-4'>Berlin, Germeny</span></p>
                <p className='text-lg font-medium text-black font-sans'>Country: <span className='text-gray-500 ml-4'>Germeny</span></p>
              </div>
              <div className='flex flex-col gap-3 px-14'>
                <p className='text-lg font-medium text-black font-sans'>Phone Number: <span className='text-gray-500 ml-4'>+49 878493483</span></p>
                <p className='text-lg font-medium text-black font-sans'>Postal Code: <span className='text-gray-500 ml-4'>4344</span></p>
                <p className='text-lg font-medium text-black font-sans'>City: <span className='text-gray-500 ml-4'>Berlin</span></p>
              </div>
            </CustomCard>
          </div>
        </div> */}
        {/*end  profile detail */}
        {/* <div className="ecommerceshop-question">
          <h5 className='font-bold font-sans text-2xl'>Ecommerces Shop Question</h5>
          <div className='my-3'>
            <p className='text-gray-700 font-medium font-sans mb-2'>Question: What Would You like to start?</p>
            <p className='text-gray-500 font-medium mb-2'>Answer : Information Is Good For Now</p>
          </div>
        </div> */}
        {/* <div className="documnet verfication">
          <Table
            tableLayout="fixed"
            columns={Column as any}
            emptyText={'No data found'}
            data={Data1 as any}
            rowKey="id"
            scroll={{ x: 1000 }}
            sticky={true}
            className="custom-table"
            onHeaderRow={() => ({
              className: '',
            })}
          />
        </div> */}

        <div className="produts">
          <div role="presentation flex flex-col gap-2">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href='/dashboard' className=''>
                Dashboard
              </Link>
              <Typography color="text-sm">User</Typography>
            </Breadcrumbs>
            <h5 className='text-2xl font-semibold font-sans'>User Management</h5>
          </div>
          <div className="w-full flex items-center">
            <div className='px-2 py-1 cursor-pointer relative top-0'>
              <TbAdjustmentsFilled className='text-2xl text-gray-400 font-thin' onClick={handleDrop} />

              {drop && <div className="w-72 absolute top-10 z-50">
                <p className='text-gray-600 font-medium border-gray-400 border-2  px-5 py-2 bg-white hover:bg-gray-300 hover:text-white'>Approved</p>
                <p className='text-gray-600 font-medium border-gray-400 border-2  px-5 py-2 bg-white hover:bg-gray-300 hover:text-white'>Rejected</p>
              </div>}
            </div>
            <div className='w-full'>
              <Search type={'search'} placeholder={'Start typing to search  for user'} icon={<IoSearchOutline />} styleClass={''} />
            </div>
          </div>
          <Table
            tableLayout="fixed"
            columns={ColumProdute as any}
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
      </CustomCard>
    </>
  )
}

export default VendorManagmentDetail
