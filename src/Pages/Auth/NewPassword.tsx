import React from 'react'
import ContentContainer from '@src/Containers/ContentContainer';
import Logo from '@assets/image/Logo.svg';
import verfiyicon from '@assets/icon/forgot-icon.svg';
import CustomCard from '@src/Shared/Card/CustomCard';
import { Form, Formik, FormikHelpers, FormikValues } from 'formik';
import Input from '@src/Shared/Input/Input';
import CustomButton from '@src/Shared/CustomButton';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
export interface initialSchemaValues {
    newpassword: string;
    confirmpassword:string;
}
function NewPassword() {
    // debugger
    const FormSchema = Yup.object().shape({
        newpassword: Yup.string().label('New Password').required(),
        confirmpassword: Yup.string().label('Confirm Password').required().oneOf([Yup.ref('newpassword')], 'Passwords not match'),
    });
    const initialValues:initialSchemaValues={
        newpassword: '',
        confirmpassword:''
    }
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
                <CustomCard styleClass='xs:w-[15rem]  xs:px-5 sm:w-[20rem] md:w-[25rem] sm:px-5 items-center justify-center w-9/12 px-10 py-6 text-left !shadow-xl'>
                    <img src={verfiyicon} className='w-12' alt="" />
                    <div className='text-xl font-bold tracking-wide font-sans xs:text-sm'>Forgot Password</div>
                    <p className='text-sm font-medium text-center opacity-85 font-sans'>Enter Your Email Address, We'll Send You An OTP To Reset You Password</p>
                    <Formik
                        onSubmit={handleSubmit}
                        initialValues={initialValues}
                        validationSchema={FormSchema}
                    >
                        {({ errors, handleChange, handleBlur, touched, values, setFieldValue }) => (

                            <Form className='w-full flex flex-col items-center text-left justify-center gap-5 mx-16'>
                                <Input
                                    id="newpassword"
                                    name="newpassword"
                                    label="New Password"
                                    labelClassName='flex gap-1'
                                    type="password"
                                    variant="outline"
                                    placeholder="Enter New Password"
                                    handldChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.newpassword}
                                    error={errors.newpassword}
                                    touched={touched.newpassword}
                                    className='w-full'
                                    />
                                <Input
                                    id="confirmpassword"
                                    name="confirmpassword"
                                    label="Confirm Password"
                                    labelClassName='flex gap-1'
                                    type="password"
                                    variant="outline"
                                    placeholder="Enter Confirm Password"
                                    handldChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmpassword}
                                    error={errors.confirmpassword}
                                    touched={touched.confirmpassword}
                                    className='w-full'
                                />
                                <CustomButton type={'submit'}
                                    label='Verify & Proceed'
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

export default NewPassword
