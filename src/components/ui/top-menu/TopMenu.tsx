'use client';
import { useEffect, useState } from 'react';

import Link from 'next/link';
import {
  IoSearchOutline,
  IoCartOutline,
  IoMenuOutline,
  IoLogInOutline,
  IoPersonAddOutline,
} from 'react-icons/io5';
import HeaderImage from '../header/HeaderImage';
import { titleFont, titleFontRoboto } from '@/config/fonts';
import { useCartStore, useUIStore } from '@/store';
import Image from 'next/image';

export const Logo = () => (
  <div>
    <Link href="/">
      <Image src="/imgs/tomatto.png" alt="Tomatto" className=" sm:p-0" width={150} height={150} />
    </Link>
  </div>
);

export const SearchBar = () => (
  <div className="relative flex items-center">
    <input
      className="bg-slate-50 hover:bg-red-200 text-sm rounded h-10 w-80 pl-10"
      placeholder="Busca tu producto..."
    />
    <Link href="/search" className="absolute left-3">
      <IoSearchOutline className="w-5 h-5 text-gray-500" />
    </Link>
  </div>
);

interface NavBarProps {
  totalItemsInCart: number;
  loaded: boolean;
  openSideMenu: () => void;
  showSearchBar?: boolean;
}

export const NavBar: React.FC<NavBarProps> = ({
  totalItemsInCart,
  loaded,
  openSideMenu,
  showSearchBar = true,
}) => (
  <nav className="flex px-5 justify-between items-center w-full bg-customRed">
    {/* Logo */}
    <div>
      <Logo />
    </div>

    <div className="relative flex items-center">
      {/* Search */}
      <SearchBar />
    </div>

    {/* Search, Cart, Menu */}
    <div className="flex items-center">
      <Link href="auth/login" className="mx-2">
        <IoPersonAddOutline className="text-white w-8 h-8" />
      </Link>

      <Link href={totalItemsInCart === 0 && loaded ? '/empty' : '/cart'} className="mx-2">
        <div className="relative">
          {loaded && totalItemsInCart > 0 && (
            <span className="fade-in absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
              {totalItemsInCart}
            </span>
          )}
          <IoCartOutline className="text-white w-8 h-8" />
        </div>
      </Link>

      <button
        onClick={openSideMenu}
        className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
      >
        <IoMenuOutline className="text-white w-8 h-8" />
      </button>
    </div>
  </nav>
);

export const NavBarShow = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return <NavBar totalItemsInCart={totalItemsInCart} loaded={loaded} openSideMenu={openSideMenu} />;
};

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div>
      <NavBar totalItemsInCart={totalItemsInCart} loaded={loaded} openSideMenu={openSideMenu} />
      <div className="flex w-full flex-col">
        <div className="flex px-5 justify-center items-center w-full ">
          <HeaderImage />
        </div>

        <div className="flex w-full flex-col mt-5">
          <h1
            className={` ${titleFontRoboto.className} antialiased text-xl text-center text-customBlue`}
          >
            Único como tú: Productos Artísticos para Destacar
          </h1>
          <span className="text-center">
            Lleva el arte contigo: encuentra miles de productos en
            <span className="font-bold">Tomatto</span>
          </span>
        </div>

        {/* Center Menu */}
        <div className="flex px-5 justify-center items-center w-full mt-6 mb-6">
          <div>
            <button
              type="submit"
              style={{ width: '100px' }}
              className="m-2 p-2 rounded-md shadow-md shadow-grey transition-all hover:bg-gray-100 bg-white"
            >
              <Link className="block text-center" href="/gender/bags">
                Bolsos
              </Link>
            </button>
            <button className="m-2 p-2 rounded-md shadow-md shadow-grey transition-all hover:bg-gray-100 bg-white">
              <Link href="/gender/pottery" className="block text-center">
                Cerámicas
              </Link>
            </button>

            <button className="m-2 p-2 rounded-md shadow-md shadow-grey transition-all hover:bg-gray-100 bg-white">
              <Link href="/gender/jackets" className="block text-center">
                Chaquetas
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
