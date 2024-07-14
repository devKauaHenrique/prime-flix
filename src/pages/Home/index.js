import { useEffect, useState } from "react";
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';

//URL DA API: movie/now_playing?api_key=b17b94c206f968e4dec1dbb0c6a812ec&language=pt-BR

function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    //será executado toda vez que a aplicação abrir
    useEffect(() => {

        async function loadFilmes(){
            //para pegar a api (o await é para esperar pegar toda as informações da api para depois executar os códigos de baixo)
            const response = await api.get('movie/now_playing',{
                params:{
                    api_key:'b17b94c206f968e4dec1dbb0c6a812ec',
                    language: 'pt-BR',
                    page: 1,
                }
            })

            //console.log(response.data.results.slice(0,10));
            setFilmes(response.data.results);
            setLoading(false);
            
        }

        loadFilmes();

    },[])

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <div className="filme">
                                <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
                                <Link to={`/filme/${filme.id}`}>Acessar</Link>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;