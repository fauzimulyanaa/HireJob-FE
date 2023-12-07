import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { verifyOtpCompanyAction, verifyOtpWorkerAction } from '../../redux/actions/Auth';
import Swal from 'sweetalert2';

export default function FormResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    otp: '',
  });
  const verifyOtpCompany = useSelector((state) => state.verifyOtpCompany);
  const verifyOtpWorker = useSelector((state) => state.verifyOtpWorker);

  const user = localStorage.getItem('status');

  if (user == 'company' ? verifyOtpCompany.isLoading : verifyOtpWorker.isLoading) {
    Swal.fire({
      title: 'Checking Otp...',
      html: 'Please wait...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(user == 'company' ? verifyOtpCompanyAction(form, navigate) : verifyOtpWorkerAction(form, navigate));
  };

  return (
    <section>
      <div className='container-form max-w-md mx-auto py-8 px-4'>
        <h1 className='text-3xl my-5 text-center'>Otp</h1>
        <p className='my-8  text-center'>Enter your user {"account's"} verified email address and we will send you a password reset link.</p>
        <form onSubmit={handleSubmit}>
          <div className='container-form'>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-[16px]  font-medium text-gray-600'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300'
                placeholder='Masukan alamat email'
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='otp' className='block text-[16px]  font-medium text-gray-600'>
                Otp
              </label>
              <input
                type='text'
                id='otp'
                name='otp'
                className='mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300'
                placeholder='Masukan OTP'
                onChange={(e) => setForm({ ...form, otp: e.target.value })}
              />
            </div>
            <div>
              <button type='submit' className='w-full bg-[#FBB017] text-white py-2 px-4 rounded-md hover:bg=[#FBB017] focus:outline-none focus:ring focus:border-blue-300'>
                Go To Change Password
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
