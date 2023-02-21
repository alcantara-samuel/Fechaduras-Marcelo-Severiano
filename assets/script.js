function abrirWhatsapp() {
  var date = document.getElementById("date").value;
  var nome = document.getElementById("nome").value;
  var cep = document.getElementById("cep").value;
  var endereco = document.getElementById("endereco").value;
  var url = "https://wa.me/5511986425826?text=" 
    + "*Formulário de Contato*" + "%0a"
    + "*Ol%C3%A1,%20tenho%20interesse%20em%20um%20dos%20seus%20servi%C3%A7os!*"
    + "%0a" // Quebra de linha
    + "*Nome*: " + nome + "%0a" // Dados do formulário
    + "*Para o dia*: " + date + "%0a"
    + "*CEP*: " + cep + "%0a"
    + "*Endereço*: " + endereco;
  window.open(url, '_blank').focus();
}
