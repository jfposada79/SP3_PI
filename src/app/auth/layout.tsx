import { auth } from '@/auth.config';
import { redirect } from 'next/navigation';
import { Footer } from '../../components/ui/footer/Footer';
import { NavBar, NavBarShow, TopMenu } from '../../components/ui/top-menu/TopMenu';

interface NavBarProps {
  totalItemsInCart: number;
  loaded: boolean;
  openSideMenu: () => void;
  showSearchBar?: boolean;
}

export default async function ShopLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (session?.user) {
    redirect('/');
  }

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <header>
        {/* {<Header></Header>} */}

        {/* <NavBar /> */}
        <NavBarShow />
      </header>
      {/* Aquí va tu header */}
      <main className="flex justify-center flex-grow">
        <div className="w-full   px-10">{children}</div>
      </main>
      <footer>{<Footer />}</footer>
    </div>
  );
}
