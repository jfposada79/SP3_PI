import { titleFont } from '@/config/fonts';
import { RegisterForm } from './ui/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="flex flex-col w-full">
      <h1 className={ `${ titleFont.className } text-4xl mb-5 w-full text-center login-title` }>Crea una cuenta</h1>
      <h4 className='login-title2 w-full text-center'>Por favor, completa los campos a continuación para crear tu cuenta. Tu información será tratada con confidencialidad y seguridad.</h4>
      <div className="flex flex-col  sm:pt-5">
            <RegisterForm /> 
      </div>
    </div>
  );
}