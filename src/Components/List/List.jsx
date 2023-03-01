import React from 'react'
import './List.css'

function List(props) {

    return (
        <div className='mainLista'>
            <h3>Lista de clientes</h3>
            <div className='encabezados'>
                <div className='encabezado nombres'>Nombre</div>
                <div className='encabezado apellidos'>Apellido</div>
                <div className='encabezado apellidos'>Telefono</div>
                <div className='encabezado ruts'>Rut</div>
                <div className='encabezado tipos'>Tipo</div>
            </div>
            <div>
                {props.lista?.map((item) => (
                    <div className='lista'>
                        <div className='celda nombre'>{item.nombre}</div>
                        <div className='celda apellido'>{item.apellido}</div>
                        <div className='celda telefono'>{item.telefono}</div>
                        <div className='celda rut'>{item._id}</div>
                        <div className='celda tipo'>{item.tipo}</div>
                        <button onClick={() => props.obtenerCliente(item)}>Select</button>
                        <button onClick={() => props.borrar(item._id)}>Borrar</button>
                    </div>
                )
                )}
            </div>

        </div>
    )
}

export default List