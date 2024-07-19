import React from 'react'
import { Dialog, DialogTitle } from '@mui/material';
import { Spinner } from '../Spinner/Spinner';
import Style from './Popup.module.scss';
import { Close } from '@mui/icons-material';
import DeleteCut from '@src/assets/icon/delete-cut.svg'

export interface PopupProps {
    isOpen: boolean;
    handleClose: any;
    title?: string;
    width?: any;
    maxWidth?: any;
    isLoading?: boolean;
    borderRadius?: number;
    isFullScreen?: boolean;
    isShowHeader?: boolean;
    childClassName?: string;
    containerClassName?: string;
    children?: React.ReactNode;
    userid?:string;
    disabledelete?:string;
}

function Popup({
    isOpen,
    handleClose,
    title,
    width,
    maxWidth,
    isLoading,
    borderRadius,
    isFullScreen,
    isShowHeader,
    childClassName,
    containerClassName,
    children,
    userid,
    disabledelete
}: PopupProps) {

    const closePopup = () => {
        handleClose?.(true);
    };
    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                fullScreen={isFullScreen}
                aria-describedby="alert-dialog-slide-description"
                className={Style.dialog}
                maxWidth={maxWidth}
                PaperProps={{
                    style: {
                        backgroundColor: 'rgb(255 255 255 / 40%)',
                        backdropFilter: 'blur(1px)',
                        width: width,
                        minHeight: 150,
                        borderRadius: borderRadius,
                    },
                }}
            >
                <div className={`${Style.container} ${containerClassName}`}>
                    {isShowHeader && (
                        <DialogTitle>
                            <div className={Style.title}>
                                <div>{title}</div>
                                {isLoading && (
                                    <div className={`${Style.closeIcon} mt-3`}>
                                        <Spinner />
                                    </div>
                                )}
                                {!isLoading && (
                                    <div className={`${Style.closeIcon} mt-3`} onClick={closePopup}>
                                        <Close height={15} />
                                    </div>
                                )}
                            </div>
                        </DialogTitle>
                    )}
                    <div className={`${Style.content} ${childClassName}`}><div className="flex flex-col justify-center items-center gap-3 w-[599px]">
                    <img src={DeleteCut} className="h-[124px] mt-6" />
                    <h4 className="font-[900] font-sans mt-5 text-[20px]">Are you sure?</h4>
                    <div className="flex flex-col justify-center items-center ">
                        <p className="font-medium ">
                            Are you sure you want to <span className="font-[900]">{disabledelete}</span>{' '}
                        </p>
                        <p className="font-semibold ">This User?</p>
                        <p className="text-sm font-[900] mt-2">User ID #{userid}</p>
                    </div>

                    <div className="space-y-3 mt-8 flex justify-around w-4/5">
                       {children}
                    </div>
                </div></div>
                </div>
            </Dialog>
        </div>
    )
}

export default Popup
