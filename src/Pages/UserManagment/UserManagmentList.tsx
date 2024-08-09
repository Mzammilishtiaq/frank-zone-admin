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

export interface filterType {
    searchValue?: string;
    offset?: number;
    limit?: number;
    order?: string;
}
function UserManagmentList() {
    let initialState = 'ACTIVE';
    const [isdeletepop, setisDeletePop] = React.useState(false);
    const [userdatalist, setUserDataList] = React.useState([]) as any;
    const [isLoading, setIsLoading] = React.useState(false);
    const [actionvalue, setActionValue] = React.useState('')
    const [disableid, setDisableId] = React.useState('')
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
            if (res && !res.error) {
                setIsLoading(false)
                setUserDataList(res.data)
                // handleToastMessage('success', res?.message)
            } else {
                setIsLoading(false)
                handleToastMessage('error', res?.message)
            }
        })
    }

    // const handleChange = async (event: any, id: number, status: any) => {
    //     if (status == 'ACTIVE') {
    //         setisDeletePop(true)
    //         // handleDisable(event, id)
    //         var events = event;
    //         var ids= id;
    //     } else {
    //         setisDeletePop(false)
    //     }


    // }
    const activePopoup = (event: any, id: any) => {
        setisDeletePop(true)
        const action = event.target.checked ? 'ACTIVE' : 'INACTIVE';
        setDisableId(id);
        setActionValue(action);
    }

    const handletoggle = () => {
        backendCall({
            url: `/api/admin/user_management/${disableid}/status?action=${actionvalue}`,
            method: 'PUT',
        }).then((res) => {
            console.log('user managment TOGGLE ==', res)
            if (res && !res.error) {
                setIsLoading(false)
                FetchUserManagmentData();
                // handleToastMessage('success', res?.message)
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
                    <CustomButton type={'button'} icon={<LazyImage src={deletebtn} handleClick={() => setisDeletePop(true)} className='w-4' />} />
                </div>
            )
        }
    ]
    return (
        <div className=''>
            <Popup isOpen={isdeletepop} handleClose={() => setisDeletePop(false)} isShowHeader={true} >
                <div className={``}><div className="flex flex-col justify-center items-center gap-3 ">
                    <img src={DeleteCut} className="h-[100px] mt-6" />
                    <h4 className="font-[900] font-sans mt-5 text-[20px]">Are you sure?</h4>
                    <div className="flex flex-col justify-center items-center ">
                        <p className="font-medium ">
                            Are you sure you want to <span className="font-[900]">disable</span>{' '}
                        </p>
                        <p className="font-semibold ">This User?</p>
                        <p className="text-sm font-[900] mt-2">User ID {disableid}</p>
                    </div>

                    <div className="space-y-3 mt-8 flex justify-around w-4/5">
                        <CustomButton
                            handleButtonClick={() => setisDeletePop(false)}
                            label={'Cancel'}
                            type={'button'}
                            styleClass={'btn-gray-light w-full  !rounded-xl !font-medium mr-2 bg-gray-400 text-white py-5 px-4 font-semibold '}
                        />
                        <CustomButton
                            handleButtonClick={handletoggle}
                            label={'Yes, Disable'}
                            type={'button'}
                            styleClass={'btn-red w-full !mt-0 !rounded-xl !font-medium ml-2 bg-red-600 text-white py-4 px-4 font-semibold'}
                        />
                    </div>
                </div>
                </div>
            </Popup>
            <CustomCard styleClass={' p-5 '}>
                <div role="presentation" className='mb-3' >
                    <Breadcrumbs aria-label="breadcrumb" className='opacity-[0.3]'>
                        <Link to='/dashboard' className='text-sm hover:border-b-2 hover:border-gray-500'>
                            Dashboard
                        </Link>
                        <Typography color="" className='text-sm'>User</Typography>
                    </Breadcrumbs>
                    <h5 className='text-2xl font-medium text-[rgba(5, 25, 23, 1)] xs:text-sm'>User Management</h5>
                </div>
                <Input leftIcon={<img src={searchicon} className='w-[28px] opacity-[1] xs:w-5' />} type={'text'} placeholder={'Start typing to search for user'} className={'sm:placeholder:text-xs xs:placeholder:text-[5px] sm:w-68'} name={'searchValue'} onChange={(e) => setFilterValue({ ...filterValue, searchValue: e.target.value })} />
                <Spinner classname='my-3' size={'25'} isLoading={isLoading} />
                <Table
                    tableLayout="fixed"
                    columns={Column as any}
                    emptyText={'No data found'}
                    data={userdatalist.rows}
                    rowKey="id"
                    scroll={{ x: 1000 }}
                    sticky={true}
                    className="custom-table"
                    onHeaderRow={() => ({
                        className: '',
                    })}
                />
                <Pagination
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                    totalCount={userdatalist.count}
                />

            </CustomCard>
        </div>
    )
}

export default UserManagmentList
