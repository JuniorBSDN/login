document.addEventListener('DOMContentLoaded', function() {
    var formLogin = document.getElementById('form-login');

    formLogin.addEventListener('submit', function(event) {
        event.preventDefault();

        var usuario = document.getElementById('usuario').value;
        var senha = document.getElementById('senha').value;

        // Validação de login (credenciais pré-definidas)
        if (usuario === "admin" && senha === "123") {
            // Login bem sucedido! Redirecionar para página de menu
            window.location.href = "menu.html";
        } else {
            alert("Usuário ou senha inválidos!");
        }
    });
});
