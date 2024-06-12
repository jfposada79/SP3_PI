import { Inter, Montserrat_Alternates, Roboto } from 'next/font/google';




export const inter = Inter({ subsets: ['latin'] });


export const titleFont = Montserrat_Alternates({ 
  subsets: ['latin'],
  weight: ['500', '700'],
});

export const titleFontRoboto = Roboto({ 
  subsets: ['latin'],
  weight: ['500', '700'],
});

export const titleFontLight = Montserrat_Alternates({ 
  subsets: ['latin'],
  weight: ['200', '300'],
});