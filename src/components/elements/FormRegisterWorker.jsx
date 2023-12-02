/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { registerWorkerAction } from "../../redux/actions/Auth";

export default function FormInputRegisterWorker() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authRegister = useSelector((state) => state.AuthRegisterWorker);

  const [form, setForm] = useState({
    nama: "",
    email: "",
    phone: "",
    password: "",
    confPassword: "",
  });

  if (authRegister.isLoading) {
    Swal.fire({
      title: "Register On Process",
      html: "Please wait...",
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  const onChangeInput = (e, field) => {
    setForm({
      ...form,
      [field]: e,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confPassword) {
      Swal.fire({
        icon: "error",
        title: "Password Mismatch",
        text: "Password and confirm password do not match.",
      });
    } else if (Object.values(form).some((value) => value === "")) {
      Swal.fire({
        title: "Failed!",
        text: `Failed, All fields are required!`,
        icon: "error",
      });
    } else {
      dispatch(registerWorkerAction(form.nama, form.email, form.phone, form.password, form.confPassword, navigate));
    }
  };
  return (
    <>
      <section>
        <div className="container-form max-w-md mx-auto py-8 px-4">
          <h1 className="text-3xl my-5 text-center">Halo, Pewpeople</h1>
          <p className="my-8  text-center">Temukan pekerjaan impian Anda dengan mudah dan cepat. Ratusan ribu lowongan dari berbagai bidang menanti Anda.</p>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="container-form">
              <div className="mb-4">
                <label htmlFor="nama" className="block text-[16px] font-medium text-gray-600">
                  Nama
                </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300 "
                  placeholder="Masukan nama panjang"
                  onChange={(e) => onChangeInput(e.target.value, "nama")}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-[16px]  font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Masukan alamat email"
                  onChange={(e) => onChangeInput(e.target.value, "email")}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="handphone" className="block text-[16px] font-medium text-gray-600">
                  No handphone
                </label>
                <input
                  type="text"
                  id="handphone"
                  name="handphone"
                  className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Masukan no handphone"
                  onChange={(e) => onChangeInput(e.target.value, "phone")}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-[16px] font-medium text-gray-600">
                  Kata Sandi
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Masukan kata sandi"
                  onChange={(e) => onChangeInput(e.target.value, "password")}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="confpassword" className="block text-[16px] font-medium text-gray-600">
                  Konfirmasi kata sandi
                </label>
                <input
                  type="password"
                  id="confpassword"
                  name="confpassword"
                  className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Masukan konfirmasi kata sandi"
                  onChange={(e) => onChangeInput(e.target.value, "confPassword")}
                />
              </div>
              <div>
                <button type="submit" className="w-full bg-[#FBB017] text-white py-2 px-4 rounded-md hover:bg=[#FBB017] focus:outline-none focus:ring focus:border-blue-300">
                  Daftar
                </button>
                <div className="container-link my-10 text-center">
                  <p className="signup ">
                    Anda sudah punya akun?
                    <Link to="/login-worker" className="signup-link mx-2 text-[#FBB017]">
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
