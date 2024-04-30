import { checkAuth, login } from "../functions/auth.js";
import { renderAtoresInAddForm, renderAtoresInEditForm, renderGenerosInAddForm, renderGenerosInEditForm, renderMovies, renderRoteiristasInAddForm, renderRoteiristasInEditForm } from "../functions/renderDomFunctions.js";
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
const genero_selected_content_edit = document.querySelector('.genero_selected_content_edit');
const roteiristas_selected_content_edit = document.querySelector('.roteiristas_selected_content_edit');
const atores_selected_content_edit = document.querySelector('.atores_selected_content_edit');

const add_button = document.querySelector('.add_button');
const add_genero_form_button = document.querySelector('#add_genero');
const categoria_add = document.querySelector('#categoria_add');
const roteiristas_add = document.querySelector('#roteiristas_add');
const categoria_edit = document.querySelector('#categoria_edit');
const roteiristas_edit = document.querySelector('#roteiristas_edit');
const atores_edit = document.querySelector('#atores_edit');
const add_roteirista_form = document.querySelector('#add_roteirista_form');
const add_atores_form = document.querySelector('#add_atores_form');
const addButtonFilme = document.querySelector('#addButtonFilme');
const editButtonFilme = document.querySelector('#editButtonFilme');
const edit_genero_form_button = document.querySelector('#edit_genero_form');
const edit_roteirista_form = document.querySelector('#edit_roteirista_form');
const edit_atores_form = document.querySelector('#edit_atores_form');





const titulo_add = document.querySelector('#titulo_add');
const ano_add = document.querySelector('#ano_add');
const duracaoMinutos_add = document.querySelector('#duracaoMinutos_add');
const diretor_add = document.querySelector('#diretor_add');
const urlCapa_add = document.querySelector('#urlCapa_add');

const titulo_edit = document.querySelector('#titulo_edit');
const ano_edit = document.querySelector('#ano_edit');
const duracaoMinutos_edit = document.querySelector('#duracaoMinutos_edit');
const diretor_edit = document.querySelector('#diretor_edit');
const urlCapa_edit = document.querySelector('#urlCapa_edit');


const modalEdit = document.getElementById('exampleModalEdit');

let filmes = [];
let generosInAddForm = [];
let roteiristasInAddForm = [];
let atoresInAddForm = [];

let generosInEditForm = [];
let roteiristasInEditForm = [];
let atoresInEditForm = [];

let actualFilme;

function setActualFilme(filme){
    actualFilme = filme;
}

function setGenerosInEditForm(generos){
    generosInEditForm = generos;

    return generosInEditForm;
}

function setRoteiristasInEditForm(roteiristas){
    roteiristasInEditForm = roteiristas;

    return roteiristasInEditForm;
}

function setAtoresInEditForm(atores){
    atoresInEditForm = atores;

    return atoresInEditForm;
}

getMovies().then((data) => {
    filmes = data;
    console.log(filmes);
    renderMovies(list_content, filmes, modalEdit, titulo_edit, ano_edit, duracaoMinutos_edit, diretor_edit, urlCapa_edit, setGenerosInEditForm, setRoteiristasInEditForm, setAtoresInEditForm, genero_selected_content_edit, roteiristas_selected_content_edit, atores_selected_content_edit, setActualFilme);
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

edit_genero_form_button.addEventListener('click', (e) => {
    e.preventDefault();
    const genero = categoria_edit.value;

    if(genero === '' || generosInEditForm.includes(genero)){
        return;
    }


    generosInEditForm.push(genero);
    renderGenerosInEditForm(generosInEditForm, genero_selected_content_edit);
});

edit_roteirista_form.addEventListener('click', (e) => {
    e.preventDefault();
    const roteirista = roteiristas_edit.value;

    console.log(roteirista);
    if(roteirista === '' || roteiristasInEditForm.includes(roteirista)){
        return;
    }

    roteiristasInEditForm.push(roteirista);
    renderRoteiristasInEditForm(roteiristasInEditForm, roteiristas_selected_content_edit);
});

edit_atores_form.addEventListener('click', (e) => {
    e.preventDefault();
    const ator = atores_edit.value;

    console.log(ator);
    if(ator === '' || atoresInEditForm.includes(ator)){
        return;
    }

    atoresInEditForm.push(ator);
    renderAtoresInEditForm(atoresInEditForm, atores_selected_content_edit);
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
    generosInAddForm = [];
    roteiristasInAddForm = [];
    atoresInAddForm = [];
    renderAtoresInAddForm(atoresInAddForm, atores_selected_content);
    renderGenerosInAddForm(generosInAddForm, genero_selected_content);
    renderRoteiristasInAddForm(roteiristasInAddForm, roteiristas_selected_content);
    renderMovies(list_content, filmes, modalEdit, titulo_edit, ano_edit, duracaoMinutos_edit, diretor_edit, urlCapa_edit, setGenerosInEditForm, setRoteiristasInEditForm, setAtoresInEditForm, genero_selected_content_edit, roteiristas_selected_content_edit, atores_selected_content_edit, setActualFilme);
});

editButtonFilme.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('1', 'teste');

    const titulo = titulo_edit.value;
    const ano = ano_edit.value;
    const duracaoEmMinutos = duracaoMinutos_edit.value;
    const diretor = diretor_edit.value;
    const poster = urlCapa_edit.value;

    console.log(actualFilme);

    const index = filmes.findIndex((filme) => filme.titulo == actualFilme.titulo);

    console.log(index);

    console.log(generosInEditForm);
    console.log(roteiristasInEditForm);
    console.log(atoresInEditForm);


    filmes[index] = new Filme(titulo, ano, duracaoEmMinutos, generosInEditForm, diretor, roteiristasInEditForm, atoresInEditForm, poster, undefined);

    renderMovies(list_content, filmes, modalEdit, titulo_edit, ano_edit, duracaoMinutos_edit, diretor_edit, urlCapa_edit, setGenerosInEditForm, setRoteiristasInEditForm, setAtoresInEditForm,genero_selected_content_edit, roteiristas_selected_content_edit, atores_selected_content_edit, setActualFilme);
});





login(authenticated, login_content, streaming_crud_content, loading_content);


















