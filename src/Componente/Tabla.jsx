import React from "react";
import '../recursos/CSS/alerta.css';
import DataTable from 'react-data-table-component'

const columnas = [
    {
        name: "Album",
        selector: "albumId",
        sortable: true
    },
    {
        name: "ID",
        selector: "id",
        sortable: true
    },
    {
        name: "Titulo del Albun",
        selector: "title",
        grow: 4,
        sortable: true
    },
    {
        name: "URL del Albun",
        selector: "url",
        grow: 4,
        sortable: true,
        cell: (e) => (
            <a href={e.url} target="_blank"  >Ir al album...</a>
        )
    }
]


class Tabla extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            album: [],
            albumTemp: [],
            filtro: ""
        }
    }

    componentDidMount() {
        this.buscarAlbum();

    }

    buscarAlbum = () => {
        const URL = "https://jsonplaceholder.typicode.com/photos";
        fetch(URL).
            then((response) => response.json()).
            then((json) => this.setState({ album: json, albumTemp: json })).
            catch((e) => alert('Error al cargar los Comentarios')).
            finally((e) => console.log("Finalizo obtener los comentarios"));
    }

    filtrarDatos = async (event) => {
       await this.setState({
            filtro: event.target.value
        });
        this.filtrarAlbum();
    }

    filtrarAlbum = () => {
        this.setState({ albumTemp: this.state.album.filter(
            (e) => e.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.filtro.toLowerCase())|| e.id.toString().includes(this.state.filtro) 
            ) });
    }


    render() {
        return (<>

            <div>
                <input
                    type="text"
                    placeholder="Filtrar"
                    name="filtro"
                    value={this.state.filtro}
                    onChange={this.filtrarDatos}
                />

            </div>

            <DataTable
                columns={columnas}
                data={this.state.albumTemp}
                pagination
                paginationComponentOptions={
                    {
                        rowsPerPageText: "Filas por Pagina",
                        selectAllRowsItem: true,
                        selectAllRowsItemText: "Todos",
                        rangeSeparatorText: "de"

                    }
                }
                noDataComponent={
                    <>
                        <div class="alert">
                            <span class="closebtn" onclick="this.parentElement.style.display='none';">×</span>
                            <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
                        </div>

                    </>
                }
            />
        </>);
    }
}

export default Tabla;