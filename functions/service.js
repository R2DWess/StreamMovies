export function getMovies(){
    return fetch("../data/filmes.json")
        .then((res) => {
            if(!res.ok){
                throw new Error("Erro ao buscar filmes");
            }
            return res.json();
        })
        .catch((err) => {
            console.error("Erro ao buscar filmes", err);
        });
}