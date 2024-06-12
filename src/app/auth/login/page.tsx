
import { titleFont } from '@/config/fonts';
import { titleFontLight } from '@/config/fonts';

import { LoginForm } from './ui/LoginForm';

export default function LoginPage() {
  return (
    <div className="flex flex-col w-full">
      <h1 className={ `${ titleFont.className } text-4xl mb-5 w-full text-center login-title` }>Iniciar sesión</h1>
      <h4 className='login-title2 w-full text-center'>Bienvenido de nuevo! Ingrese sus credenciales para acceder a su cuenta.</h4>
      <h4 className='login-title2 text-center'>Nos alegra tenerlo de vuelta.</h4>
      <div className="flex flex-col  sm:pt-5">
            <LoginForm />
      </div>
    </div>
  );
}