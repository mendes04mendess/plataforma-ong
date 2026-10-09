const cpf = document.getElementById("cpf");

if (cpf) {
    cpf.addEventListener("input", function () {
        let valor = cpf.value;
        valor = valor.replace(/\D/g, "");
        valor = valor.substring(0, 11);
        if (valor.length > 3) { valor = valor.substring(0, 3) + "." + valor.substring(3); }
        if (valor.length > 7) { valor = valor.substring(0, 7) + "." + valor.substring(7); }
        if (valor.length > 11) { valor = valor.substring(0, 11) + "-" + valor.substring(11); }

        cpf.value = valor;
    });
}

const telefone = document.getElementById("telefone");

if (telefone) {
    telefone.addEventListener("input", function () {
        let valor = telefone.value.replace(/\D/g, "");
        valor = valor.substring(0, 11);
        if (valor.length > 10) { valor = valor.substring(0, 2) + ")" + valor.substring(2); valor = "(" + valor; }
        if (valor.length > 9) { valor = valor.substring(0, 9) + "-" + valor.substring(9); }
        telefone.value = valor;
    });
}

const cep = document.getElementById("cep");
if (cep) {
    cep.addEventListener("input", function () {
        let valor = cep.value.replace(/\D/g, "");
        valor = valor.substring(0, 8);
        if (valor.length > 5) { valor = valor.substring(0, 5) + "-" + valor.substring(5); }

        cep.value = valor;
    });
}

const formulario = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");
if (formulario) {
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const cpf = document.getElementById("cpf").value;
        const telefone = document.getElementById("telefone").value;
        const dataNascimento = document.getElementById("data-nascimento").value;
        const endereco = document.getElementById("endereco").value;
        const cep = document.getElementById("cep").value;
        const cidade = document.getElementById("cidade").value;
        const estado = document.getElementById("estado").value;

        console.log("Nome:", nome);
        console.log("E-mail:", email);
        console.log("CPF:", cpf);
        console.log("Telefone:", telefone);
        console.log("Data de Nascimento:", dataNascimento);
        console.log("Endereço:", endereco);
        console.log("CEP:", cep);
        console.log("Cidade:", cidade);
        console.log("Estado:", estado);

        mensagem.textContent = "Cadastro realizado com sucesso!";
    });
}
