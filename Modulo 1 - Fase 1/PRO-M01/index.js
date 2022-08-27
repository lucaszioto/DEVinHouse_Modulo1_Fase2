function prencher() {
    document.getElementById("tituloDica").value = "GRID vs Flex-box";
    document.getElementById("txtLinguagem").value = "CSS";
    document.getElementById("ddlCategoria").value = "FrontEnd";
    document.getElementById("descricaoDica").value =
      "Se você está usando mais de um container flex para organizar elementos em um layout, provavelmente um deles deveria ser grid. Se você precisa aplicar diversas propriedades nos elementos filhos para ter maior controle do layout, você provavelmente deveria estar fazendo isso com grid.";
    document.getElementById("txtUrl").value = "https://www.youtube.com/watch?v=3elGSZSWTbM&ab_channel=KevinPowell" ;
  }



contador();

function cadastrar() {
  let titulo = document.getElementById("tituloDica");
  let linguagem = document.getElementById("txtLinguagem");
  let categoria = document.getElementById("ddlCategoria");
  let descricao = document.getElementById("descricaoDica");
  let url = document.getElementById("txtUrl");

  let dados = JSON.parse(localStorage.getItem("formulario1"));

  if (dados == null) {
    localStorage.setItem("formulario1", "[]");
    dados = [];
  }

  let preparaDados = {
    titulo: titulo.value,
    linguagem: linguagem.value,
    categoria: categoria.value,
    descricao: descricao.value,
    url: url.value,
  };

  dados.push(preparaDados);

  localStorage.setItem("formulario1", JSON.stringify(dados));

  alert("O Registro ''" + titulo.value + "'' foi adicionado com sucesso!");

  titulo.value = "";
  linguagem.value = "";
  categoria.value = "";
  descricao.value = "";
  url.value = "";
  document.getElementById("txtPesquisar").value = "";

  contador();
}

function limpar() {
  let titulo = document.getElementById("tituloDica");
  let linguagem = document.getElementById("txtLinguagem");
  let categoria = document.getElementById("ddlCategoria");
  let descricao = document.getElementById("descricaoDica");
  let url = document.getElementById("txtUrl");

  titulo.value = "";
  linguagem.value = "";
  categoria.value = "";
  descricao.value = "";
  url.value = "FrontEnd";
  document.getElementById("txtPesquisar").value = "";
}

function contador() {
  let dados = JSON.parse(localStorage.getItem("formulario1"));

  if (dados == null) {
    localStorage.setItem("formulario1", "[]");
    dados = [];
  }

  let total = dados.length;
  console.log(total);
  document.getElementById("spnTotal").innerText = total;

  let totalFrontEnd = 0;
  let totalBackEnd = 0;
  let totalFullStack = 0;
  let totalSoftskill = 0;

  let htmlString = '<table id="minhaTabela"><tbody>';

  for (var i = 0; i < total; i++) {
    var d = dados[i].categoria;

    if (d == "FrontEnd") {
      totalFrontEnd++;
      console.log(d);
    } else if (d == "BackEnd") {
      totalBackEnd++;
      console.log(d);
    } else if (d == "FullStack") {
      totalFullStack++;
      console.log(d);
    } else {
      totalSoftskill++;
      console.log(d);
    }

    console.log("total: " + i);

    let titulo = dados[i].titulo;
    let linguagem = dados[i].linguagem;
    let url = dados[i].url;
    let descricao = dados[i].descricao;

    htmlString +=
      "<tr>" +
      "<td>" +
      '<div class="div2">' +
      "<strong>Titulo:</strong> " +
      titulo +
      "<br />" +
      "<strong>Linguagem:</strong> " +
      linguagem +
      "<br />" +
      "<strong>Categoria:</strong> " +
      d +
      "<br />" +
      '<strong>Vídeo do Youtube:</strong> <a href="' + '<iframe width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
      url +
      '">' +
      url +
      "</a><br />" +
      "<strong>Descrição:</strong> " +
      descricao +
      "<br /> " +
      '<div style="clear:both;"></div>' +
      '<div class="divOpcao">' +
      '<a href="#">Excluir</a> | <a href="#">Editar</a> | <a href="#">Visualizar vídeo</a>' +
      "</div>" +
      "</div>" +
      "</td>" +
      "</tr>";
  }

  if (total == 0) {
    htmlString +=
      "<tr>" +
      "<td>" +
      '<div class="div2">Nenhum registro cad' +
      "</div>" +
      "</div>" +
      "</td>" +
      "</tr>";
  }

  htmlString += " </tbody></table>";

  document.getElementById("tdConteudo").innerHTML = htmlString;
  document.getElementById("spnFronEnd").innerText = totalFrontEnd;
  document.getElementById("spnBackEnd").innerText = totalBackEnd;
  document.getElementById("spnFullStack").innerText = totalFullStack;
  document.getElementById("spnSoftSkill").innerText = totalSoftskill;
}

function pesquisaTabela() {
  let input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("txtPesquisar");
  filter = input.value.toUpperCase();
  table = document.getElementById("minhaTabela");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
