import React, { Component } from "react";
import '../recursos/CSS/tarjeta.css';
import '../recursos/CSS/boton.css';


class Usuario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            email: this.props.email,
            first_name: this.props.first_name,
            last_name: this.props.last_name,
            avatar: this.props.avatar,
            mostrarNombre: true
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-side front" >
                    <h3>{this.state.email}</h3>
                    <img className="card-image" src={this.state.avatar} />
                </div>
                <div className="card-side back" >
                    <h3>{this.state.mostrarNombre ? this.state.first_name : this.state.last_name}</h3>
                    <br/><br/><br/>
                    <button className="button-swing"
                        onClick={() => this.setState({ mostrarNombre: !this.state.mostrarNombre })}
                    >Mostrar {this.state.mostrarNombre ? "Apellido" : "Nombre"}</button>
                </div>
            </div>);
    }

}

export default Usuario;