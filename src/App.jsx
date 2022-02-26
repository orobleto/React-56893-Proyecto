import React, { Component } from "react";
import Formulario from "./Componente/Formulario";
import Usuario from "./Componente/Usuario";
import avatarPNG from './recursos/Imagenes/avatar.png';
import { BrowserRouter, Routes, Route, Link,NavLink } from "react-router-dom";
import './recursos/CSS/menu.css';
import Error from "./Componente/Error";
import Tabla from './Componente/Tabla';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: []
        }
    }

    componentDidMount() {
        this.buscarUsuarios();
    }


    buscarUsuarios = () => {
        fetch('https://reqres.in/api/users').
            then((response) => response.json()).
            then((json) => {
                this.setState({ usuarios: json.data })
            }).
            catch((e) => alert('Error al cargar los Usuarios')).
            finally((e) => console.log("Finalizo obtener los usuarios"));
    }


    // uplifting 
    agregarUsuario = (nombre, apellido, correo) => {
        const usuario = {
            first_name: nombre,
            last_name: apellido,
            email: correo,
            avatar: avatarPNG
        }

        const URL = "https://reqres.in/api/users";
        const HEADER = {
            method: "POST",
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(URL, HEADER).
            then((response) => response.json()).
            then((json) => this.setState({ usuarios: [...this.state.usuarios, json] })).
            catch((e) => alert('Error al cargar los Usuarios')).
            finally((e) => console.log("Finalizo obtener los usuarios"));
    }

    renderUsuarios = () => {
        return (
            this.state.usuarios.map((e) =>
            (
                <Usuario
                    key={e.id}
                    id={e.id}
                    first_name={e.first_name}
                    last_name={e.last_name}
                    email={e.email}
                    avatar={e.avatar}
                />
            ))
        );
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <nav  className="menu">

                        <NavLink className="enlace" activeClassName to="/" >Formulario</NavLink>
                        <NavLink className="enlace" activeClassName to="/usuarios"  >Usuarios</NavLink>
                        <NavLink className="enlace" activeClassName to="/comentarios"  >Comentarios Usuarios</NavLink>
                    </nav>

                    <Routes>

                        <Route index element={
                            <Formulario funcionAgregar={this.agregarUsuario} />
                        } />

                        <Route path="/usuarios" element={this.renderUsuarios()} />
                        <Route path="/comentarios" element={<Tabla/>}/>
                        <Route path="*" element={<Error/> }  />
                    </Routes>
                </BrowserRouter>

            </div>);
    }

}

export default App;