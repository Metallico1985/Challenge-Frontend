import React from 'react'
import { useState } from 'react'

function Form(props) {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState();
  const [rut, setRut] = useState();
  const [tipo, setTipo] = useState();

  const cliente = {
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    rut: rut,
    tipo: tipo,
    activo: true
  }

  const handleNombre = (e) => { setNombre(e.target.value) };
  const handleApellido = (e) => { setApellido(e.target.value) }
  const handleRut = (e) => { setRut(e.target.value) }
  const handleTelefono = (e) => { setTelefono(e.target.value) }
  const handleTipo = (e) => { setTipo(e.target.value) }
  const handleSubmit = (e) => { e.preventDefault(); props.agregar(cliente); }
  const clienteEditable = props.infoCliente

  return (
    <div className='mainForm'>
      <div className='formContainer'>
        <h1>Ingreso Clientes</h1>
        <form onSubmit={handleSubmit} className='formIngreso'>
          <input defaultValue={props.infoCliente ? clienteEditable.nombre : ""} onChange={()=>handleNombre} type="text" placeholder='Nombre' required/>
          <input defaultValue={props.infoCliente ? clienteEditable.apellido : ""} onChange={handleApellido} type="text" placeholder='Apellido' required/>
          <input defaultValue={props.infoCliente ? clienteEditable.rut : ""} onChange={handleRut} type="text" placeholder='Rut' required/>
          <input defaultValue={props.infoCliente ? clienteEditable.telefono : ""} onChange={handleTelefono} type="text" placeholder='Telefono' required/>
          <select defaultValue={props.infoCliente ? clienteEditable.tipo : ""} onChange={handleTipo} name='posiciones' >
            <option disabled selected >Tipo Cliente</option>
            <option value="usuario">Usuario</option>
            <option value="empresa">Empresa</option>
          </select>
          <button type='submit'>Registrar</button>
          {props.flag?<button type='submit' className='btnEditar' onClick={()=>props.handleEditar(clienteEditable, clienteEditable._id)} >Editar</button>:<></>}
          
        </form>
      </div>
    </div>
  )
}

export default Form