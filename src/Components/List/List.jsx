import React, { useState } from 'react'
import { useEffect } from 'react';

function List() {

    const [listaClientes, setListaClientes] = useState([]);

    useEffect(() => {
        fetch('https://crudcrud.com/api/ae948cab3eb04c1c8fb9971e0a20eabd/clientes', {
            // method: "GET",
            // headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then(data => console.log(data))
            .then((data) => {
                setListaClientes(data);
            })
            .catch((error) => {
                alert(error);
            });
    }, [])

    return (
        <div className='mainList'>
            <h3>Lista de clientes</h3>
            <div>
                {listaClientes.map((item) =>
                    <>
                        <div>{item._id}</div>
                        <div>{item.nombre}</div>
                        <div>{item.apellido}</div>
                    </>
                )}
            </div>

        </div>
    )
}

export default List