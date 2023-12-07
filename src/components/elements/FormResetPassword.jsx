import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendOtpCompanyAction, sendOtpWorkerAction } from '../../redux/actions/Auth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function FormResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sendOtpCompany = useSelector((state) => state.sendOtpCompany);
  const sendOtpWorker = useSelector((state) => state.sendOtpWorker);
  const [form, setForm] = useState({
    email: '',
  });
  const user = localStorage.getItem('status');

  if (user == 'company' ? sendOtpCompany.isLoading : sendOtpWorker.isLoading) {
    Swal.fire({
      title: 'Send Otp to your email...',
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
    dispatch(user == 'company' ? sendOtpCompanyAction(form, navigate) : sendOtpWorkerAction(form, navigate));
  };

  return (
    <section>
      <div className='container-form max-w-md mx-auto py-8 px-4'>
        <h1 className='text-3xl my-5 text-center'>Reset password</h1>
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
            <div>
              <button type='submit' className='w-full bg-[#FBB017] text-white py-2 px-4 rounded-md hover:bg=[#FBB017] focus:outline-none focus:ring focus:border-blue-300'>
                Send password reset email
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
