//alert('JS carregado');
//console.log('teste de console');

//Selecionando um elemento do HTML e guardando ele em uma variável
var btn = document.querySelector('#btn');
var etanol = document.querySelector('#etanol');
var gasolina = document.querySelector('#gasolina');
var msgResult = document.querySelector('.result');
var msgCombustivel = document.querySelector('#msgCombustivel');



//Criando a função de calcularCombustível
function calcularCombustivel(){
    
    //console.log(etanol.value);
    //console.log(gasolina.value);

    // != diferente
    // == igual
    // && e
    // || ou

    //se o valor do etanol e o valor da gasolina forem diferentes de vazio
    if(etanol.value  != '' && gasolina.value != ''){

        //mostra a caixa do resultado
        msgResult.style.visibility = 'visible';
        
        //Calculo => etanol / gasolina 
        //se o resultado for menor ou igual a 0.7 abasteça com etanol
        //senão, abasteça com gasolina

        var resultado = etanol.value / gasolina.value;
        
        //alert(resultado);

        if(resultado <= 0.7){
            //alert('Abasteça com Etanol');
            msgCombustivel.innerHTML = 'Etanol';
        }else{
            //alert('Abasteça com Gasolina');
            msgCombustivel.innerHTML = 'Gasolina';
        }

    }

    //senão
    else{
        alert('Preencha os campos!');
    }

}


//O navegador vai monitorar o clique no elemento "btn"
//Quando o clique ocorrer, a função "calcularCombustivel" será acionada
btn.addEventListener('click', calcularCombustivel);

