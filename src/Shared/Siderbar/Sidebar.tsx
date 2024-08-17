import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Accordion, AccordionSummary, Popover, Typography } from '@mui/material';
import Logo from '@src/assets/image/Logo.svg';
import { MdArrowBackIos, MdArrowDropDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import profilelogo from '@src/assets/icon/Profile-Menu.png';
import searchicon from '@src/assets/icon/search-icon.svg';
import carticonblack from '@src/assets/icon/sidebar-icon/black-icon/cart-icon-black.svg';
import categoryiconblack from '@src/assets/icon/sidebar-icon/black-icon/category-icon-black.svg';
import dashboardiconblack from '@src/assets/icon/sidebar-icon/black-icon/dashboard-icon-black.svg';
import deliveryiconblack from '@src/assets/icon/sidebar-icon/black-icon/delivery-icon-black.svg';
import mailiconblack from '@src/assets/icon/sidebar-icon/black-icon/mail-icon-black.svg';
import notificationblack from '@src/assets/icon/sidebar-icon/black-icon/notification-icon-black.svg';
import questionnareblackicon from '@src/assets/icon/sidebar-icon/black-icon/questionnare-icon-black.svg';
import settingiconblack from '@src/assets/icon/sidebar-icon/black-icon/setting-icon-black.svg';
import subscriptionblackicon from '@src/assets/icon/sidebar-icon/black-icon/subscription-icon-black.svg';
import usermanagmentblackicon from '@src/assets/icon/sidebar-icon/black-icon/user-managment-icon-black.svg';
import vendormaniconblack from '@src/assets/icon/sidebar-icon/black-icon/vendor-managment-icon-black.svg';
import dealiconblack from '@src/assets/icon/sidebar-icon/black-icon/deal-managment-icon-black.svg';
import carticonwhite from '@src/assets/icon/sidebar-icon/white-icon/cart-icon-white.svg';
import categoryiconwhite from '@src/assets/icon/sidebar-icon/white-icon/category-icon-white.svg';
import dashboardiconwhite from '@src/assets/icon/sidebar-icon/white-icon/dashboard-icon-white.svg';
import dealiconwhite from '@src/assets/icon/sidebar-icon/white-icon/deal-managment-icon-white.svg';
import deliverticonwhite from '@src/assets/icon/sidebar-icon/white-icon/delivery-icon-white.svg';
import mailiconwhite from '@src/assets/icon/sidebar-icon/white-icon/mail-icon-white.svg';
import notificationiconwhite from '@src/assets/icon/sidebar-icon/white-icon/notification-icon-white.svg';
import questionnareiconwhite from '@src/assets/icon/sidebar-icon/white-icon/questionnare-icon-white.svg';
import settingiconwhite from '@src/assets/icon/sidebar-icon/white-icon/setting-icon-white.svg';
import subscriptioniconwhite from '@src/assets/icon/sidebar-icon/white-icon/subscription-icon-white.svg';
import usermaniconwhite from '@src/assets/icon/sidebar-icon/white-icon/user-managment-icon-white.svg';
import vendormaniconwhite from '@src/assets/icon/sidebar-icon/white-icon/vendor-managment-icon-white.svg';
import LazyImage from '../LazyImage/LazyImage';
import QuestionIconImg from '@src/assets/icon/question-icon.svg'
import { STORAGE } from '../utils/Const/index';
import { Logout } from '../utils/authService/authService';
import NoImage from '@assets/image/NoImage.png'


const drawerWidth = 240;

const SidebarItem = ({ item, dataIndex }: any) => {
  const activeRoute = useLocation();
  const splitLocation = activeRoute.pathname.split('/');

  return (
    <Link key={dataIndex} to={item?.link}>
      <div
        className={`py-3 px-5 flex items-center gap-x-3 xs:gap-x-2 mb-2 cursor-pointer  ${splitLocation[1] === item.link.replace('/', '') ? 'bg-black-900' : 'bg-transparent'
          }`}
      >
        {splitLocation[1] == item.link.replace('/', '') ? <LazyImage src={item.icon_white} className='w-[18px] xs:w-[15px]' /> : <img src={item.icon} className='w-[18px] xs:w-[15px]' />}
        <p className={`text-black-900 text-[14px] xs:text-[12px] ${splitLocation[1] == item.link.replace('/', '') ? 'text-white' : ''}`}>
          {' '}
          {item.title}
        </p>
      </div>
    </Link>
  );
};

const SidebarMoreItem = ({ item, dataIndex }: any) => {
  const activeRoute = useLocation();
  const splitLocation = activeRoute.pathname.split('/');
  return (
    <Accordion key={dataIndex} className="!bg-transparent !shadow-none !border-transparent !border-0 !outline-none !outline-transparent"
    sx={{
      borderTop: 'none', // Remove the top border
      '&:before': {
        display: 'none', // This removes the default top border
      },
    }}
    >
      <AccordionSummary
        className={`!border-0  !h-12 !min-h-0 ${splitLocation[1] == item.link.replace('/', '')
          ? '!bg-black-900 !text-white '
          : '!bg-transparent !shadow-none !border-transparent !outline-none'
          }`}
        expandIcon={<MdArrowDropDown className={`!border-0 ${splitLocation[1] == item.link.replace('/', '')
          ? '!bg-transparent !text-white '
          : '!bg-transparent !shadow-none !border-transparent !outline-none'
          }`} />}
      >
        <div className="flex items-center gap-3 px-1 text-[14px] xs:text-[12px]">
          {splitLocation[1] == item.link.replace('/', '') ? <LazyImage src={item.icon_white} className='w-[18px] xs:w-[15px]' /> : <LazyImage src={item.icon} className='w-[18px] xs:text-[15px]' />}
          {item.title}
        </div>
      </AccordionSummary>
      {item.more_items.map((elem: any, index: any) => (
        <Link key={index} to={elem.link}>
          <p
            className={`text-left text-[14px] xs:text-[12px] ml-6 pl-2 py-2 mt-2 mb-1 hover:bg-gray-400 hover:text-white ${activeRoute.pathname == elem.link ? 'bg-gray-300 text-white' : ''
              }`}
          >
            {elem.title}
          </p>
        </Link>
      ))}
    </Accordion>
  );
};


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}
const _initialValues1 = {
  image: '',
  name: '',
  email: '',
};
export default function Sidebar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [sidebaritem, setSidebarItem] = React.useState<any[]>([])
  const [showHideNavbar, setShowHideNavbar] = React.useState<boolean>(true);
  const [isClosing, setIsClosing] = React.useState(false);
  const [notificationCount, setNotificationCount] = React.useState(0)
  const [isdropdownopen, setisDropdownOpen] = React.useState(false)
  const [topsearch, setTopSearch] = React.useState(false)
  const [initialvalue, setInitialValue] = React.useState(_initialValues1)
  const navigate = useNavigate();
  let _data:any = localStorage.getItem(STORAGE)
  React.useEffect(() => {
const data = JSON.parse(_data)
let initialData = {
  image: data?.image_url,
  name: data?.name,
  email: data?.email,
}
setInitialValue(initialData)
console.log('sidebar', initialvalue)
}, [_data])

const handleLogout= ()=>{
  Logout().then(()=>{
    navigate('/');
  })
}

  const getSiderbar = () => {
    let _siderbar = [
      {
        link: '/dashboard',
        // link: '#',
        title: 'Dashboard',
        icon: dashboardiconblack,
        icon_white: dashboardiconwhite,
      },
      {
        link: '/user_management',
        title: 'User Management',
        icon: usermanagmentblackicon,
        icon_white: usermaniconwhite,
      },
      {
        link: '/vendor_managment',
        title: 'Vendor Managemnt',
        icon: vendormaniconblack,
        icon_white: vendormaniconwhite,
        more_items: [
          {
            link: '/vendor_managment/?module_id=1',
            title: 'Ecommerce Shop',
            icon: <></>
          },
          {
            link: '/vendor_managment/?module_id=2',
            title: 'Food Ordering',
            icon: <></>
          },
          {
            // link: '/vendor_managment/',
            link: '#',
            title: 'Health & Beauty',
            icon: <></>,


          }, {
            link: '#',
            // link: '/vendor_managment/?module_id=4',
            title: 'Handyman',
            icon: <></>,
          }, {
            link: '/vendor_managment/?module_id=4',
            title: 'Online Consultation',
            icon: <></>,
          },
        ],
      }, {
        link: '/order_managment',
        title: 'Orders Managemnt',
        icon: carticonblack,
        icon_white: carticonwhite,
        more_items: [
          {
            // link: '#',
            link: '/order_managment/listing/listing_list',
            title: 'Listing',
            icon: <></>
          },
          {
            // link: '#',
            link: '/order_managment/booking/booking_list',
            title: 'Booking',
            icon: <></>,
          },
          {
            link: '#',
            // link: '/table-reservation',
            title: 'Table Reservation',
            icon: <></>,
          },
        ],
      },
      {
        link: '#',
        // link: '/deals_managment',
        title: 'Deals Managemnt',
        icon: dealiconblack,
        icon_white: dealiconwhite,
      }, {
        link: '#',
        // link: '/category_managment',
        title: 'Category Managemnt',
        icon: categoryiconblack,
        icon_white: categoryiconwhite,
      }, {
        link: '#',
        // link: '/delivery_managment',
        title: 'Delivery Managemnt',
        icon: deliveryiconblack,
        icon_white: deliverticonwhite,
      }, {
        link: '#',
        // link: '/questionnaire',
        title: 'Questionnaire',
        icon: questionnareblackicon,
        icon_white: questionnareiconwhite
      }, {
        link: '#',
        // link: '/chat',
        title: 'Chat',
        icon: mailiconblack,
        icon_white: mailiconwhite,
      }, {
        link: '#',
        // link: '/notification',
        title: 'Notification',
        icon: notificationblack,
        icon_white: notificationiconwhite,
      }, {
        link: '#',
        // link: '/subscription',
        title: 'Subscription',
        icon: subscriptionblackicon,
        icon_white: subscriptioniconwhite,
      }, {
        link: '#',
        // link: '/setting',
        title: 'Setting',
        icon: settingiconblack,
        icon_white: settingiconwhite,
        more_items: [
          {
            link: '#',
            // link: '/banners',
            title: 'Banners',
            icon: <></>,
          },
          {
            link: '#',
            // link: '/shorts',
            title: 'Shorts',
            icon: <></>,
          },
          {
            // link: '/privacy_Policy',
            link: '#',
            title: 'Privacy Policy',
            icon: <></>,
          }, {
            link: '#',
            // link: '/terms_condition',
            title: 'Terms & Condition',
            icon: <></>,
          },
        ],
      }
    ]
    setSidebarItem([..._siderbar])
  }

  const handlesearchbar = () => {
    setTopSearch(opensearch => !opensearch)
  }

  React.useEffect(() => {
    getSiderbar();
  }, []);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div className='' >
      <Toolbar >
        {/* <Logo className="w-9/12 cursor-pointer" /> */}
        <div className=" xs:flex xs:items-center xs:gap-3">
        <MdArrowBackIos className='mt-3 xs:text-2xl sm:hidden md:hidden lg:hidden xl:hidden' onClick={()=>setMobileOpen(false)} />
        <LazyImage src={Logo} alt="" className='mt-5 xs:w-36' />
        </div>
      </Toolbar>
      <List className="top-7">
        {sidebaritem.map((item: { more_items: any; }, index: any) => {
          if (item.more_items) {
            return <SidebarMoreItem key={index} item={item} dataIndex={index} />;
          } else {
            return <SidebarItem key={index} item={item} dataIndex={index} />;
          }
        })}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  function handleClickDropdown(): void {
    setisDropdownOpen(true);
  }

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${showHideNavbar ? drawerWidth : '0'}px)` },
          ml: { sm: `${showHideNavbar ? drawerWidth : '0'}px` },
        }}
      >
        <Toolbar className='flex justify-between items-center bg-white relative top-0'>
          <div className="flex gap-x-2  items-center">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                marginRight: 'auto',
                marginLeft: '0px',
                color: 'black',
                display: { sm: 'none' },
              }}
              className=''
            >
              <GiHamburgerMenu />
            </IconButton>
            <LazyImage src={searchicon} className='w-[20px] sm:hidden xs:hidden' handleClick={() => handlesearchbar()} />
            <p className='text-gray-500 font-medium sm:hidden xs:hidden'>Ctrl K</p>
            <input type="search" placeholder='Search anything...' className='text-black-900 placeholder:text-gray-500 placeholder:font-medium outline-transparent sm:placeholder:text-sm px-3 sm:w-50 sm:hidden xs:hidden' />
          </div>
          <div className='flex items-center gap-2'>


            <div className="inline-flex items-center gap-2 sm:gap-1">
              <LazyImage src={QuestionIconImg} alt="" className='px-1 sm:-pl-2 sm:w-5 sm:h-5 xs:h-4 ' />
              <div className='relative cursor-pointer' onClick={() => navigate('#')}>
                <p className='text-white text-[8px] bg-red-500 rounded-full h-5 w-5 sm:h-3 sm:w-3 xs:w-3 xs:h-3 absolute flex justify-center items-center -top-1'>{notificationCount}</p>
                <LazyImage src={notificationblack} className=" px-1 sm:-pl-2 sm:w-5 sm:h-5 xs:h-4" />
              </div>
            </div>

            <Typography
              variant="h6"
              noWrap
              component="div"
              className={`!ml-auto rounded-full ${isdropdownopen ? ' ease-in duration-300  ' : 'bg-white'
                } flex items-center justify-center`}
              aria-describedby={'simple-popover'}
              onClick={handleClickDropdown}
            >
              <div className="flex items-center justify-between cursor-pointer">
                <LazyImage src={initialvalue?.image || NoImage} alt="" className="h-10 w-10 sm:w-7 sm:h-7 xs:w-6 xs:h-6 md:w-8 md:h-8   border-2 rounded-full" handleClick={() => setisDropdownOpen(true)} />
              </div>
            </Typography>
            <Popover
              id={'simple-popover'}
              open={isdropdownopen}
              // anchorEl={anchorEl}
              onClose={() => setisDropdownOpen(false)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              sx={{
                '.MuiPopover-paper': {
                  top: '55px !important',
                }
              }}
            >
              <div className="w-64">
                <div className="flex flex-col justify-center items-center my-4">
                  <div
                    className="flex  w-full font-semibold text-xs p-2 mt-3 cursor-pointer"
                    onClick={() => {
                      setisDropdownOpen(false);
                      navigate('/profile');
                    }}
                  >
                    <LazyImage
                      src={initialvalue.image || NoImage}
                      // size={"small"}
                      className="rounded-full w-11 h-9"
                    />


                    <div className="flex flex-col w-full ml-3">
                      <p className="text-black-900 font-light text-sm capitalize">
                        {initialvalue.name}
                      </p>
                      <p className="text-black-900 text-opacity-30 font-normal sm:text-[9px] text-[11px]  w-40 break-words">
                        {initialvalue.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col w-full mt-2">
                    {/* <SeperatorLine className="!border-gray-800"></SeperatorLine>
                    <p className="text-xs font-light text-black-900 pl-3 pt-2 cursor-pointer">
                      Profile Settings
                    </p> */}
                    {/* <SeperatorLine className="!border-gray-800"></SeperatorLine> */}
                    <p className="text-xs font-light text-black-900 pl-3 pt-2 cursor-pointer hover:bg-gray-200 hover:py-1 hover:text-white">Payment Method</p>
                    {/* <SeperatorLine className="!border-gray-800"></SeperatorLine> */}
                    <p className="text-xs font-light text-black-900 pl-3 pt-2 cursor-pointer hover:bg-gray-200 hover:py-1 hover:text-white">Manage Shorts</p>
                    {/* <SeperatorLine className="!border-gray-800"></SeperatorLine> */}
                    <p className="text-xs font-light text-black-900 pl-3 pt-2 cursor-pointer hover:bg-gray-200 hover:py-1 hover:text-white">Settings</p>
                    {/* <SeperatorLine className="!border-gray-800"></SeperatorLine> */}
                    <p onClick={handleLogout} className="text-xs font-light text-red-100 pl-3 pt-2 cursor-pointer hover:bg-gray-200 hover:py-1 hover:text-white"> Sign Out</p>
                  </div>
                </div>
                <div className="flex justify-around items-center bg-grey-200"></div>
              </div>
            </Popover>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: showHideNavbar ? drawerWidth : '0' },
          flexShrink: { sm: 0 }
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
              keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                  // boxSizing: 'border-box',
                  width: drawerWidth,
                  backgroundColor: '#FFFFFF',
                  // // boxShadow: '#00000029',
                  // position:'relative',
                  // top:'30px'
              },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="persistent"
          sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                  // boxSizing: 'border-box',
                  width: showHideNavbar ? drawerWidth : '0',
                  backgroundColor: '#FFFFFF',
                  // boxShadow: '#00000029',
                  // position:'relative',
                  // top:'30px'
              },
          }}
          open={showHideNavbar}
        >
          {drawer}
        </Drawer>
      </Box>

    </>
  );
}
