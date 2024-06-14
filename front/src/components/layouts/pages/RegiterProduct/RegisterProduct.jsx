import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./RegisterProduct.css";
let urlUsuario = "http://localhost:3000/mangas";

function RegisterProduct() {
    
    const [titulo,setTitulo]=useState(""); 
    const [fecha,setFecha]=useState(""); 
    const [precio,setPrecio]=useState(""); 
    const [descripcion,setDescripcion]=useState(""); 
    const [dataProducts,setDataProducts]=useState([]);

    const [base64Image, setBase64Image] = useState('');

    const redireccion=useNavigate();

    async function bringProducts(){
        let resultado = await axios.get(urlUsuario);
        setDataProducts(resultado.data);
    }
    
    useEffect(() => {
        bringProducts();
    }, []);

    
    function buscarProducts() {
        return dataProducts.some((data)=>data.titulo===titulo);
    }
    
    function addProduct() {
        if (buscarProducts()) {
            alert("Producto ya agregado")
        }else{
            captureProduct();
            
            alert("Producto agragdo :D")
            // redireccion("/Home");
        }
    }

    
    function handleFileChange(event) {
        const file = event.target.files[0];
        if(file){

            const reader= new FileReader();
            reader.onload =(e)=>{
                setBase64Image(e.target.result);
            };
            reader.readAsDataURL(file)
        }
    }

    
    async function captureProduct() {
        let product={
            image:base64Image,
            title:titulo,
            year:fecha,
            price:precio,
            description:descripcion,
        };
        await axios.post(urlUsuario,product);
    } 

    
    
    return (
        <div className="container">
            <div className="container-form">
                <form className="form">
                    <input className="input" type="text" placeholder="Titulo" onChange={(e) => {setTitulo(e.target.value)}}/>
                    <input className="input" type="date" placeholder="Año" onChange={(e) => {setFecha(e.target.value)}}/>
                    <input className="input" type="number" placeholder="Precio" onChange={(e) => {setPrecio(e.target.value)}}/>
                    <textarea className="textarea" placeholder="Descripcion" onChange={(e) => {setDescripcion(e.target.value)}}></textarea>
                    <input className="input" type="file" placeholder="Imagen" onChange={handleFileChange} />
                    <center><button className="button" onClick={addProduct}>Guardar</button></center>
                </form>

            </div>
        </div>
    )
}

export default RegisterProduct;