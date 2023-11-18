import {useContext} from "react";
import {NoticiasContext} from "../context/NoticiasProvider.jsx";
export default function useNoticias(){
    return useContext(NoticiasContext)
}