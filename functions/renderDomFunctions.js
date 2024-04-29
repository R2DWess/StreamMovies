import { createAtorCard, createFilmeCard, createGeneroCard, createRoteiristaCard } from "./createCard.js";

export function renderMovies(list_content, filmes, modal_edit, titulo_edit, ano_edit, duracaoMinutos_edit, diretor_edit, urlCapa_edit, generosInEditForm, roteiristasInEditForm, atoresInEditForm, genero_selected_content, roteirista_selected_content, ator_selected_content){
    list_content.innerHTML = '';
    filmes.forEach((filme) => {
        const card = createFilmeCard(filme.titulo, filme.ano, filme.genero, filme.poster, filmes, list_content, modal_edit, titulo_edit, ano_edit, duracaoMinutos_edit, diretor_edit, urlCapa_edit, generosInEditForm, roteiristasInEditForm, atoresInEditForm, genero_selected_content, roteirista_selected_content, ator_selected_content);
        list_content.appendChild(card);
    });
}

export function renderGenerosInAddForm(generosInAddForm, genero_selected_content){
    genero_selected_content.innerHTML = '';
    generosInAddForm.forEach((genero) => {
        const card = createGeneroCard(genero, generosInAddForm, genero_selected_content);
        genero_selected_content.appendChild(card);
    });
}

export function renderRoteiristasInAddForm(roteiristasInAddForm, roteirista_selected_content){
    roteirista_selected_content.innerHTML = '';
    roteiristasInAddForm.forEach((roteirista) => {
        const card = createRoteiristaCard(roteirista, roteiristasInAddForm, roteirista_selected_content);
        roteirista_selected_content.appendChild(card);
    });
}

export function renderAtoresInAddForm(atoresInAddForm, ator_selected_content){
    ator_selected_content.innerHTML = '';
    atoresInAddForm.forEach((ator) => {
        const card = createAtorCard(ator, atoresInAddForm, ator_selected_content);
        ator_selected_content.appendChild(card);
    });
}

export function renderGenerosInEditForm(generosInEditForm, genero_selected_content_edit){
    genero_selected_content_edit.innerHTML = '';
    generosInEditForm.forEach((genero) => {
        const card = createGeneroCard(genero, generosInEditForm, genero_selected_content_edit);
        genero_selected_content_edit.appendChild(card);
    });
}

export function renderRoteiristasInEditForm(roteiristasInEditForm, roteirista_selected_content_edit){
    roteirista_selected_content_edit.innerHTML = '';
    roteiristasInEditForm.forEach((roteirista) => {
        const card = createRoteiristaCard(roteirista, roteiristasInEditForm, roteirista_selected_content_edit);
        roteirista_selected_content_edit.appendChild(card);
    });
}

export function renderAtoresInEditForm(atoresInEditForm, ator_selected_content_edit){
    ator_selected_content_edit.innerHTML = '';
    atoresInEditForm.forEach((ator) => {
        const card = createAtorCard(ator, atoresInEditForm, ator_selected_content_edit);
        ator_selected_content_edit.appendChild(card);
    });
}