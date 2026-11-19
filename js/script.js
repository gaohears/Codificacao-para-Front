function topo() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function login() {
  const usuario = document.getElementById("login-usuario").value.trim();
  const senha = document.getElementById("login-senha").value;

  if (usuario === "" || senha === "") {
    alert("Preencha o usuário e a senha.");
  } else if (senha.length < 6) {
    alert("A senha precisa ter pelo menos 6 caracteres.");
  } else {
    alert("Bem-vindo, " + usuario + "!");
  }
}

function cadastro() {
  const usuario = document.getElementById("cad-usuario").value.trim();
  const email = document.getElementById("cad-email").value.trim();
  const senha = document.getElementById("cad-senha").value;

  if (usuario === "" || email === "" || senha === "") {
    alert("Preencha todos os campos.");
  } else if (!email.includes("@")) {
    alert("Informe um e-mail válido.");
  } else if (senha.length < 6) {
    alert("A senha precisa ter pelo menos 6 caracteres.");
  } else {
    alert("Conta criada com sucesso, " + usuario + "!");
  }
}

function comprar(nome) {
  alert(nome + " adicionado ao carrinho!");
}
