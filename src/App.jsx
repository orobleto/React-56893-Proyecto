import React, { Component } from "react";
import Usuario from "./Componente/Usuario";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Usuario
                    id="1"
                    firs_name="Octavio"
                    last_name="Robleto"
                    email="octavio.robleto@gmail.com"
                />
            </div>);
    }

}

export default App;