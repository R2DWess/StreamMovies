import { getFilmeByTitulo } from "./getFilmeByTitulo.js";
import { renderAtoresInAddForm, renderGenerosInAddForm, renderMovies, renderRoteiristasInAddForm } from "./renderDomFunctions.js";

export function createFilmeCard(titulo, ano, categoria, poster, filmes, list_content) {
    const categorias = categoria.map(cat => `<span>${cat}</span>`).join('');
    const card = document.createElement('div');
    card.classList.add('card_filme');
    card.innerHTML = `
        <img src="${poster}" alt="teste">
          <div class="card_info">
                <div class="card_text">
                    <span>${titulo} - ${ano}</span>
                    ${categorias}
                </div>
                <div class="button-card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
                        <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
                    </svg>
                </div>
            </div>
    `;

    const deleteButton = card.querySelector('.bi-trash3');
    deleteButton.addEventListener('click', function() {
        const filme = getFilmeByTitulo(titulo, filmes);
        if (filme) {
            filmes.splice(filmes.indexOf(filme), 1);
            renderMovies(list_content, filmes);
        } else {
            alert('Erro ao editar filme')
        }
    });

    return card;
}

export function createGeneroCard(genero, generosInAddForm, genero_selected_content){
    const card = document.createElement('div');
    card.classList.add('genero_selected_content');
    card.innerHTML = `
    <div class="genero_selected">
        <span>${genero}</span>
        <span class="remove_genero">X</span>
    </div>
    `;

    card.querySelector('.remove_genero').addEventListener('click', () => {
        generosInAddForm.splice(generosInAddForm.indexOf(genero), 1);
        renderGenerosInAddForm(generosInAddForm, genero_selected_content)
    });

    return card;
}

export function createRoteiristaCard(roteirista, roteiristasInAddForm, roteirista_selected_content){
    const card = document.createElement('div');
    card.classList.add('roteirista_selected_content');
    card.innerHTML = `
    <div class="roteirista_selected">
        <span>${roteirista}</span>
        <span class="remove_roteirista">X</span>
    </div>
    `;

    card.querySelector('.remove_roteirista').addEventListener('click', () => {
        roteiristasInAddForm.splice(roteiristasInAddForm.indexOf(roteirista), 1);
        renderRoteiristasInAddForm(roteiristasInAddForm, roteirista_selected_content)
    });

    return card;
}

export function createAtorCard(ator, atoresInAddForm, ator_selected_content){
    const card = document.createElement('div');
    card.classList.add('ator_selected_content');
    card.innerHTML = `
    <div class="ator_selected">
        <span>${ator}</span>
        <span class="remove_ator">X</span>
    </div>
    `;

    card.querySelector('.remove_ator').addEventListener('click', () => {
        atoresInAddForm.splice(atoresInAddForm.indexOf(ator), 1);
        renderAtoresInAddForm(atoresInAddForm, ator_selected_content)
    });

    return card;
}