import React, { useEffect } from "react";
import { Table } from "react-bootstrap";

function UsuariosPage() {

    const [listausuarios, setListaUsuarios] = useState([]);

    function cargarusuarios() {
        const options = { method: 'GET' };
        fetch('http://localhost:8080/usuarios', options)
            .then(response => response.json())
            .then(response => {
                setListaUsuarios(response);
            })
            .catch(err => console.error(err));

    }

    useEffect(()=>{
        cargarusuarios();
    },[])
    return (
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
            </tr>
        </thead>

        </Table>
    )
}
export { UsuariosPage }