function adicionarContato() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    if (nome && telefone) {
        var tabela = document.getElementById("tabelaContatos");
        var novaLinha = tabela.insertRow(-1);
        var colunaNome = novaLinha.insertCell(0);
        var colunaTelefone = novaLinha.insertCell(1);

        colunaNome.innerHTML = nome;
        colunaTelefone.innerHTML = telefone;

        document.getElementById("nome").value = "";
        document.getElementById("telefone").value = "";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}
function adicionarContato() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    if (nome && telefone) {
        var tabela = document.getElementById("tabelaContatos");
        
        var contatos = tabela.getElementsByTagName("tr");
        for (var i = 1; i < contatos.length; i++) {
            var nomeExistente = contatos[i].getElementsByTagName("td")[0].innerHTML;
            var telefoneExistente = contatos[i].getElementsByTagName("td")[1].innerHTML;
            if (nomeExistente === nome || telefoneExistente === telefone) {
                alert("Este contato já está na lista.");
                return;
            }
        }
        
        var novaLinha = tabela.insertRow(-1);
        var colunaNome = novaLinha.insertCell(0);
        var colunaTelefone = novaLinha.insertCell(1);

        colunaNome.innerHTML = nome;
        colunaTelefone.innerHTML = telefone;

        document.getElementById("nome").value = "";
        document.getElementById("telefone").value = "";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}
