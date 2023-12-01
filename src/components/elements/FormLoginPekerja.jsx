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
                <label htmlFor="email" className="block text-[16px]  font-medium text-gray-600">
                  Email
                </label>
                <input type="email" id="email" name="email" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan alamat email" />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-[16px] font-medium text-gray-600">
                  Kata Sandi
                </label>
                <input type="password" id="password" name="password" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan kata sandi" />
              </div>
              <div className="container-lupa-sandi flex justify-end my-5">
                <Link to="/" className=" mx-2 ">
                  Lupa kata sandi?
                </Link>
              </div>
              <div>
                <button type="submit" className="w-full bg-[#FBB017] text-white py-2 px-4 rounded-md hover:bg=[#FBB017] focus:outline-none focus:ring focus:border-blue-300">
                  Masuk
                </button>
                <div className="container-link my-5 text-center">
                  <p className="signup ">
                    Anda belum punya akun?
                    <Link to="/register-worker" className="signup-link mx-2 text-[#FBB017]">
                      Daftar disini
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
