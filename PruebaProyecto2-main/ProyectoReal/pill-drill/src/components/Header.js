import style from '../Styles/Header.module.css';
import Link from 'next/link';
import Image from 'next/image'
const Header = () => {
  return (
    <header className={style.header}>
       <div className="contenedor">
       <div className={style.barra}>
        <Link href="/">
          <Image width={200} height={200} src="/Image/LOGO.jpg" alt="Imagen Logo" />
        </Link>
         <nav className={style.navegacion}>
            <Link href="/index"> HomePage </Link>
            <Link href="/Registrarse"> Registrarse </Link>
            <Link href="/InicioSesion"> Inicio de sesion </Link>
            <Link href="/pastilla1"> Pastillas </Link>
         </nav>
         </div>
       </div> 
    </header>
  )
}

export default Header
