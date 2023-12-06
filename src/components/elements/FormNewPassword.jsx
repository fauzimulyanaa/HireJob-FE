import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { updatePasswordCompanyAction, updatePasswordWorkerAction } from '../../redux/actions/Auth';

export default function FormResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    password: '',
    confirmPassword: '',
  });
  const updatePasswordCompany = useSelector((state) => state.updatePasswordCompany);
  const updatePasswordWorker = useSelector((state) => state.updatePasswordWorker);
  const user = localStorage.getItem('status');

  if (user == 'company' ? updatePasswordCompany.isLoading : updatePasswordWorker.isLoading) {
    Swal.fire({
      title: 'Updating...',
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
    dispatch(user == 'company' ? updatePasswordCompanyAction(form, navigate) : updatePasswordWorkerAction(form, navigate));
  };

  return (
    <section>
      <div className='container-form max-w-md mx-auto py-8 px-4'>
        <h1 className='text-3xl my-5 text-center'>Reset password</h1>
        <p className='my-8  text-center'>You need to change your password to activate your account</p>
        <form onSubmit={handleSubmit}>
          <div className='container-form'>
            <div className='mb-4'>
              <label htmlFor='password' className='block text-[16px]  font-medium text-gray-600'>
                Kata sandi
              </label>
              <input
                type='password'
                id='password'
                name='password'
                className='mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300'
                placeholder='Masukan kata sandi'
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='confpassword' className='block text-[16px]  font-medium text-gray-600'>
                Confirmation new password
              </label>
              <input
                type='password'
                id='confpassword'
                name='confpassword'
                className='mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300'
                placeholder='Masukan konfirmasi kata sandi'
                onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
              />
            </div>
            <div>
              <button type='submit' className='w-full bg-[#FBB017] text-white py-2 px-4 rounded-md hover:bg=[#FBB017] focus:outline-none focus:ring focus:border-blue-300'>
                Reset password
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
