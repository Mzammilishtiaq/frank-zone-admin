import CustomCard from '@src/Shared/Card/CustomCard';
import ContentContainer from '../../Containers/ContentContainer';
import Logo from '@assets/image/Logo.svg';
import { Link } from 'react-router-dom';
import CustomButton from '@src/Shared/CustomButton';
import Input from '@src/Shared/Input/Input';
import { Typography } from '@mui/material';
import { Formik, Form, Field, ErrorMessage, FormikHelpers, FormikValues } from 'formik';

const Login = () => {
    const handleSubmit = () => {
        console.log('login page')
    }
    return (
        <ContentContainer styleClass={' login-bg-gradient '}>
            <div className='flex flex-col items-center justify-center gap-5'>
                <div className="inline-flex">
                    <img src={Logo} className='w-44' alt="" />
                </div>
                <CustomCard styleClass='items-center justify-center w-9/12 px-10 py-6 text-left'>
                    <div className='text-2xl font-semibold tracking-wide font-sans'>Get Started</div>
                    <p className='text-sm font-medium text-center opacity-85 font-sans'>Frankzone Super Admin Hub: Unifying Excellence Across Six Spectrums</p>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={handleSubmit}>
                        <Form className='w-full flex flex-col items-center justify-center gap-5'>
                            <Input label={'Email'} name='email' labelClass={''} type={'email'} placeholder={'Enter Email ID'} />
                            <Input label={'Password'} name='password' labelClass={''} type={'password'} placeholder={'Enter Password'} />
                            <Typography variant='body1' component={'div'} className='w-full'><Link to={'/forgotpassword'}><div className='text-blue-600 text-sm font-medium inline-flex justify-start'>Forgot Password?</div></Link></Typography>
                            <CustomButton
                                type={'submit'}
                                label='Login'
                                labelClass='text-white font-semibold'
                                styleClass='bg-black w-5/6 !rounded-lg px-1 py-2'

                            />
                        </Form>
                    </Formik>

                </CustomCard>

            </div>
        </ContentContainer>
    );
}

export default Login;


