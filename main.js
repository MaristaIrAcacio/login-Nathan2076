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
        console.log(dadosLista);
    }
}