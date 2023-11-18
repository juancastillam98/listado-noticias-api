import {FormControl, InputLabel, Select, MenuItem, Button, Box} from "@mui/material";
import useNoticias from "../hooks/useNoticias.jsx";

const CATEGORIAS = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnología'},
]
export const Formulario = () => {
    const {categoria, handleChangeCategoria}=useNoticias();
    return (
        <form>
            <FormControl fullWidth>
                <InputLabel>Categoría</InputLabel>
                <Select
                    label={"Categoria"}
                   onChange={handleChangeCategoria}
                    value={categoria}
                >
                    {CATEGORIAS.map(categoria =>(
                        // Menu item son cada una de las options, pero usamos la librería de MUI
                        <MenuItem
                            key={categoria.value} value={categoria.value}>
                            {categoria.label}>
                        </MenuItem>
                ))}

                </Select>
                <Box sx={{marginTop: 2}}>
                    <Button fullWidth variant={"contained"} color={"primary"}>Buscar noticias</Button>
                </Box>
            </FormControl>
        </form>
    )
}