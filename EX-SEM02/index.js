function submitFormContact() {
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var descricao = document.getElementById('descricao');
  
    console.log(
      'Formulário de contato:',
      '\nNome: ' + nome.value,
      '\nE-mail: ' + email.value,
      '\nDescrição: ' + descricao.value
    );
  
    alert('Formulário enviado com sucesso!');
  
    nome.value = '';
    email.value = '';
    descricao.value = '';
  }