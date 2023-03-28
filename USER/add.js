const USER_DB = URLDB + "usuario"
const createUser = function () {

    const login = document.getElementById("login").value
    const senha1 = document.getElementById("senha1").value
    const senha2 = document.getElementById("senha2").value
    const dados = {
        "login": login,
        "senha": senha1
    }

    if (senha1 == senha2){
        $.ajax({
            type: 'POST',
            data: dados,
            url: 'http://192.168.1.136:3000/api/usuario',
            success: () => {alert(`Usuário "${login}" cadastrado com sucesso!`)},
            error: () => {alert("Usuário não cadastrado, verifique as informações!")}
        })
    }else {
        alert ("As senhas devem ser iguais nos dois campos!")
    }
}