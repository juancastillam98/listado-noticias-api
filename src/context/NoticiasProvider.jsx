import {useEffect, createContext, useState} from "react";
import axios from "axios";
export const NoticiasContext= createContext();
export default function NoticiasProvider({children}){
    const [categoria, setCategoria]=useState("general");
    const [noticias, setNoticias]=useState([])
    const [pagina, setPagina]=useState(1);
    //calculo para saber cuantas páginas vamos a mostrar
    const [totalNoticias, setTotalNoticias]=useState(0)

    const handleChangeCategoria = e =>{
        setCategoria(e.target.value)
    }
    const handleChangePagina = (e, valor) =>{//valor es el índice (la posición actual, la cual coincide con la página en la que estamos
        //console.log(e.target.textContent) este es el contenido que tiene el nodo
        setPagina(valor)
    }
    //hay 2 useEffect, uno para listar la información cuando cambie la categoría y otro para listar la información cuando cambie la página
    useEffect(()=>{
        const consultarAPI = async ()=>{
            const url = 'https://newsapi.org/v2/top-headlines?' +
                'country=us&'+
                `category=${categoria}&` +
                'sortBy=popularity&' +
                `apiKey=${import.meta.env.VITE_API_KEY}`;

            const {data} = await axios(url);
            setNoticias(data.articles)
            setTotalNoticias(data.totalResults)
            //este set está puesto porque el useEffect escucha por categoría.
            // Es decir cada vez que se cambie de categoría.
            // Por consiguiente, si cambia la categoría, le vamos a decir que regrese a la página 1
            setPagina(1)
        }
        consultarAPI();
    }, [categoria])

    useEffect(()=>{
        const consultarAPI = async ()=>{
            const url = 'https://newsapi.org/v2/top-headlines?' +
                'country=us&'+
                `page=${pagina}&`+
                `category=${categoria}&` +
                'sortBy=popularity&' +
                `apiKey=${import.meta.env.VITE_API_KEY}`;

            const {data} = await axios(url);
            setNoticias(data.articles)
            setTotalNoticias(data.totalResults)
        }
        consultarAPI();
    }, [pagina])


    return(
        <NoticiasContext.Provider value={{categoria, handleChangeCategoria, noticias, totalNoticias, handleChangePagina, pagina}}>
            {children}
        </NoticiasContext.Provider>
    )
}