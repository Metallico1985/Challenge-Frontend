import React from 'react'
import Form from './Components/Form/Form'
import List from './Components/List/List'
import { useState, useEffect } from 'react'

function App() {

  const enviarAlForm =(cli)=>{setCliente(cli)}
  const [flag, setFlag] = useState(null);
  const activar = () => {setFlag(!flag)}
  const [cliente, setCliente] = useState()

  const agregarCliente = (nuevoCliente) => {

    fetch('https://crudcrud.com/api/e88155fccea248ee99db283446eea593/clientes', {
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
    fetch('https://crudcrud.com/api/e88155fccea248ee99db283446eea593/clientes', {
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
   
    fetch(`https://crudcrud.com/api/e88155fccea248ee99db283446eea593/clientes/${id}`, {
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