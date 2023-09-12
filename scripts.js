var btnPressSend = document.querySelector(".btn-infos");

btnPressSend.addEventListener('click', () => {
    var name = document.querySelector(".fullname").value;
    var age = document.querySelector(".age").value;
    var email = document.querySelector(".email").value;
    var opt_select = document.querySelector("#opt-planos").value;

    var cpf = document.querySelector(".cpf").value;
    var rg = document.querySelector(".rg").value;
    var localidade = document.querySelector(".local").value;
    var data_pagamento = document.querySelector(".data-pagamento").value;
    
    var msg_pre_definida = `Nome: ${name}, Idade: ${age} anos, Email: ${email}, CPF: ${cpf}, RG: ${rg}, Localidade: ${localidade}, data do pagamento: ${data_pagamento}, Plano: ${opt_select} megas`;
    var number = "558899670810";
    var link = `https://api.whatsapp.com/send?phone=${number}&text=${msg_pre_definida}`;
    window.location = link;
})