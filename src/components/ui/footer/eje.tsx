"use client";

import { useEffect } from 'react';
import Link from "next/link";
import { useForm } from "react-hook-form";
import { authenticate } from "@/actions";
import { IoInformationOutline } from "react-icons/io5";
import clsx from 'clsx';

type FormInputs = {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm<FormInputs>();
  const onSubmit = async (data: FormInputs) => {
    // Aquí va la lógica de autenticación
    console.log(data);
  }

  useEffect(() => {
    // Aquí va la lógica de redirección
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <label htmlFor="email">Correo electrónico <span className='login-input'>*</span></label>
      <input
        className={clsx("px-5 py-2 border login-border-input rounded mb-5", {'border-red-500': errors.email})}
        type="email"
        placeholder='Correo Electronico'
        {...register('email', { required: 'El correo electrónico es obligatorio', pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <label htmlFor="password">Contraseña <span className='login-input'>*</span></label>
      <input
        className={clsx("px-5 py-2 border login-border-input rounded mb-5", {'border-red-500': errors.password})}
        type="password"
        placeholder='Contrasenia'
        {...register('password', { required: 'La contraseña es obligatoria' })}
      />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}

      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {errors.email || errors.password ? (
          <div className="flex flex-row mb-2">
            <IoInformationOutline className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">
              Credenciales no son correctas
            </p>
          </div>
        ) : null}
      </div>

      <LoginButton pending={isSubmitting} />

      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/new-account" className="btn-secondary text-center">
        Crear una nueva cuenta
      </Link>
    </form>
  );
};

function LoginButton({ pending }: { pending: boolean }) {
  return (
    <button 
      type="submit" 
      style={{ width: '100px' }}
      className={ clsx({
        "btn-orange": !pending,
        "btn-orange-light": pending
      })}
      disabled={ pending }
      >
      Ingresar
    </button>
  );
}