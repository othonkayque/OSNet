var btnPressSend = document.querySelector(".btn-infos");

btnPressSend.addEventListener('click', () => {
    var name = document.querySelector(".fullname").value;
    var profissao = document.querySelector(".profissao").value
    var numero_casa = document.querySelector(".numero-casa").value
    var dia_nasc =  document.querySelector("#dia-nasc").value;
    var mes_nasc = document.querySelector("#mes-nasc").value;
    var ano_nasc= document.querySelector("#ano-nasc").value;
    var dia_emissao = document.querySelector("#dia-emissao").value;
    var mes_emissao = document.querySelector("#mes-emissao").value;
    var ano_emissao = document.querySelector("#ano-emissao").value;
    var orgao_emissor = document.querySelector("#orgao-emissor").value
    var email = document.querySelector(".email").value;
    var opt_dia = document.querySelector("#opt-dia").value;
    var cpf = document.querySelector(".cpf").value;
    var rgteste = document.querySelector(".rg").value;
    var localidade = document.querySelector(".local").value;
    var ponto_referencia = document.querySelector(".ponto-referencia").value;
    var data_pagamento = document.querySelector(".data-pagamento").value;
    var plano_escolhido  = document.querySelector("#plano_escolhido").value;
    
    var msg_pre_definida = `Nome: ${name}, Profissão: ${profissao}, ,  Data de nascimento: ${dia_nasc}/${mes_nasc}/${ano_nasc}, Email: ${email}, CPF: ${cpf}, RG: ${rgteste}, Orgão emissor foi: ${orgao_emissor}, Data de emissao: ${dia_emissao}/${mes_emissao}/${ano_emissao}, Localidade: ${localidade}, Numero casa: ${numero_casa}, Ponto Referencia: ${ponto_referencia}, data do pagamento: ${data_pagamento}, Plano: ${plano_escolhido} megas e quero fazer os pagamentos no dia ${opt_dia}. \n *Agora vou enviar imagens da frente e verso do meu CPF e RG*`;
    //var number = "5588994209998"; //Kayque
    var number = "558892900506"; // Loja
    var link = `https://api.whatsapp.com/send?phone=${number}&text=${msg_pre_definida}`;


    if (name == "" || ano_nasc == "" || cpf == "" && rgteste == "" || localidade == "" || ponto_referencia == "" || numero_casa == ""){
        var container = document.querySelector(".container-1")
        var teste = document.createElement("div")
        var imagem = document.createElement("img");
        imagem.setAttribute("src", "aviso.png");
        var aviso_texto = document.createTextNode("Preencha todos os campos para prosseguir.");
        teste.setAttribute("class", "incompleto_alerta");
        teste.appendChild(imagem);
        teste.appendChild(aviso_texto);
        container.appendChild(teste);
     
        var incompleto_alerta = document.querySelector(".incompleto_alerta")
        setTimeout(() => {
            teste.style.animation = "alertClose ease-in-out 1s";
            setTimeout(() => {
                incompleto_alerta.remove()            
            }, 900);
    
        }, 6000);
        incompleto_alerta.addEventListener("click", () => {
            teste.style.animation = "alertClose ease-in-out 1s";
            setTimeout(() => {
                incompleto_alerta.remove()            
            }, 900);
        })
        

    }else{
        window.location = link;
    }
})

