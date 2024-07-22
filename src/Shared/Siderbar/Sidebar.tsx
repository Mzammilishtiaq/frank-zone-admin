import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Accordion, AccordionSummary, Popover, Typography } from '@mui/material';
import Logo from '@src/assets/image/Logo.svg';
import { MdArrowDropDown } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaUserCog } from "react-icons/fa";
import { TbRulerOff, TbUserDollar } from "react-icons/tb";
import { BsCartCheck } from "react-icons/bs";
import { PiSealPercent } from "react-icons/pi";
import { LuClipboardList } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RiExchangeDollarFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import profilelogo from '@src/assets/icon/Profile-Menu.png';
import searchicon from '@src/assets/icon/search-icon.svg';
import notificationicon from '@src/assets/icon/sidebar-icon/notification-cin-black.svg';

const drawerWidth = 240;

const SidebarItem = ({ item, dataIndex }: any) => {
  const activeRoute = useLocation();
  const splitLocation = activeRoute.pathname.split('/');

  return (
    <Link key={dataIndex} to={item?.link}>
      <div
        className={`py-3 px-5 flex gap-x-3 mb-2 cursor-pointer  ${splitLocation[1] === item.link.replace('/', '') ? 'bg-black-900' : 'bg-transparent'
          }`}
      >
        {splitLocation[1] == item.link.replace('/', '') ? item.icon_white : item.icon}
        <p className={`text-black-900 ${splitLocation[1] == item.link.replace('/', '') ? 'text-white' : ''}`}>
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
    <Accordion key={dataIndex} className="!bg-transparent !shadow-none !border-transparent !border-t-0 !outline-none">
      <AccordionSummary
        className={`!h-12 !min-h-0 ${splitLocation[1] == item.link.replace('/', '')
          ? '!bg-black-900 !text-white '
          : '!bg-transparent !shadow-none !border-transparent !outline-none'
          }`}
        expandIcon={<MdArrowDropDown className={`${splitLocation[1] == item.link.replace('/', '')
          ? '!bg-transparent !text-white '
          : '!bg-transparent !shadow-none !border-transparent !outline-none'
          }`} />}
      >
        <div className="flex items-center gap-3 px-1">
          {splitLocation[1] == item.link.replace('/', '') ? item.icon_white : item.icon}
          {item.title}
        </div>
      </AccordionSummary>
      {item.more_items.map((elem: any, index: any) => (
        <Link key={index} to={elem.link}>
          <p
            className={`text-left ml-6 pl-2 py-2 mt-2 mb-1 hover:bg-gray-400 hover:text-white ${activeRoute.pathname == elem.link ? 'bg-gray-300 text-white' : ''
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

export default function Sidebar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [sidebaritem, setSidebarItem] = React.useState<any[]>([])
  const [showHideNavbar, setShowHideNavbar] = React.useState<boolean>(true);
  const [isClosing, setIsClosing] = React.useState(false);
  const [notificationCount, setNotificationCount] = React.useState(0)
  const [isdropdownopen, setisDropdownOpen] = React.useState(false)
  const [topsearch,setTopSearch] = React.useState(false)
  const navigate = useNavigate();

  const handlesearchbar = ()=>{
    setTopSearch( opensearch => !opensearch)
  }

  React.useEffect(() => {
    getSiderbar();
  }, []);

  const getSiderbar = () => {
    let _siderbar = [
      {
        // link: '/dashboard',
        link: '#',
        title: 'Dashboard',
        icon: <LuLayoutDashboard />,
        icon_white: <LuLayoutDashboard className='text-white' />,
      },
      {
        link: '/user_management',
        title: 'User Management',
        icon: <FaUserCog />,
        icon_white: <FaUserCog className='text-white' />,
      },
      {
        link: '/vendor_managment',
        title: 'Vendor Managemnt',
        icon: <TbUserDollar />,
        icon_white: <TbUserDollar className='text-white' />,
        more_items: [
          {
            link: '/vendor_managment/ecommerce_shop',
            title: 'Ecommerce Shop',
            icon: <></>
          },
          {
            link: '/vendor_managment/food_ordering',
            title: 'Food Ordering',
            icon: <></>
          },
          {
            link: '/vendor_managment/health_beauty',
            title: 'Health & Beauty',
            icon: <></>,


          }, {
            link: '/vendor_managment/handyman',
            title: 'Handyman',
            icon: <></>,
          }, {
            link: '/vendor_managment/online_consulation',
            title: 'Online Consultation',
            icon: <></>,
          },
        ],
      }, {
        link: '/orders_managment',
        title: 'Orders Managemnt',
        icon: <BsCartCheck />,
        icon_white: <BsCartCheck className='text-white' />,
        more_items: [
          {
            link: '#',
            // link: '/listing',
            title: 'Listing',
            icon: <></>
          },
          {
            link: '#',
            // link: '/booking',
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
        icon: <PiSealPercent />,
        icon_white: <PiSealPercent className='text-white' />,
      }, {
        link: '#',
        // link: '/category_managment',
        title: 'Category Managemnt',
        icon: <LuClipboardList />,
        icon_white: <LuClipboardList className='text-white' />,
      }, {
        link: '#',
        // link: '/delivery_managment',
        title: 'Delivery Managemnt',
        icon: <TbTruckDelivery />,
        icon_white: <TbTruckDelivery className='text-white' />,
      }, {
        link: '#',
        // link: '/questionnaire',
        title: 'Questionnaire',
        icon: <IoMdInformationCircleOutline />,
        icon_white: <IoMdInformationCircleOutline className='text-white' />,
      }, {
        link: '#',
        // link: '/chat',
        title: 'Chat',
        icon: <CiMail />,
        icon_white: <CiMail className='text-white' />,
      }, {
        link: '#',
        // link: '/notification',
        title: 'Notification',
        icon: <MdOutlineNotificationsActive />,
        icon_white: <MdOutlineNotificationsActive className='text-wrap' />,
      }, {
        link: '#',
        // link: '/subscription',
        title: 'Subscription',
        icon: <RiExchangeDollarFill />,
        icon_white: <RiExchangeDollarFill className='text-white' />,
      }, {
        link: '#',
        // link: '/setting',
        title: 'Setting',
        icon: <IoSettingsOutline />,
        icon_white: <IoSettingsOutline className='text-wrap' />,
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
      <Toolbar>
        {/* <Logo className="w-9/12 cursor-pointer" /> */}
        <img src={Logo} alt="" />
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

  function setIsOpenSignoutPopup(arg0: boolean): void {
    throw new Error('Function not implemented.');
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
        <Toolbar className='flex justify-between bg-white relative top-0'>
          <div className="flex gap-x-2 items-center">
            <img src={searchicon} className='w-[28px] sm:hidden' onClick={()=>handlesearchbar()} />
            <p className='text-gray-300 font-bold sm:hidden'>Ctrl K</p>
           <input type="search" placeholder='Search anything...' className='text-black-900 placeholder:text-gray-300 placeholder:font-semibold outline-transparent sm:placeholder:text-sm px-3 sm:w-50' />
          </div>
          <div className='flex items-center'>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                marginRight: 'auto',
                marginLeft: '10px',
                color: 'black',
                display: { sm: 'none' },
              }}
            >
              <GiHamburgerMenu />
            </IconButton>

            <div className="inline-flex items-center gap-2">
              <FaRegQuestionCircle className="text-black-900 text-4xl px-1" />
              <div className='relative cursor-pointer' onClick={() => navigate('/settings/AllNotifications')}>
                <p className='text-white text-[8px] bg-red-500 rounded-full h-5 w-5 absolute flex justify-center items-center -top-1'>{notificationCount}</p>
                <img src={notificationicon} className=" px-1" />
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
              <div className="flex items-center justify-around cursor-pointer">
                <img src={profilelogo} alt="" className="h-10 w-10   border-2 rounded-full" onClick={()=>setisDropdownOpen(true)} />
              </div>
            </Typography>
            <Popover
              id={'simple-popover'}
              open={isdropdownopen}
              // anchorEl={anchorEl}
              onClose={()=>setisDropdownOpen(false)}
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
                    className="flex pl-3 w-full font-semibold text-sm mt-3 cursor-pointer"
                    onClick={() => {
                      setisDropdownOpen(false);
                      navigate('/profile');
                    }}
                  >
                    <img
                      src={profilelogo}
                      // size={"small"}
                      className="h-10 w-10   border-2 rounded-full"
                    />


                    <div className="flex flex-col ml-3">
                      <p className="text-black-900 font-light text-sm">
                        Muzammil ishtiaq
                      </p>
                      <p className="text-black-900 text-opacity-30 font-normal text-xs sm:text-[11px]  w-40 break-words">
                        tomuzammilishtiaq@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col w-full mt-2">
                    {/* <SeperatorLine className="!border-gray-800"></SeperatorLine>
                    <p className="text-xs font-light text-black-900 pl-3 pt-2 cursor-pointer">
                      Profile Settings
                    </p> */}
                    {/* <SeperatorLine className="!border-gray-800"></SeperatorLine> */}
                    <p className="text-xs font-light text-black-900 pl-3 pt-2 cursor-pointer">
                      Payment Method
                    </p>
                    {/* <SeperatorLine className="!border-gray-800"></SeperatorLine> */}
                    <p
                      className="text-xs font-light text-black-900 pl-3 pt-2 cursor-pointer"
                      onClick={() => {
                        setisDropdownOpen(false);
                        navigate('/shorts');
                      }}
                    >
                      Manage Shorts
                    </p>
                    {/* <SeperatorLine className="!border-gray-800"></SeperatorLine> */}
                    <p
                      className="text-xs font-light text-black-900 pl-3 pt-2 cursor-pointer">
                      Settings
                    </p>
                    {/* <SeperatorLine className="!border-gray-800"></SeperatorLine> */}
                    <p
                      onClick={() => setIsOpenSignoutPopup(true)}
                      className="text-xs font-light text-red-100 pl-3 pt-2 cursor-pointer"
                    >
                      Sign Out
                    </p>
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
          style={{ scrollbarWidth: "none" }}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#FFFFF', boxShadow: '#00000029' },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          style={{ scrollbarWidth: "none" }}
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: showHideNavbar ? drawerWidth : '0', backgroundColor: '#FFFFF', boxShadow: '#00000029' },
          }}
          open={showHideNavbar}
        >
          {drawer}
        </Drawer>
      </Box>

    </>
  );
}
