import React from 'react'
import Form from './Components/Form/Form'
import List from './Components/List/List'
import { useState, useEffect } from 'react'

function App() {

  const enviarAlForm =(cli)=>{setCliente(cli)}
  const [flag, setFlag] = useState(null);
  const activar = () => {setFlag(!flag)}
  const [cliente, setCliente] = useState()
  const endpoint = "https://crudcrud.com/api/cbce1d35babd466593f7f036988a1064"

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
      .then(data => console.log(data))

  }

  const [listaClientes, setListaClientes] = useState([]);

  useEffect(() => {
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
  }, [flag])

  const handleDelete = (id) => {
   
    fetch(`${endpoint}/clientes/${id}`, {
      method: "DELETE",
    })
      .then(response => console.log(response))
      .then(setFlag(!flag))
  }
 
  return (
    <div className='mainApp'>
      <Form agregar={agregarCliente} act={activar} infoForm={cliente}/>
      <List lista={listaClientes} borrar={handleDelete} enviarItem={enviarAlForm}/>
    </div>
  )
}

export default App