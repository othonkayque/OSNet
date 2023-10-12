var cidade = document.querySelector("#planos-cidade");
var opt_cidades = document.querySelector("#opt-escolhas")
var options_cidade_array = ["100 Megas - R$ 69,00","200 Megas - R$ 79,00","300 Megas - R$ 105,00"]

var verificador_cidade = setInterval(() => {
    if(cidade.checked == true){
        var option_select = document.createElement("select")
        option_select.setAttribute("id", "opt-planos")
        opt_cidades.appendChild(option_select)
        
        options_cidade_array.forEach(element => {
            console.log(element)
            var option_cidade = document.createElement("option");
            option_cidade.setAttribute("value", 100);
            option_cidade.innerText = element;
            option_select.appendChild(option_cidade);
        });

        clearInterval(verificador_cidade);
    }    
}, 1000);
