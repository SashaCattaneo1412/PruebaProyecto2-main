 import React from 'react'
import Layout from '../components/Layout'
 import Link from 'next/link';


 const Registrarse = () => {
   return (
        <main className="container">
        <form>
          <h1 className="title">INGRESE DATOS</h1>

          <div className="form-floating">
          <label htmlFor="floatingName">NOMBRE </label>
          <input type="name" className="form-control" id="floatingName" placeholder="nombre" />
          </div>

            <div className="form-floating">
            <label htmlFor="floatingApellido">APELLIDO </label>
            <input type="Apellido" className="form-control" id="floatingApellido" placeholder="Apelido" />
            </div>

            <div className="form-floating">
            <label htmlFor="floatingPassword">MAIL </label>
            <input type="email" className="form-control" id="floatingInput" placeholder="nombre@ejemplo.com" />
          </div>
           
           <div className="form-floating">
            <label htmlFor="floatingEdad">EDAD </label>
            <input type="edad" className="form-control" id="floatingEdad" placeholder="edad" />
           </div>

           <div className="form-floating">
            <label htmlFor="floatingUsuario">Nombre de Usuario </label>
            <input type="user" className="form-control" id="floatingUsuario" placeholder="nombre de usuario" />
           </div>


          <div>
            <label>
              <input type="checkbox" value="remember-me" /> RECORDAR
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">REGISTARSE</button>
        </form>
      </main>
   )
 }
 
 export default Registrarse
 