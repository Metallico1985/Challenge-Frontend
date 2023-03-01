import React from 'react'
import Form from './Components/Form/Form'
import List from './Components/List/List'
import { useState, useEffect } from 'react'

function App() {

  const activar = () => { setActivo(!activo) }
  const [flag, setFlag] = useState(null)
  const actFlag =()=>{setFlag(!flag)}
  const [activo, setActivo] = useState(true)
  const endpoint = "https://crudcrud.com/api/8b62be2331734712938eab35a1af47b7"


  useEffect(() => {
    listarClientes()
  }, [activo]);

  const agregarCliente = (nuevoCliente) => {

    fetch(`${endpoint}/clientes`, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'POST',
      body: JSON.stringify({
        nombre: nuevoCliente.nombre,
        apellido: nuevoCliente.apellido,
        rut: nuevoCliente.rut,
        telefono: nuevoCliente.telefono,
        tipo: nuevoCliente.tipo
      })

    })
      .then(response => response.json())
    activar()
  }

  const [listaClientes, setListaClientes] = useState([]);

  const listarClientes = () => {

    fetch(`${endpoint}/clientes`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setListaClientes(data)
      })
      .catch((error) => {
        alert(error);

      });

  }

  const handleDelete = (id) => {

    fetch(`${endpoint}/clientes/${id}`, {
      method: "DELETE",
    })
      .then(response => console.log(response))
      .then(() => setListaClientes(listaClientes.filter(cl => cl._id !== id)))
  }

  const [infoCliente, setInfoCliente] = useState()

  const obtenerInfoCliente = (cli) => {

    fetch(`${endpoint}/clientes/${cli._id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setInfoCliente(data);
        actFlag(true);
      })
      .catch((error) => {
        alert(error);

      });
  }
  const editarCliente = (clienteEditado, id)=>{

    fetch(`${endpoint}/clientes/${id}`, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'PUT',
      body: JSON.stringify({
        nombre: clienteEditado.nombre,
        apellido: clienteEditado.apellido,
        rut: clienteEditado.rut,
        telefono: clienteEditado.telefono,
        tipo: clienteEditado.tipo
      })

    })
      .then(response => response.json())
    actFlag(false)
  }
  
  return (
    <div className='mainApp'>
      <Form agregar={agregarCliente} infoCliente={infoCliente} handleEditar={editarCliente} flag={flag}/>
      <List lista={listaClientes} borrar={handleDelete} obtenerCliente={obtenerInfoCliente} />
    </div>
  )
}

export default App