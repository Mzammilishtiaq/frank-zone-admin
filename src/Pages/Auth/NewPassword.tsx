import React from 'react'
import ContentContainer from '@src/Containers/ContentContainer';
import Logo from '@assets/image/Logo.svg';
import verfiyicon from '@assets/icon/forgot-icon.svg';
import CustomCard from '@src/Shared/Card/CustomCard';
import { Form, Formik, FormikHelpers, FormikValues } from 'formik';
import Input from '@src/Shared/Input/Input';
import CustomButton from '@src/Shared/CustomButton';
import { useNavigate } from 'react-router-dom';

function NewPassword() {
    const navigate = useNavigate();
    const handleSubmit = () => {
        console.log('new password')
        navigate('/login')
    }
    return (
        <ContentContainer styleClass='login-bg-gradient'>
            <div className="flex flex-col items-center justify-center gap-5">
                <div className="inline-flex">
                    <img src={Logo} className='w-44' alt="" />
                </div>
                <CustomCard styleClass='items-center justify-center w-9/12 px-10 py-6 text-left'>
                    <img src={verfiyicon} className='w-12' alt="" />
                    <div className='text-xl font-bold tracking-wide font-sans'>Forgot Password</div>
                    <p className='text-sm font-medium text-center opacity-85 font-sans'>Enter Your Email Address, We'll Send You An OTP To Reset You Password</p>
                    <Formik
                        onSubmit={handleSubmit}
                        initialValues={{ newpassowrd: '', confirmpassword: '' }}
                    >
                        <Form className='w-full flex flex-col items-center text-left justify-center gap-5 mx-16'>
                            <Input label={'New Password'} labelClass={''} type={'password'} placeholder={'Enter New Password'} name={'newpassowrd'} />
                            <Input label={'Confirm Password'} labelClass={''} type={'password'} placeholder={'Enter Confirm Password'} name={'confirmpassword'} />
                            <CustomButton  type={'submit'}
                                label='Verify & Proceed'
                                labelClass='text-white font-semibold'
                                styleClass='bg-black w-5/6 !rounded-lg px-1 py-2' />
                        </Form>
                    </Formik>
                </CustomCard>
            </div>
        </ContentContainer>
    )
}

export default NewPassword
