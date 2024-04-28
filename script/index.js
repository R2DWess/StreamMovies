import { checkAuth, login } from "../functions/auth.js";
import { getMovies } from "../functions/service.js"
import { createCard } from "../functions/createCard.js";


let authenticated = false;

const login_content = document.querySelector('.login_content');
const streaming_crud_content = document.querySelector('.streaming_crud_content');
const form_login = document.querySelector('.form_login');
const loading_content = document.querySelector('.loading_content');
const list_content = document.querySelector('.bottom_content');

let filmes = [];

getMovies().then((data) => {
    filmes = data;
    console.log(filmes);
    renderMovies();
})  


function renderMovies(){
    list_content.innerHTML = '';
    filmes.forEach((filme) => {
        const card = createCard(filme.titulo, filme.ano, filme.genero, filme.poster)
        list_content.appendChild(card);
    });
}

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

login(authenticated, login_content, streaming_crud_content, loading_content);


















