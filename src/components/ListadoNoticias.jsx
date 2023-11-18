import {Grid, Typography, Pagination, Stack} from "@mui/material";
import useNoticias from "../hooks/useNoticias.jsx";
import {Noticia} from "./Noticia.jsx";
export const ListadoNoticias = () => {
    const {noticias, totalNoticias, handleChangePagina, pagina} = useNoticias()
    const totalPaginas = Math.ceil(totalNoticias / 20);
    return (
        <>
            {/*Typography es crea un p, se utiliza este comonent*/}
            <Typography textAlign={"center"} marginY={5} variant={"h3"} component={"h2"}>
                Ultimas Noticias
            </Typography>
            <Grid container spacing={2}>
                {noticias.map(noticia =>(
                    <Noticia
                        key={noticia.url}
                        noticia={noticia}
                    />
                ))}
            </Grid>
            <Stack spacing={2}
                   direction={"row"}
                   justifyContent={"center"}
                   alignItems={"center"} sx={{marginY: 5}}>
                <Pagination count={totalPaginas}
                            color={"primary"}
                            onChange={handleChangePagina}
                            page={pagina}
                />
            </Stack>
        </>
    )
}