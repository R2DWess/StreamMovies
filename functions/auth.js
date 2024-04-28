export const login = (authenticatedStatus, login_content, streaming_content, loading_content) => {
    authenticatedStatus = true;
    checkAuth(login_content, authenticatedStatus, streaming_content, loading_content);
}

export const checkAuth = (login_content, authenticatedStatus, streaming_content, loading_content) => {
    if (authenticatedStatus){
        login_content.style.display = 'none';
        loading_content.style.display = 'block';
        setTimeout(() => {
            loading_content.style.display = 'none';
            streaming_content.style.display = 'flex';
        }, 1000);
        return;
    }
    login_content.style.display = 'flex';
    streaming_content.style.display = 'none';
}