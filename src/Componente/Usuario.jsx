import React, { Component } from "react";


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
            <div>
                <div>
                    <h3>Parte Frontal</h3>
                    <img src="" />
                </div>

                <div>
                    <h3>Parte Trasera</h3>
                    <button>Mostrar Nombre</button>
                </div>
            </div>);
    }

}

export default Usuario;