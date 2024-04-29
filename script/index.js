import { checkAuth, login } from "../functions/auth.js";
import { renderAtoresInAddForm, renderGenerosInAddForm, renderMovies, renderRoteiristasInAddForm } from "../functions/renderDomFunctions.js";
import { getMovies } from "../functions/service.js";
import { Filme } from "../models/filme.js";

let authenticated = false;

const login_content = document.querySelector('.login_content');
const streaming_crud_content = document.querySelector('.streaming_crud_content');
const form_login = document.querySelector('.form_login');
const loading_content = document.querySelector('.loading_content');
const list_content = document.querySelector('.bottom_content');
const genero_selected_content = document.querySelector('.genero_selected_content');
const roteiristas_selected_content = document.querySelector('.roteiristas_selected_content');
const atores_selected_content = document.querySelector('.atores_selected_content');

const add_button = document.querySelector('.add_button');
const add_genero_form_button = document.querySelector('#add_genero_form');
const categoria_add = document.querySelector('#categoria_add');
const roteiristas_add = document.querySelector('#roteiristas_add');
const add_roteirista_form = document.querySelector('#add_roteirista_form');
const add_atores_form = document.querySelector('#add_atores_form');
const addButtonFilme = document.querySelector('#addButtonFilme');

const titulo_add = document.querySelector('#titulo_add');
const ano_add = document.querySelector('#ano_add');
const duracaoMinutos_add = document.querySelector('#duracaoMinutos_add');
const diretor_add = document.querySelector('#diretor_add');
const urlCapa_add = document.querySelector('#urlCapa_add');

let filmes = [];
let generosInAddForm = [];
let roteiristasInAddForm = [];
let atoresInAddForm = [];

getMovies().then((data) => {
    filmes = data;
    console.log(filmes);
    renderMovies(list_content, filmes);
})  

checkAuth(login_content, authenticated, streaming_crud_content, loading_content);

form_login.addEventListener('submit', (e) => {
    const user = form_login.querySelector('#user').value;
    const password = form_login.querySelector('#password').value;

    if(user !== 'admin' || password !== 'admin'){
        alert('Usuário ou senha inválidos');
        return;
    }

    e.preventDefault();
    login(authenticated, login_content, streaming_crud_content, loading_content);
});

add_genero_form_button.addEventListener('click', (e) => {
    e.preventDefault();
    const genero = categoria_add.value;

    if(genero === '' || generosInAddForm.includes(genero)){
        return;
    }

    generosInAddForm.push(genero);
    renderGenerosInAddForm(generosInAddForm, genero_selected_content);
});

add_roteirista_form.addEventListener('click', (e) => {
    e.preventDefault();
    const roteirista = roteiristas_add.value;

    console.log(roteirista);
    if(roteirista === '' || roteiristasInAddForm.includes(roteirista)){
        return;
    }

    roteiristasInAddForm.push(roteirista);
    renderRoteiristasInAddForm(roteiristasInAddForm, roteiristas_selected_content);
});

add_atores_form.addEventListener('click', (e) => {
    e.preventDefault();
    const ator = atores_add.value;

    console.log(ator);
    if(ator === '' || atoresInAddForm.includes(ator)){
        return;
    }

    atoresInAddForm.push(ator);
    renderAtoresInAddForm(atoresInAddForm, atores_selected_content);
});

addButtonFilme.addEventListener('click', (e) => {
    e.preventDefault();

    const titulo = titulo_add.value;
    const ano = ano_add.value;
    const duracaoMinutos = duracaoMinutos_add.value;
    const diretor = diretor_add.value;
    const urlCapa = urlCapa_add.value;
    const generos = generosInAddForm;
    const roteiristas = roteiristasInAddForm;
    const atores = atoresInAddForm;

    const filme = new Filme(titulo, ano, duracaoMinutos, generos, diretor, roteiristas, atores, urlCapa, undefined);

    filmes.push(filme);
    renderMovies(list_content, filmes);
});





login(authenticated, login_content, streaming_crud_content, loading_content);


















