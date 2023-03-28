function drawTable(members) {

    const table = document.createElement("table");

    const thead = document.createElement("thead");

    const tr = document.createElement("tr");

    const thForId = document.createElement("th");
    thForId.innerText = "ID";

    const thForName = document.createElement("th");
    thForName.innerText = "Nome";

    tr.append(thForId, thForName);

    thead.appendChild(tr);

    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    for (let member of members) {

        const tr = document.createElement("tr");

        const tdForId = document.createElement("td");
        tdForId.innerText = member.id;
        tr.appendChild(tdForId);

        const tdForName = document.createElement("td");
        tdForName.innerText = member.nome;
        tr.appendChild(tdForName);
        tbody.appendChild(tr);
    }

    result.appendChild(table);
}

function getUsers() {

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/usuario'
    }).done(function (data) {
        var users = data.map((user) => {
            const id = user.id
            const login = user.login
            const User = { id: id, nome: login }

            return User
        })
        drawTable(users)
    })
}

getUsers()