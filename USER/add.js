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
            url: USER_DB,
            success: () => { alert(`Usuário "${login}" cadastrado com sucesso!`)},
            error: () => {alert("Uusário não cadastrado, verifique as informações!")}
        })
    }
}