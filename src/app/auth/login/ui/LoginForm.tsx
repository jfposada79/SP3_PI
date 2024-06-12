"use client";

import { useEffect } from 'react';
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";

import { authenticate } from "@/actions";
import { ToastContainer, toast } from 'react-toastify';
import { IoInformationOutline } from "react-icons/io5";
import clsx from 'clsx';
// import { useRouter } from 'next/navigation';

export const LoginForm = () => {


  // const router = useRouter();
  const [state, dispatch] = useFormState(authenticate, undefined);
  
  console.log(state);

  useEffect(() => {
    if ( state === 'Success' ) {
      // redireccionar
      // router.replace('/');
      window.location.replace('/');
    }

  },[state]);


  return (
    <form action={dispatch} className="flex flex-col">
      <label htmlFor="email">Correo electrónico <span className='login-input'>*</span></label>
      <input
        className="px-5 py-2 border login-border-input rounded mb-5"
        type="email"
        name="email"
        placeholder='Correo Electronico'
      />

      <label htmlFor="email">Contraseña <span className='login-input'>*</span></label>
      <input
        className="px-5 py-2 border login-border-input rounded mb-5"
        type="password"
        name="password"
        placeholder='Contrasenia'

      />

      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {state === "CredentialsSignin" && (
          <div className="flex flex-row mb-2">
            <IoInformationOutline className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">
              Credenciales no son correctas
            </p>
          </div>
        )}
      </div>

        <LoginButton />
      {/* <button type="submit" className="btn-primary">
        Ingresar
      </button> */}

      {/* divisor l ine */}
     

      <Link href="/auth/new-account" className="text-orange-500 text-center mt-4 p-10">
  Crear una nueva cuenta
</Link>
    </form>
  );
};

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button 
    type="submit" 
    style={{ width: '25%' }}
    className={ clsx({
      "btn-orange": !pending,
      "btn-orange-light": pending
    })}
    disabled={ pending }
    >
    Acceso
  </button>
  );
}