import React, { useState, useEffect } from 'react';
import { Link, useParams,useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import axios from 'axios';
import "./ActualizarManga.css"
const urlMangas = 'http://localhost:3000/mangas/';


const ActualizarManga = () => {
    const [dataId, setDataId] = useState("");

    const [imagen, setImage] = useState("");
    const [mangaNombre, setMangaName] = useState('');
    const [getYear, setYear] = useState('');
    const [precio, setPrice] = useState('');
    const [descripcion, setDescription] = useState('');
    const [preview, setPreview] = useState(null);

    let { id } = useParams();

    const redireccion = useNavigate();


    const handleNameChange = (e) => setMangaName(e.target.value);
    const handlePriceChange = (e) => setPrice(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);
    const handleYearChange = (e) => setYear(e.target.value);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleImageClick = () => {
        // Simular clic en el input de tipo file para permitir cambiar la imagen
        document.getElementById('fileInput').click();
    };


    function actualizarData() {
        Swal.fire({
            title: "Está seguro que desea editar el manga? ",
            text: "No se puede reversar esta acción!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Editar",
        }).then((result) => {
            if (result.isConfirmed) {
                confirmar(id);
                Swal.fire({
                    title: "Editado!",
                    text: "El manga se edito correctamente.",
                    icon: "success",
                });
                redireccion("/data/" + dataId);
            }
        });
    }

    async function confirmar(id) {
        let nuevaData = {
            image: preview,
            title: mangaNombre,
            year:getYear,
            price:precio,
            description:descripcion
        }
        await axios.put(urlMangas + id, nuevaData);
    }

    async function usuarioID() {
        let editar = await axios.get(urlMangas + id)
        setDataId(editar.data.id)
        setImage(editar.data.image)
        setMangaName(editar.data.title)
        setYear(editar.data.year)
        setPrice(editar.data.price)
        setDescription(editar.data.description)
    }

    useEffect(() => {
        usuarioID()
    }, [])

    return (
        <div className='contenedor-actualizar'>
            <form className='formulario'>
                <div className='caja-formulario'>
                    <label className='custom-label'>Imagen:</label>
                    <input
                        id="fileInput"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="custom-input"
                        style={{ display: 'none' }} // Ocultar el input de tipo file
                        required
                    />
                    {preview ? (
                        <div className='caja-img' onClick={handleImageClick} style={{ cursor: 'pointer' }}>
                            <img className='img' src={preview} alt="Preview" />
                        </div>
                    ) : (
                        <div className='caja-img-text' onClick={handleImageClick} style={{ cursor: 'pointer' }}>
                            <label htmlFor="fileInput" className="custom-label">Agregar imagen</label>
                        </div>
                    )}
                </div>
                <div className='caja-formulario'>
                    <label className='custom-label'>Nombre del Manga:</label>
                    <input
                        type="text"
                        placeholder={mangaNombre}
                        onChange={handleNameChange}
                        className="custom-input"
                        required
                    />
                </div>
                <div className='caja-formulario'>
                    <label className='custom-label'>Precio:</label>
                    <input
                        type="text"
                        placeholder={precio}
                        onChange={handlePriceChange}
                        className="custom-input"
                        required
                    />
                </div>

                <div className='caja-formulario'>
                    <label className='custom-label'>Año:</label>
                    <input
                        type="date"
                        value={getYear}
                        onChange={handleYearChange}
                        className="custom-input"
                        required
                    />
                </div>
                <div className='caja-formulario'>
                    <label className='custom-label'>Descripción:</label>
                    <textarea
                        placeholder={descripcion}
                        onChange={handleDescriptionChange}
                        className="custom-textarea"
                        rows={4}
                        required
                    />
                </div>

                <div className='caja-botones'>
                    <button className='boton' type="button" onClick={actualizarData}>Actualizar</button>
                    <Link to={"/data/" + dataId} className='btn-link' type="submit">Cancelar</Link>
                </div>
            </form>
        </div>
    );
};

export default ActualizarManga;



