$(document).ready(() => {

    let [contador_click, resultado] =[0, 0];

    $('#display').val(0);

    $('.tecla').click(function(){

        let [valor, contador] = [$(this).text(), 0];

        for(let i=0; i<10; i++){
            valor != i ? contador +=1 : null;              
        }
        // verifica se é um numero ou não
        contador == 9 ? 
        digita_numero(valor) : 
        digita_caracter(valor);
    });

    const digita_numero = (valor) => {
        $('#display').val() == 0 || 
        $('#display').val() == 'Infinity' ||
        $('#display').val() == 'NaN' ?
        $('#display').val(valor) : 
        $('#display').val($('#display').val() + valor);
    }

    const digita_caracter = (valor) => {
        if(valor == 'AC'){        
            $('#display').val(0);

        }else{
            let ultima_posicao = $('#display').val().length - 1;
                // verifica se o ultimo digito é uma operação ou virgula
            if(
                $('#display').val().substring(ultima_posicao) != ' ' &&
                $('#display').val().substring(ultima_posicao) != ',' &&
                $('#display').val().substring(ultima_posicao) != ''  &&
                $('#display').val().substring(ultima_posicao) != 'y' &&
                $('#display').val().substring(ultima_posicao) != 'N'
            ){ 
                if(valor == ','){
                    $('#display').val($('#display').val() + '.' );

                }else{                   
                     contador_click += 1;

                    let calculo_previo =$('#display').val().split(' ') ;
                    $('#display').val($('#display').val() + ' '+ valor + ' ');

                    contador_click >= 2 ? calcular(calculo_previo, contador_click) : null; 
                }               
            }
        }
    }

    const calcular = (conta, clicks) =>{

        let [prim_number1, prim_operador, prim_number2] = [conta[0], conta[1], conta[2]];

        switch(prim_operador){
            case '+':
               resultado = Number(prim_number1) + Number(prim_number2);  
            break; 
            case '-':
               resultado = Number(prim_number1) - Number(prim_number2); 
            break; 
            case '*':
               resultado = Number(prim_number1) * Number(prim_number2); 
            break; 
            case '/':
               resultado = Number(prim_number1) / Number(prim_number2);
            break; 
        }
        
       for(let i=3; i<conta.length; i++){

            let [number, operador] = [conta[i+1], conta[i]]

            if( i % 2 != 0){

                if(clicks >= 3){
                   switch(operador){
                    case '+':
                       resultado += Number(number);  
                    break; 
                    case '-':
                       resultado -= Number(number); 
                    break; 
                    case '*':
                       resultado *= Number(number); 
                    break; 
                    case '/':
                       resultado /= Number(number);
                    break; 
                   }
                }             
           }  
       }         
    }

    $('#calcular').click(function() {

        let valores = $('#display').val().split(' ');
        let [ultimo_operador, ultimo_number] = [valores[valores.length - 2], valores[valores.length - 1]];

        if(valores.length == 3){

            switch(ultimo_operador){
                case '+':
                    resultado = Number(valores[0]) + Number(ultimo_number);
                break;
                case '-':
                    resultado = Number(valores[0]) - Number(ultimo_number);
                break;
                case '*':
                    resultado = Number(valores[0]) * Number(ultimo_number);
                break;
                case '/':
                    resultado = Number(valores[0]) / Number(ultimo_number);
                break; 
            }
            $('#display').val(resultado);
        }else

            switch(ultimo_operador){
                case '+':
                    resultado += Number(ultimo_number);
                break;
                case '-':
                    resultado -= Number(ultimo_number);
                break;
                case '*':
                    resultado *= Number(ultimo_number);
                break;
                case '/':
                    resultado /= Number(ultimo_number);
                break; 
            }
            $('#display').val(resultado);       
    });
    
});