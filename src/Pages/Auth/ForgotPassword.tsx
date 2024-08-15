import React from 'react';
import CustomCard from '@src/Shared/Card/CustomCard';
import ContentContainer from '@src/Containers/ContentContainer';
import CustomButton from '@src/Shared/CustomButton';
import Input from '@src/Shared/Input/Input';
import Logo from '@assets/image/Logo.svg';
import forgoticon from '@assets/icon/forgot-icon.svg';
import { Formik, Form, Field, ErrorMessage, FormikHelpers, FormikValues } from 'formik'
import { useNavigate } from 'react-router-dom';
import LazyImage from '@src/Shared/LazyImage/LazyImage';
import * as Yup from 'yup'
export interface initialSchemaValues {
    email: string;
}
function ForgotPassword() {
    const FormSchema = Yup.object().shape({
        email: Yup.string().label('Email').required(),
    });

    const initialValue:initialSchemaValues = {
        email:''
    }
    const navigate = useNavigate()
    const handleSubmit = () => {
        console.log('forgot password')
        navigate('/verificationcode')
    }
    return (
        <ContentContainer styleClass={'login-bg-gradient'}>
            <div className="flex flex-col items-center justify-center gap-5">
                <div className="inline-flex">
                    <LazyImage src={Logo} alt="frank zone logo" className='w-44' />
                </div>
                <CustomCard styleClass={'xs:w-[15rem]  xs:px-5 sm:w-[20rem] md:w-[25rem] sm:px-5 items-center justify-center w-9/12 px-10 py-6 text-left !shadow-xl'}>
                    <LazyImage src={forgoticon} alt="" className='w-12' />
                    <div className='text-xl font-bold tracking-wide font-sans xs:text-sm'>Forgot Password</div>
                    <p className='text-sm font-medium text-center opacity-85 font-sans xs:text-xs'>Enter Your Email Address, We'll Send You An OTP To Reset You Password</p>
                    <Formik
                      initialValues={initialValue}
                      validationSchema={FormSchema}
                        onSubmit={handleSubmit}
                    >
                                                {({ errors, handleChange, handleBlur, touched, values, setFieldValue }) => (

                        <Form className='w-full flex flex-col items-center justify-center gap-5'>
                        <Input
                                    id="email"
                                    name="email"
                                    label="Email"
                                    labelClassName='flex gap-1'
                                    type="email"
                                    variant="outline"
                                    placeholder="Enter Email ID"
                                    handldChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    error={errors.email}
                                    touched={touched.email}
                                    className='w-full'
                                />
                            <CustomButton
                                type={'submit'}
                                label='Send'
                                labelClass='text-white font-semibold'
                                styleClass='bg-black-900 w-5/6 !rounded-lg px-1 py-2' />
                        </Form>
                                                )}
                    </Formik>
                </CustomCard>
            </div>
        </ContentContainer>
    )
}

export default ForgotPassword;
