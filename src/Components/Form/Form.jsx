import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Form() {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState();
    const [rut, setRut] = useState();
    const [tipo, setTipo] = useState();


    const handleNombre = (e) => {setNombre(e.target.value)};
    const handleApellido = (e) => {setApellido(e.target.value)}
    const handleRut = (e) => {setRut(e.target.value)}
    const handleTelefono = (e) => {setTelefono(e.target.value)}
    const handleTipo = (e) => {setTipo(e.target.value)}
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://crudcrud.com/api/275d66e87ee043ada9ee7ec8692212c5/clientes', {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
            nombre: nombre.toLowerCase(),
            apellido: apellido.toLowerCase(),
            rut: rut,
            telefono: telefono,
            tipo:tipo
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
    }
    
    const navigate = useNavigate();
  return (
    <div className='mainForm'>
    <div className='formContainer'>
        <h1>Ingreso Clientes</h1>
        <form onSubmit={handleSubmit} className='formIngreso'>
        <input onChange={handleNombre} type="text" placeholder='Nombre' />
        <input onChange={handleApellido} type="text" placeholder='Apellido' />
        <input onChange={handleRut} type="text" placeholder='Rut' />
        <input onChange={handleTelefono} type="text" placeholder='Telefono' />
        <select onChange={handleTipo} name='posiciones'>
          <option disabled selected >Tipo Cliente</option>
          <option value="usuario">Usuario</option>
          <option value="empresa">Empresa</option>
        </select>
        <button type='submit'>Registrar</button>
      </form>
    </div>
    <button onClick={()=> navigate( "/listaClientes")}>Ver lista de clientes</button>
    </div>
  )
}

export default Form