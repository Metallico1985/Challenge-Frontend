import React from 'react'
import Form from './Components/Form/Form'
import List from './Components/List/List'
import { useState, useEffect } from 'react'

function App() {

  const activar = () => { setActivo(!activo) }
  const [activo, setActivo] = useState(true)
  const endpoint = "https://crudcrud.com/api/2680ff2ebdbf46e09f1677a45fdaefc5"


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
        setInfoCliente(data)
      })
      .catch((error) => {
        alert(error);

      });
  }
  return (
    <div className='mainApp'>
      <Form agregar={agregarCliente} infoForm={infoCliente} />
      <List lista={listaClientes} borrar={handleDelete} obtenerCliente={obtenerInfoCliente} />
    </div>
  )
}

export default App