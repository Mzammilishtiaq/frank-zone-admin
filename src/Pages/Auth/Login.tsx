import CustomCard from '@src/Shared/Card/CustomCard';
import ContentContainer from '../../Containers/ContentContainer';
import * as Yup from 'yup'
import Logo from '@assets/image/Logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import CustomButton from '@src/Shared/CustomButton';
import Input from '@src/Shared/Input/Input';
import { Typography } from '@mui/material';
import { Formik, Form, Field, ErrorMessage, FormikHelpers, FormikValues } from 'formik';
import { useState } from 'react';
import { backendCall } from '@src/Shared/utils/BackendService/backendCall'; 
import { handleToastMessage } from '@src/Shared/toastify';
import  {SetStorage} from '@src/Shared/utils/authService/authService'

export interface initialSchemaValues {
    email: string;
    password: string;
}

const Login = () => {
    const FormSchema = Yup.object().shape({
        email: Yup.string().label('Email').required(),
        password: Yup.string().label('Password').required(),
    });
    const initialValues: initialSchemaValues = {
        email: '',
        password: '',
    };
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const handleSubmit = (values: any) => {
        // console.log(values)
        if(values){
            setIsLoading(true);
            backendCall({
                url:"/api/admin/auth/login",
                method:"POST",
                data:values
            }).then((res)=>{
                if(res && !res.error){
                    console.log(res)
                    setIsLoading(false)
                    SetStorage(res.data)
                    navigate(`/dashboard`)
                    handleToastMessage('success',res?.message)
                }else {
                    setIsLoading(false);
                    handleToastMessage('error', res?.message);
                }
            })
        }
    }
    return (
        <ContentContainer styleClass={' login-bg-gradient '}>
            <div className='flex flex-col items-center justify-center gap-5'>
                <div className="inline-flex">
                    <img src={Logo} className='w-44' alt="" />
                </div>
                <CustomCard styleClass='xs:w-[15rem]  xs:px-5 sm:w-[20rem] md:w-[25rem] sm:px-5 items-center justify-center w-9/12 px-10 py-6 text-left !shadow-xl'>
                    <h5 className='text-2xl font-semibold tracking-wide '>Get Started</h5>
                    <p className='font-medium text-center opacity-90 text-black-900 xs:text-xs'>Frankzone Super Admin Hub: Unifying Excellence Across Six Spectrums</p>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={FormSchema}
                        onSubmit={handleSubmit}>
                        {({ errors, handleChange, handleBlur, touched, values, setFieldValue }) => (

                            <Form className='w-full flex flex-col items-center justify-center gap-5'>
                                <Input
                                    id="email"
                                    name="email"
                                    label="Email"
                                    type="email"
                                    variant="outline"
                                    placeholder="Enter Email ID"
                                    handldChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    error={errors.email}
                                    touched={touched.email}
                                    className='w-full sm:w-full'
                                />
                                <Input
                                    name="password"
                                    label="Password"
                                    type="password"
                                    placeholder="Enter Password"
                                    variant="outline"
                                    handldChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.password}
                                    touched={touched.password}
                                    value={values.password}
                                    className='w-full'
                                />
                                <Typography variant='body1' component={'div'} className='w-full'><Link to={'/forgotpassword'}><div className='text-blue-600 text-sm font-medium inline-flex justify-start'>Forgot Password?</div></Link></Typography>
                                <CustomButton
                                    type={'submit'}
                                    label='Login'
                                    labelClass='text-white font-semibold'
                                    styleClass='bg-black-900 w-5/6 !rounded-lg px-1 py-2'
                                    handleButtonClick={handleSubmit}
                                    // handleButtonClick={() => navigate('/user_management')}

                                    isLoading={isLoading}
                                />
                            </Form>
                        )}
                    </Formik>

                </CustomCard>

            </div>
        </ContentContainer>
    );
}

export default Login;


