import React, { Component } from "react";
import '../recursos/CSS/form.css';
import '../recursos/CSS/button.css';


export default class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: ""
        }
    }

    LimpiarFormulario = () => {
        this.setState(
            {
                first_name: "",
                last_name: "",
                email: ""
            }
        );
    }

    AsignarValores = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    InsertarValores=(event)=>{
        event.preventDefault();

        this.LimpiarFormulario();
    }

    render() {
        return (
            <form onSubmit={this.InsertarValores}>
                <input
                    id="first_name"
                    type="text"
                    name="first_name"
                    required={true}
                    placeholder="Nombre"
                    value={this.state.first_name}
                    onChange={this.AsignarValores}
                />
                <input
                    id="last_name"
                    type="text"
                    name="last_name"
                    required={true}
                    placeholder="Apellido"
                    value={this.state.last_name}
                    onChange={this.AsignarValores}
                />
                <input
                    id="email"
                    type="email"
                    name="email"
                    required={true}
                    placeholder="Nombre"
                    value={this.state.email}
                    onChange={this.AsignarValores}
                />

                <div>
                    <button className="success" type="submit">Agregar Usuario</button>
                    <button className="warning" type="reset">Limpiar Fromulario</button>

                </div>
            </form>
        );
    }

}