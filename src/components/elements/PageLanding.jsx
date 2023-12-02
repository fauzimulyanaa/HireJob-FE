/* eslint-disable no-unused-vars */
import React from "react";
import Picture from "../../assets/img/logo-home.png";
import People from "../../assets/img/people.png"
import Mail from "../../assets/img/mailLogo.svg"
import Bell from "../../assets/img/bellLogo.svg"
import User from "../../assets/img/tomson.svg"

export default function PageHome() {
  return (
    <>
      <section>
          <nav className="w-screen">
            <div className="content flex justify-between mx-10 py-3">
            <div className="logo">
              <img src={Picture} />
            </div>
            <div className="icon flex space-x-5">
              <a href=""><img src={Bell}  /></a>
              <a href=""><img src={Mail}  /></a>
              <div className="profiles">
                <img className="rounded-full" src={People} />
              </div>
            </div>
            </div>
          </nav>
      </section>
      <section>
        <header className="bg-violet-700 w-screen">
          <div className="title p-4 mx-10 py-3">
            <p className="text-white">Top Jobs</p>
          </div>
        </header>
      </section>
      <section>
        <form className="flex w-5/6 mx-auto mt-10">
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900" placeholder="Search for any skill" />
        <button type="submit" className="text-white bg-violet-700 rounded p-3">Search</button>
        </form>
      </section>
      <section>
        <div className="dataProfile flex w-5/6 mt-10 mx-auto">
          <div className="user">
            <img className="mr-5" src={User} />
          </div>
          <div className="bio">
            <h3>Louise Tomlinson</h3>
            <p className="mb-3">Web Developer</p>
            <button className="w-24 bg-yellow-300 rounded m-1">PHP</button>
            <button className="w-24 bg-yellow-300 rounded m-1">Javascript</button>
            <button className="w-24 bg-yellow-300 rounded m-1">HTML</button>
          </div>
          <div className="nextProfile ms-auto">
            <button className="bg-violet-700 text-white rounded p-2 w-40">Lihat Profile</button>
          </div>
        </div>
        <div className="dataProfile flex w-5/6 mt-10 mx-auto">
          <div className="user">
            <img className="mr-5" src={User} />
          </div>
          <div className="bio">
            <h3>Louise Tomlinson</h3>
            <p className="mb-3">Web Developer</p>
            <button className="w-24 bg-yellow-300 rounded m-1">PHP</button>
            <button className="w-24 bg-yellow-300 rounded m-1">Javascript</button>
            <button className="w-24 bg-yellow-300 rounded m-1">HTML</button>
          </div>
          <div className="nextProfile ms-auto">
            <button className="bg-violet-700 text-white rounded p-2 w-40">Lihat Profile</button>
          </div>
        </div>
        <div className="dataProfile flex w-5/6 mt-10 mx-auto">
          <div className="user">
            <img className="mr-5" src={User} />
          </div>
          <div className="bio">
            <h3>Louise Tomlinson</h3>
            <p className="mb-3">Web Developer</p>
            <button className="w-24 bg-yellow-300 rounded m-1">PHP</button>
            <button className="w-24 bg-yellow-300 rounded m-1">Javascript</button>
            <button className="w-24 bg-yellow-300 rounded m-1">HTML</button>
          </div>
          <div className="nextProfile ms-auto">
            <button className="bg-violet-700 text-white rounded p-2 w-40">Lihat Profile</button>
          </div>
        </div>
      </section>
    </>
  );
}
