import * as React from 'react';
import CustomCard from '@src/Shared/Card/CustomCard'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import SeperatorLine from '@src/Shared/SeperatorLine/SeperatorLine';
import Search from '@src/Shared/Search/Search';
import { Table } from '@src/Shared/Table/Table';
import Pagination from '@src/Shared/Table/Pagination';
import viewbtn from '@src/assets/icon/view.svg';
import deletebtn from '@src/assets/icon/delete.svg';
import CustomButton from '@src/Shared/CustomButton';
import { Switch } from '@mui/material';
import Data1 from '@src/assets/data.json';
import Popup from '@src/Shared/Popup/Popup';
import { Link, useNavigate } from 'react-router-dom';
import DeleteCut from '@src/assets/icon/delete-cut.svg'
import searchicon from '@src/assets/icon/search-icon.svg';
import LazyImage from '@src/Shared/LazyImage/LazyImage';
import { backendCall } from '@src/Shared/utils/BackendService/backendCall';
import { Spinner } from '@src/Shared/Spinner/Spinner';
import { handleToastMessage } from '@src/Shared/toastify';
import { UserManagmentModel } from '@src/Shared/Models/UserManage/UserManagmentModel';
import Input from '@src/Shared/Input/Input';
import NoRecored from '@src/Shared/NoRecored/NoRecored';

export interface filterType {
    searchValue?: string;
    offset?: number;
    limit?: number;
    order?: string;
}
function UserManagmentList() {
    const [isdisablepop, setisDisablePop] = React.useState(false);
    const [userdatalist, setUserDataList] = React.useState([]) as any;
    const [isLoading, setIsLoading] = React.useState(false);
    const [actionvalue, setActionValue] = React.useState('')
    const [disableid, setDisableId] = React.useState('')
    const [emtypmessage, setEmptyMessage] = React.useState(true)
    const [filterValue, setFilterValue] = React.useState<filterType>({
        searchValue: '',
        offset: 0,
        limit: 10,
        order: 'desc',
    })
    const navigate = useNavigate();
    // React.useEffect(() => {
    //         FetchUserManagmentData();
    // }, [])

    console.log('userdatalist==', userdatalist)
    const handleChangePage = (event: any) => {
        console.log(event);
        setFilterValue({ ...filterValue, offset: event });
    };

    const handleChangeRowsPerPage = (event: any) => {
        console.log(event);
        setFilterValue({ ...filterValue, limit: event });
    };

    React.useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            FetchUserManagmentData();
        }, 600);

        return () => clearTimeout(delayDebounceFn);
    }, [filterValue])

    const FetchUserManagmentData = () => {
        setIsLoading(true)
        backendCall({
            url: `/api/admin/user_management?limit=${filterValue.limit}&offset=${filterValue.offset}&order=desc&text=${filterValue.searchValue}`,
            method: 'GET',
            dataModel: UserManagmentModel,
        }).then((res) => {
            // console.log('user managment ==', res)
            if (!res.error) {
                setIsLoading(false)
                setUserDataList(res.data)
                // handleToastMessage('success', res?.message)
            } else {
                setIsLoading(false)
                handleToastMessage('error', res?.message)
            }
        })
    }




    // }
    const activePopoup = (event: any, id: any) => {
        let isChecked = event.target.checked;
        let action = 'ENABLE';
        if (isChecked) {
            handletoggle(id, action)
        } else {
            action = 'DISABLE';
            setisDisablePop(true)
            setDisableId(id);
            setActionValue(action);

        }

    }

    const handletoggle = (id: any, action: any) => {
        backendCall({
            url: `/api/admin/user_management/${id || disableid}/status?action=${action || actionvalue}`,
            method: 'PUT',
        }).then((res) => {
            console.log('user managment TOGGLE ==', res)
            if (res && !res.error) {
                setIsLoading(false)
                FetchUserManagmentData();
                setisDisablePop(false)
                handleToastMessage('success', res?.message)

            } else {
                setIsLoading(false)
                handleToastMessage('error', res?.message)
            }
        })
    }




    const Column = [
        {
            title: (
                <div className='w-full flex items-start justify-start'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'ID'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 70,
            render: (name: string, row: any) => (
                <div className="w-full flex items-start justify-start">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] sm:text-[10px] md:text-[10px]'># {row.id || '-'}</p>
                </div>
            )
        },
        {
            title: (
                <div className='w-full flex items-start justify-start'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Name'}</span>
                </div>
            ),
            dataIndex: 'name',
            key: 'name',
            width: 110,
            render: (name: string, row: any) => (
                <div className="w-full flex items-start justify-start">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]' title={row.name}>{row.name || '-'}</p>
                </div>
            )
        },
        {
            title: (
                <div className='w-full flex items-start justify-start'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Phone'}</span>
                </div>
            ),
            dataIndex: 'id',
            key: 'id',
            width: 110,
            render: (name: string, row: any) => (
                <div className="w-full flex items-start justify-start">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]' title={row.phone}>{row.phone || '-'}</p>
                </div>
            )
        },
        {
            title: (
                <div className='w-full flex items-start justify-start'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Email'}</span>
                </div>
            ),
            dataIndex: 'id',
            key: 'id',
            width: 110,
            render: (name: string, row: any) => (
                <div className="w-full flex items-start justify-start">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]' title={row.email}>{row.email || '-'}</p>
                </div>
            )
        },
        {
            title: (
                <div className='w-full flex items-start justify-start'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Address'}</span>
                </div>
            ),
            dataIndex: 'id',
            key: 'id',
            width: 110,
            render: (name: string, row: any) => (
                <div className="w-full flex items-start justify-start">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]' title={row?.address} >{row?.address || '-'}</p>
                </div>
            )
        },
        {
            title: (
                <div className='w-full flex items-start justify-start ml-14'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Action'}</span>
                </div>
            ),
            dataIndex: 'id',
            key: 'id',
            width: 110,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-start gap-3 ml-14">
                    <Switch
                        checked={row?.status == 'ACTIVE'}
                        onChange={(e) => activePopoup(e, row.id)}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />

                    <CustomButton type={'button'} handleButtonClick={() => navigate(`/user_management/profile/${row.id}`)} icon={<LazyImage src={viewbtn} className='w-4' />} />
                    <CustomButton type={'button'} icon={<LazyImage src={deletebtn}
                        // handleClick={() => setisDeletePop(true)} 
                        className='w-4' />} />
                </div>
            )
        }
    ]
    return (
        <div className=''>
            <Popup isOpen={isdisablepop} handleClose={() => setisDisablePop(false)} isShowHeader={true} >
                <div className="flex flex-col justify-center items-center gap-5 pb-3">
                    <img src={DeleteCut} className="h-70 w-70" />
                    <div className="flex flex-col justify-center items-center gap-3 ">
                        <h4 className="font-semibold text-[20px]">Are you sure?</h4>
                        <p className="font-normal">
                            Are you sure you want to <span className="font-semibold">Disable</span>{' '}
                        </p>
                        <p className="font-normal">This User?</p>
                        <p className="text-sm font-semibold">User ID #{disableid}</p>
                    </div>

                    <div className="flex justify-around w-4/5">
                        <CustomButton
                            handleButtonClick={() => setisDisablePop(false)}
                            label={'Cancel'}
                            type={'button'}
                            styleClass={'btn-gray-light w-full  !rounded-xl !font-medium mr-2 bg-gray-200 text-black-900 p-3 font-semibold '}
                        />
                        <CustomButton
                            handleButtonClick={handletoggle}
                            label={'Yes, Disable'}
                            type={'button'}
                            styleClass={'btn-red w-full !mt-0 !rounded-xl !font-medium ml-2 bg-red-600 text-white p-3 font-semibold'}
                        />
                    </div>
                </div>
            </Popup>
            <CustomCard styleClass={''}>
               <div className="p-5 w-full">
               <div role="presentation" className='mb-3' >
                    <Breadcrumbs aria-label="breadcrumb" className='opacity-[0.3]'>
                        <Link to='/dashboard' className='text-sm hover:!text-blue-902 cursor-pointer'>
                            Dashboard
                        </Link>
                        <Typography color="" className='text-sm xs:text-[10px] hover:!text-blue-902 cursor-pointer'>User Management</Typography>
                    </Breadcrumbs>
                    <h5 className='text-2xl font-medium text-[rgba(5, 25, 23, 1)] xs:text-sm'>User Management</h5>
                </div>
                <Input
                    leftIcon={<img src={searchicon} className='w-[28px] opacity-[1] xs:w-5' />}
                    type={'text'}
                    placeholder={'Start typing to search for user'} className={'sm:placeholder:text-xs xs:placeholder:text-[5px] sm:w-68'} name={'searchValue'}
                    onChange={(e) => setFilterValue({ ...filterValue, searchValue: e.target.value })}
                />
               </div>
                <Table
                    tableLayout="fixed"
                    columns={Column as any}
                    emptyText={userdatalist.count === 0 ? (<NoRecored />) : (<div className="flex justify-center w-full my-3">
                        <Spinner isLoading={isLoading} />
                    </div>)}
                    data={userdatalist.rows}
                    rowKey="id"
                    scroll={{ x: 1000 }}
                    sticky={true}
                    className="custom-table"
                    onHeaderRow={() => ({
                        className: '',
                    })}
                />
               <div className="p-5">
               <Pagination
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                    totalCount={userdatalist.count}
                />
               </div>

            </CustomCard>
        </div>
    )
}

export default UserManagmentList
