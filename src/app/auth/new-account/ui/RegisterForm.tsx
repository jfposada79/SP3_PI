"use client";
import  {Footer} from '../../../../components/ui/footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import clsx from 'clsx';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid'; // Asegúrate de tener instalado @heroicons/react


import { login, registerUser } from '@/actions';
import { useState } from 'react';

type FormInputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string; 
}
type RegisterButtonProps = {
  pending: boolean;
};



function RegisterButton({ pending }: RegisterButtonProps) {
  return (
    <div className="flex justify-center">
      <button 
        type="submit" 
        className={ clsx("w-full sm:w-auto flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white",{
          "bg-orange-600 hover:bg-orange-700": !pending,
          "bg-orange-300": pending
        })}
        disabled={ pending }
        >
        Crear cuenta
      </button>
    </div>
  );
}

export const RegisterForm = () => {

  const [errorMessage, setErrorMessage] = useState('')
  const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async(data) => {
   
    try {
    setErrorMessage('');
    const { name, email, password, confirmPassword } = data;
    
    if (password !== confirmPassword) {
      toast.error('Las contraseñas no coinciden');
      
      

      return;
    }

    // Server action
    const resp = await registerUser( name, email, password );
    console.log(resp);
    if ( !resp.ok ) {
      setErrorMessage( resp.message );
      toast.error(resp.message); 
      return;
    }

    await login( email.toLowerCase(), password );
    window.location.replace('/');

  } catch (error) {
    setErrorMessage('Hubo un error al conectar con el servidor');
    toast.error('Hubo un error al conectar con el servidor');
  }
  }

  return (
    <form onSubmit={ handleSubmit( onSubmit ) }  className="flex flex-col mb-10">
      <label htmlFor="name" className="custom-color">Nombre completo</label>
      <input
       id="name"
       placeholder="Ingresa tu nombre"
        className={
          clsx(
            "px-5 py-2 border login-border-input rounded mb-5",
            {
              'border-red-500': errors.name
            }
          )
        }
        type="text"
        { ...register('name', { 
          required: 'El nombre es obligatorio', 
          validate: value => value.trim() === value || 'El nombre no debe comenzar con espacios en blanco' 
        }) }
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <label htmlFor="email">Correo electrónico*</label>
      <input
      id="email"
      placeholder="Tu correo electronico "
        className={
          clsx(
            "px-5 py-2 border login-border-input rounded mb-5",
            {
              'border-red-500': errors.email
            }
          )
        }
        type="email"
        { ...register('email', { required: 'El correo electrónico es obligatorio', pattern: /^\S+@\S+$/i }) }
        
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <label htmlFor="password">Contraseña *</label>
      <input
      
      id="password"
      placeholder='Tu contraseña'
        className={
          clsx(
            "px-5 py-2 border login-border-input rounded mb-5",
            {
              'border-red-500': errors.password
            }
          )
        }
        { ...register('password', { required: 'La contraseña es obligatoria' }) }
      />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}

      <label htmlFor="confirmPassword">Confirmar contraseña *</label>
      <input
      id="confirmPassword"
      placeholder='Confirma tu contraseña'
        className={
          clsx(
            "px-5 py-2 border login-border-input rounded mb-5",
            {
              'border-red-500': errors.confirmPassword
            }
          )
        }
        type="password"
        { ...register('confirmPassword', { required: 'La confirmación de la contraseña es obligatoria' }) }
      />
      {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
      
      <span className="text-red-500">{ errorMessage } </span>

      <RegisterButton pending={isSubmitting} />
    </form>
   
  );
  
};