import Link from 'next/link';
import Image from "next/image";
import logo from "../../assets/logo.png"

const Header = () => {
    const navLinkStyle = ' border-2 border-transparent hover:border-b-slate-200'
  return (
    <header className=' fixed p-4 bg-slate-800 text-white w-full'>
      <nav className=' flex justify-between items-center px-4'>
        <Link href="/" className=''>
            <Image src={logo} alt='Mater Dei' width={50}/>
        </Link>
        <ul className=' flex justify-center gap-4 items-center w-full'>
          <li className={navLinkStyle}>
            <Link href="/">Home</Link>
          </li>
          <li className={navLinkStyle}>
            <Link href="/about">About</Link>
          </li>
          <li className={navLinkStyle}>
            <Link href="/admissions">Admissions</Link>
          </li>
        </ul>
        <Link href="/" className=' p-2 hover:bg-red-500 hover:text-white'>
            <p className=' w-max'>Log Out</p>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
