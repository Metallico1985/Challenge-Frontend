import React, { useState } from 'react'
import { useEffect } from 'react';
import './List.css'

function List() {

    const [listaClientes, setListaClientes] = useState([]);

    useEffect(() => {
        fetch('https://crudcrud.com/api/275d66e87ee043ada9ee7ec8692212c5/clientes', {
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
    }, [])

    return (
        <div className='mainList'>
            <h3>Lista de clientes</h3>
            <div>
                {listaClientes?.map((item) => (
                    <div className='mainLista'>
                    <div className='lista'>
                        <div className='celda nombre'>{item.nombre}</div>
                        <div className='celda apellido'>{item.apellido}</div>
                        <div className='celda rut'>{item.rut}</div>
                        <div className='celda tipo'>{item.tipo}</div>
                        <button>Select</button>
                        <button>Borrar</button>
                    </div>
                    </div>
                )

                )}
            </div>

        </div>
    )
}

export default List