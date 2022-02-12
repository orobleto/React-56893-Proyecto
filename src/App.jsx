import React, { Component } from "react";
import Usuario from "./Componente/Usuario";

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


    render() {
        return (
            <div>
                {
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

                }


            </div>);
    }

}

export default App;