import React, { useState } from 'react';
import ContentContainer from '@src/Containers/ContentContainer';
import CustomCard from '@src/Shared/Card/CustomCard';
import CustomButton from '@src/Shared/CustomButton';
import Input from '@src/Shared/Input/Input';
import Logo from '@assets/image/Logo.svg';
import verfiyicon from '@assets/icon/forgot-icon.svg';
import { Form, Formik, FormikHelpers, FormikValues } from 'formik';
import OTPInput from 'react-otp-input';
import { Link, useNavigate } from 'react-router-dom';

function verificationcode() {
    const [otp, setOtp] = useState('')
    const navigate = useNavigate();
    const handleSubmit = () => {
        console.log('verfication code')
        navigate('/newpassword')
    }
    return (
        <ContentContainer styleClass='login-bg-gradient'>
            <div className=" flex flex-col items-center justify-center gap-5">
                <div className="inline-flex">
                    <img src={Logo} alt="" className='w-44' />
                </div>
                <CustomCard styleClass={'xs:w-[15rem]  xs:px-5 sm:w-[20rem] md:w-[25rem] sm:px-5 items-center justify-center w-9/12 px-10 py-6 text-left !shadow-xl'}>
                    <img src={verfiyicon} alt="" className='w-12' />
                    <div className='text-xl font-bold text-black-900 tracking-wide xs:text-sm'>Verification Code</div>
                    <p className='text-sm font-medium text-center opacity-85 font-sans xs:text-xs'>Please Enter The 6-Digit Verification Code Sent To johndoe@gmail.com.</p>
                    <Formik
                        initialValues={{ email: '' }}
                        onSubmit={handleSubmit}
                    >
                        <Form className='w-full flex flex-col items-center text-left justify-center gap-5 mx-16'>
                            <OTPInput
                                value={otp}
                                // inputType={"number"}
                                onChange={setOtp}
                                numInputs={6}
                                shouldAutoFocus
                                inputStyle={`focus:outline-blue-900 bg-white border-2 flex  border-black-500 text-2xl font-normal text-black-900 rounded-lg py-3 xs:!w-7 sm:!w-9 !w-10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
                                renderSeparator={<span>&nbsp;&nbsp;&nbsp;</span>}
                                renderInput={(props) => <input {...props} />}
                            />
                            <CustomButton
                                type={'submit'}
                                label='Verify & Proceed'
                                labelClass='text-white font-semibold'
                                styleClass='bg-black-900 w-full !rounded-lg px-1 py-2' />
                            <div className="sm:w-full w-full flex flex-row items-center justify-center gap-2">
                                <span className='xs:text-[9px] sm:text-[12px]'>Didn't received the email?</span>
                                <Link className='sm:text-[12px] xs:text-[9px] text-blue-600 ' to={'/forgotpassword'}>Resend email</Link>
                            </div>
                        </Form>
                    </Formik>
                </CustomCard>
            </div>
        </ContentContainer>
    )
}

export default verificationcode
