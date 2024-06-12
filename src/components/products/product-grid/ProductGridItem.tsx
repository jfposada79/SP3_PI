"use client";

import Image from "next/image";
import Link from "next/link";

import { Product } from "@/interfaces";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoHeartOutline, IoHeart } from 'react-icons/io5';
interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);

  // return (
  //   <div className="rounded-md overflow-hidden fade-in max-w-xs mx-auto">
  //     <Link href={`/product/${product.slug}`}>
  //       <Image
  //         src={`/products/${displayImage}`}
  //         alt={product.title}
  //         className="w-full object-cover rounded h-full "
  //         width={350}
  //         height={350}
  //         onMouseEnter={() => setDisplayImage(product.images[1])}
  //         onMouseLeave={() => setDisplayImage(product.images[0])}
  //       />
  //     </Link>

  //     <div className="p-4 flex flex-col">
  //       <Link className="hover:text-blue-600" href={`/product/${product.slug}`}>
  //         {product.title}
  //       </Link>
  //       <span className="font-bold">${product.price}</span>
  //     </div>
  //   </div>
  // );
  return (

    <div className="w-64 h-70 border rounded-md  container bg-white shadow-md rounded-lg" >
      <div className="flex justify-end mr-2 mt-3 text-right" >
      <IoHeartOutline className="text-gray-500 w-6 h-6"  />
      {/* <IoHeart className="text-yellow-500 w-6 h-6" /> */}
      </div>

      <div className="flex justify-center mt-2" >
        <img
          src={`/products/${displayImage}`}
          alt={product.title}
          // width="200"
          // height="250"
           className="object-cover h-40 w-90"
          // className="h-40 w-50 object-contain"
          onMouseEnter={() => setDisplayImage(product.images[1])}
          onMouseLeave={() => setDisplayImage(product.images[0])}
        />
      </div>

      <div className="p-4 flex flex-col justify-space-around" >
        <div className="text-center">
          <span className="text-xl  text-center text-red-500 line-through mr-2">Antes: ${product.price}</span>
        </div>
        <div className="text-center">
          <span className="text-xl  text-center login-title line-through mr-2">Ahora x : ${product.price}</span>
        </div>

        <div>
            <h6 className="text-center text-sm text-black-500 font-bold tracking-widest mb-2">
              <Link href={`/product/${product.slug}`} className="hover:text-blue-600">
              {product.title}</Link>
            </h6> 
        </div>
 
        <div>
          <a href={`/product/${product.slug}`} className="text-center  btn-orange hover:bg-btn-orange-light-400 text-white px-4 py-2 inline-block mt-4 rounded">
          ¡Lo quiero!
          </a>
        </div>
      </div>
  </div>
  );

};