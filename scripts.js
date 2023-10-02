var btnPressSend = document.querySelector(".btn-infos");

btnPressSend.addEventListener('click', () => {
    var name = document.querySelector(".fullname").value;
    var age = document.querySelector(".age").value;
    var email = document.querySelector(".email").value;
    var opt_select = document.querySelector("#opt-planos").value;

    var cpf = document.querySelector(".cpf").value;
    var rg = document.querySelector(".rg").value;
    var localidade = document.querySelector(".local").value;
    var ponto_referencia = document.querySelector(".ponto-referencia").value;
    var data_pagamento = document.querySelector(".data-pagamento").value;

    //var CPF_frente = document.querySelector("#CPF-frente").value;
    //var CPF_verso = document.querySelector("#CPF-verso").value;

    //var RG_frente = document.querySelector("#RG-frente").value;
    //var RG_verso = document.querySelector("#CPF-verso").value;
    
    var msg_pre_definida = `Nome: ${name}, Idade: ${age} anos, Email: ${email}, CPF: ${cpf}, RG: ${rg}, Localidade: ${localidade}, Ponto Referencia: ${ponto_referencia}, data do pagamento: ${data_pagamento}, Plano: ${opt_select} megas. \n *Agora vou enviar imagens da frente e verso do meu CPF e RG*`;
    //var number = "5588994209998"; //Kayque
    var number = "558899670810"; // OS net
    var link = `https://api.whatsapp.com/send?phone=${number}&text=${msg_pre_definida}`;
    window.location = link;
})