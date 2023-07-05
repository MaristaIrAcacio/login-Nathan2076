// Input filling verification block

function verify()
{
    let user = document.getElementById("loginEmail").value;
    let pswr = document.getElementById("loginSenha").value;

    if (!user || !pswr) {
        alert("Campos de preenchimento obrigatório. Favor preencher!");
    } else {
        window.location.href = "aula2.html";
    }
}

/* FUNCTION TO CREATE THE USER LIST
 *
 * Creates the Array to store users
 */

var dadosLista = [];

function salvarUser() {
    let nomeUser = document.getElementById("nomeUser").value;

    if (nomeUser) {
        dadosLista.push(nomeUser);
        criaLista();
    }
}

function criaLista() {
    let tabela = document.getElementById("tabela").innerHTML;
    innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";

    for (let i = 0; i < dadosLista.length; i++) {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class=\"btn btn-success\" onclick=\"\">Editar</button><button class=\"btn btn-danger\" onlick=\"\">Excluir</button></td></tr>";
        document.getElementById("tabela").innerHTML = tabela;
    }
}
