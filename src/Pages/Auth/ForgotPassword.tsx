import React from 'react';
import CustomCard from '@src/Shared/Card/CustomCard';
import ContentContainer from '@src/Containers/ContentContainer';
import CustomButton from '@src/Shared/CustomButton';
import Input from '@src/Shared/Input/Input';
import Logo from '@assets/image/Logo.svg';
import forgoticon from '@assets/icon/forgot-icon.svg';
import { Formik, Form, Field, ErrorMessage, FormikHelpers, FormikValues } from 'formik'
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const navigate = useNavigate()
    const handleSubmit = () => {
        console.log('forgot password')
        navigate('/verificationcode')
    }
    return (
        <ContentContainer styleClass={'login-bg-gradient'}>
            <div className="flex flex-col items-center justify-center gap-5">
                <div className="inline-flex">
                    <img src={Logo} alt="frank zone logo" className='w-44' />
                </div>
                <CustomCard styleClass={'items-center justify-center w-9/12 px-10 py-6 text-left'}>
                    <img src={forgoticon} alt="" className='w-12' />
                    <div className='text-xl font-bold tracking-wide font-sans'>Forgot Password</div>
                    <p className='text-sm font-medium text-center opacity-85 font-sans'>Enter Your Email Address, We'll Send You An OTP To Reset You Password</p>
                    <Formik
                        initialValues={{ email: '' }}
                        onSubmit={handleSubmit}
                    >
                        <Form className='w-full flex flex-col items-center justify-center gap-5'>
                            <Input
                                label={'Email'}
                                labelClass={''}
                                type={undefined}
                                placeholder={'Enter Email ID'}
                                name={'email'} />
                            <CustomButton
                                type={'submit'}
                                label='Send'
                                labelClass='text-white font-semibold'
                                styleClass='bg-black w-5/6 !rounded-lg px-1 py-2' />
                        </Form>
                    </Formik>
                </CustomCard>
            </div>
        </ContentContainer>
    )
}

export default ForgotPassword;
