import React from 'react'
import { useState, useEffect } from 'react'

function Form(props) {

  const [cliente, setCliente] = useState({
    _id: null,
    nombre: "",
    apellido: "",
    telefono: "",
    rut: "",
    tipo: "",
  })

  useEffect(() => {
    setCliente(props.infoCliente);
}, [props.infoCliente])

  const handleChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    setCliente({
      ...cliente,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(cliente._id) {
      props.handleEditar(cliente, cliente._id)
    } else {
      props.agregar(cliente);
    }
  }

  return (
    <div className='mainForm'>
      <div className='formContainer'>
        <h1>Ingreso Clientes</h1>
        <form onSubmit={handleSubmit} className='formIngreso'>
          <input name="nombre" value={cliente.nombre || ''} onChange={handleChange} type="text" placeholder='Nombre' required/>
          <input name="apellido" value={cliente.apellido || ''} onChange={ handleChange } type="text" placeholder='Apellido' required/>
          <input name="rut" value={cliente.rut || ''} onChange={handleChange} type="text" placeholder='Rut' required/>
          <input name="telefono" value={cliente.telefono || ''} onChange={handleChange} type="text" placeholder='Telefono' required/>
          <select name="tipo" value={cliente.tipo || ''} onChange={handleChange} >
            <option disabled selected value=''>Tipo Cliente</option>
            <option value="Consumidor final">Consumidor final</option>
            <option value="Empresa">Empresa</option>
          </select>
          {cliente._id
            ? <button type='submit' className='btnEditar'>Editar</button>
            : <button type='submit'>Registrar</button>}
        </form>
      </div>
    </div>
  )
}

export default Form