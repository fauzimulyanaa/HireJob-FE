/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import User from "../../assets/img/tomson.svg"
import User2 from "../../assets/img/Profile2.svg"
import User3 from "../../assets/img/profile3.svg"
import User4 from "../../assets/img/profile4.svg"

export default function PageHome() {
  return (
    <>

      {/* form pencarian */}

      <section>
        <div className="container mx-auto bg-white w-5/6">
        <form className="flex w-5/6 mx-auto mt-10">
        <input type="search" id="default-search" className="block w-full p-4 text-sm text-gray-900 outline-none" placeholder="Search for any skill" />
        <button type="submit" className="text-gray rounded">Sort</button>
        <button type="submit" className="text-white bg-violet-700 rounded p-2 my-3">Search</button>
        </form>

        </div>
      </section>

      {/* card profiles */}

      <section>
        <div className="dataProfile flex w-5/6 mt-10 mx-auto bg-white p-5 mb-10">
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
          <div className="nextProfile ms-auto my-auto">
            <button className="bg-violet-700 text-white rounded p-2 w-40">
              <Link to={'/worker-profile'}>Lihat Profile</Link>
            </button>
          </div>
        </div>
        <div className="dataProfile flex w-5/6 mt-10 mx-auto bg-white p-5 mb-10">
          <div className="user">
            <img className="mr-5" src={User2} />
          </div>
          <div className="bio">
            <h3>Louise Tomlinson</h3>
            <p className="mb-3">Web Developer</p>
            <button className="w-24 bg-yellow-300 rounded m-1">PHP</button>
            <button className="w-24 bg-yellow-300 rounded m-1">Javascript</button>
            <button className="w-24 bg-yellow-300 rounded m-1">HTML</button>
          </div>
          <div className="nextProfile ms-auto my-auto">
            <button className="bg-violet-700 text-white rounded p-2 w-40">
            <Link to={'/worker-profile'}>Lihat Profile</Link>
            </button>
          </div>
        </div>
        <div className="dataProfile flex w-5/6 mt-10 mx-auto bg-white p-5 mb-10">
          <div className="user">
            <img className="mr-5" src={User3} />
          </div>
          <div className="bio">
            <h3>Harry styles</h3>
            <p className="mb-3">Web Developer</p>
            <button className="w-24 bg-yellow-300 rounded m-1">PHP</button>
            <button className="w-24 bg-yellow-300 rounded m-1">Javascript</button>
            <button className="w-24 bg-yellow-300 rounded m-1">HTML</button>
          </div>
          <div className="nextProfile ms-auto my-auto">
            <button className="bg-violet-700 text-white rounded p-2 w-40">
            <Link to={'/worker-profile'}>Lihat Profile</Link>
            </button>
          </div>
        </div>
        <div className="dataProfile flex w-5/6 mt-10 mx-auto bg-white p-5 mb-10">
          <div className="user">
            <img className="mr-5" src={User4} />
          </div>
          <div className="bio">
            <h3>Louise Tomlinson</h3>
            <p className="mb-3">Web Developer</p>
            <button className="w-24 bg-yellow-300 rounded m-1">PHP</button>
            <button className="w-24 bg-yellow-300 rounded m-1">Javascript</button>
            <button className="w-24 bg-yellow-300 rounded m-1">HTML</button>
          </div>
          <div className="nextProfile ms-auto my-auto">
            <button className="bg-violet-700 text-white rounded p-2 w-40">
            <Link to={'/worker-profile'}>Lihat Profile</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
