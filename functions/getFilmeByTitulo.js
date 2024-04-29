export const getFilmeByTitulo = (titulo, filmes) => {
    return filmes.find(filme => filme.titulo === titulo);
}