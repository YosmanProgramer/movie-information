import React from 'react';
import { BsSearch } from 'react-icons/bs';

export default function Header() {
  return (
    <header className="bg-blue py-6 lg:py-8">
      <div className="mx-auto w-11/12 flex justify-between items-center">
        <span className="text-white uppercase text-xl text-2xl lg:text-3xl font-bold font-oswald">
          Movie <span className="font-extralight">Information</span>
        </span>
        <form className="flex items-center relative">
          <input
            className="bg-transparent border-blue-dark border-2 py-2 px-4 focus:outline-none rounded-xl text-white font-bold focus:bg-blue-dark transition duration-300"
            type="text"
            placeholder="Search"
            required
          ></input>
          <button className="absolute right-4">
            <BsSearch className="text-white text-lg" />
          </button>
        </form>
      </div>
    </header>
  );
}
