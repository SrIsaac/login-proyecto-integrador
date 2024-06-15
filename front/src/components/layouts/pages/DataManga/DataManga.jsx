import { useState, useEffect } from "react";
import { Link, useParams,useNavigate } from "react-router-dom"
import axios from "axios";
import Swal from "sweetalert2";
import "./DataManga.css"
const urlMangas = 'http://localhost:3000/mangas/';


function DataManga() {
    const [imagen, setImagen] = useState("");
    const [titulo, setTitulo] = useState("");
    const [fecha, setFecha] = useState("");
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [dataId, setDataId] = useState("");

    let { id } = useParams();

    async function usuarioID() {
        let mangaEditar = await axios.get(urlMangas + id)
        setDataId(mangaEditar.data.id)
        setImagen(mangaEditar.data.image)
        setTitulo(mangaEditar.data.title)
        setFecha(mangaEditar.data.year)
        setPrecio(mangaEditar.data.price)
        setDescripcion(mangaEditar.data.description)
    }

    useEffect(() => {
        usuarioID()
    }, [])


    const redireccion = useNavigate();


    function eliminarManga(id, titulo) {
        console.log("EL ID:" + id)
        Swal.fire({
            title: "Está seguro que desea eliminar el managa " + titulo + " ?",
            text: "No se puede reversar esta acción!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminar",
        }).then((result) => {
            if (result.isConfirmed) {
                confirmar(id);
                Swal.fire({
                    title: "Eliminado!",
                    text: "El manga se eliminó correctamente.",
                    icon: "success",
                });
                redireccion("/home")
            }
        });
    }
    async function confirmar(id) {
        await axios.delete(urlMangas + id)

    }

    return (
        <div className="contenedor">

            <div className="contenedor-datos">
                <div className="caja">

                    <img className="imagen" src={imagen} alt="" />
                    <h3 className="titulo">{titulo}</h3>
                    <span className="fecha">{fecha}</span>
                    <span className="fecha">{`$ ${precio}`}</span>
                    <p className="fecha">{descripcion}</p>
                    <div className='contenedor-btn'>
                        <center><button className="button" onClick={() => eliminarManga(dataId, titulo)} >Borrar</button></center>
                        <center><Link to={"/actualizar/" + dataId} className='Link'>Actualizar</Link></center>

                    </div>
                    <center><Link to={"/home"} className='Link'>Regresar</Link></center>
                </div>

            </div>
        </div>
    )
}
export default DataManga