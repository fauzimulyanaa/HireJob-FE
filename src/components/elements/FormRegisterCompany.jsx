/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

export default function FormInput() {
  return (
    <>
      <section>
        <div className="container-form max-w-md mx-auto py-8 px-4">
          <h1 className="text-3xl my-5 text-center">Halo, Pewpeople</h1>
          <p className="my-8  text-center">Temukan pekerjaan impian Anda dengan mudah dan cepat. Ratusan ribu lowongan dari berbagai bidang menanti Anda.</p>
          <form>
            <div className="container-form">
              <div className="mb-4">
                <label htmlFor="nama" className="block text-[16px] font-medium text-gray-600">
                  Nama
                </label>
                <input type="text" id="nama" name="nama" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300 " placeholder="Masukan nama panjang" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-[16px]  font-medium text-gray-600">
                  Email
                </label>
                <input type="email" id="email" name="email" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan alamat email" />
              </div>
              <div className="mb-4">
                <label htmlFor="perusahaan" className="block text-[16px] font-medium text-gray-600">
                  Perusahaan
                </label>
                <input type="text" id="perusahaan" name="perusahaan" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan nama perusahaan" />
              </div>
              <div className="mb-4">
                <label htmlFor="jabatan" className="block text-[16px] font-medium text-gray-600">
                  Jabatan
                </label>
                <input type="text" id="jabatan" name="jabatan" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Posisi di perusahaan Anda" />
              </div>
              <div className="mb-4">
                <label htmlFor="handphone" className="block text-[16px] font-medium text-gray-600">
                  No handphone
                </label>
                <input type="number" id="handphone" name="handphone" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan no handphone" />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-[16px] font-medium text-gray-600">
                  Kata Sandi
                </label>
                <input type="password" id="password" name="password" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan kata sandi" />
              </div>
              <div className="mb-6">
                <label htmlFor="confpassword" className="block text-[16px] font-medium text-gray-600">
                  Konfirmasi kata sandi
                </label>
                <input type="password" id="confpassword" name="confpassword" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan konfirmasi kata sandi" />
              </div>
              <div>
                <button type="submit" className="w-full bg-[#FBB017] text-white py-2 px-4 rounded-md hover:bg=[#FBB017] focus:outline-none focus:ring focus:border-blue-300">
                  Daftar
                </button>
                <div className="container-link my-10 text-center">
                  <p className="signup ">
                    Anda sudah punya akun?
                    <Link to="/login-company" className="signup-link mx-2 text-[#FBB017]">
                      Masuk disini
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
