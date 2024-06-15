import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { GoPlusCircle } from "react-icons/go";
import './Home.css';

const urlMangas = 'http://localhost:3000/mangas'; // Ruta a la API de mangas

const Home = () => {
  const [mangas, setMangas] = useState([]);

  const [buscar,setBuscar]=useState("");

  useEffect(() => {
    const fetchMangas = async () => {
      try {
        const response = await axios.get(urlMangas);
        setMangas(response.data);
      } catch (error) {
        console.error('Error fetching mangas:', error);
      }
    };

    fetchMangas();
  }, []);

  console.log(buscar);

  const searchMangas = mangas.filter(
    (manga)=>{
      return manga.title.toLowerCase().includes(buscar.toLowerCase())
    }
  );

  return (
    <div className="home-container">
      {/* Barra de navegación independiente */}
      <nav className="navbar">

        <div className="navbar-links">

          <button className="nav-salir">
            <Link to="/" >
              Cerrar Sesion
            </Link>
          </button>

          <div className="searchBox">

            <input className="searchInput" type="text" name="" placeholder="Busca tu manga favorito" onChange={(e)=>{setBuscar(e.target.value)}}/>
            <button className="searchButton" href="#">



              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                <g clipPath="url(#clip0_2_17)">
                  <g filter="url(#filter0_d_2_17)">
                    <path d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" shapeRendering="crispEdges"></path>
                  </g>
                </g>
                <defs>
                  <filter id="filter0_d_2_17" x="-0.418549" y="3.70435" width="29.7139" height="29.7139" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                    <feOffset dy="4"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_17"></feBlend>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_17" result="shape"></feBlend>
                  </filter>
                  <clipPath id="clip0_2_17">
                    <rect width="28.0702" height="28.0702" fill="white" transform="translate(0.403503 0.526367)"></rect>
                  </clipPath>
                </defs>
              </svg>


            </button>
          </div>

          <Link to="/manga" className="nav-link" >
            <GoPlusCircle />
          </Link>
        </div>
      </nav>

      {/* Contenedor principal para los mangas */}
      <div className="containermanga">
        <div className="navbar-brand">
          <h1>Lista de Mangas</h1>
        </div>
        <div className="mangas-grid">
          {mangas.length > 0 ? (
            searchMangas.map((manga, index) => (
                <Link to={"/data/"+ manga.id}key={index}>
              <div  className="manga-card">
                  <div className="manga-image">
                    <img src={manga.image} alt={manga.title} />
                  </div>
                  <div className="manga-details">
                    <h2>{manga.title}</h2>
                    <p><strong>Año:</strong> {manga.year}</p>
                    <p><strong>Precio:</strong> {manga.price}</p>
                    <p className='descripcion'><strong>Descripción:</strong> {manga.description}</p>
                  </div>
              </div>
                </Link>
            ))
          ) : (
            <div>No hay mangas disponibles</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;