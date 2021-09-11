$(document).ready(() => {

    $('#dark-mode').change(function(){

        const acionado = $(this).prop('checked');

        if(acionado == true){

            $('body').css({'background-color':'black'});
            $('#container-geral').css({'background-color':'black', 
                                       'border-color': '#00fff5'
            });
            $('.btn-primary').css({'background-color':'#00fff5', 
                                   'color': 'black',
                                   'font-weight': 'bold'
            });
            $('.btn-warning').css({'background-color':'#e9ff00', 
                                   'color': 'black',
                                   'font-weight': 'bold'
            });
            $('.btn-danger').css({'background-color':'#f00', 
                                   'color': 'black',
                                   'font-weight': 'bold'
            });
            $('.btn-success').css({'background-color':'#39ff00', 
                                  'color': 'black',
                                  'font-weight': 'bold'
            });           
            $('#display').css({'background-color':'black',                                  
                                  'font-weight': 'bold',
                                  'border-color':'#00fff5',
                                  'color':'white'
            });
            $('#mode').css({'color': 'white'});
            $('#copy-area').css({'background-color':'#272727',                                  
                                 'font-weight': 'bold',
                                 'color':'white'
            });

        }else{

            $('body').css({'background-color':'white'});
            $('#container-geral').css({'background-color':'rgb(169, 222, 252)', 
                                       'border-color': 'black'
            });
            $('.btn-primary').css({'background-color':'#007bff', 
                                   'color': 'white',
                                   'font-weight': 'normal'
            });
            $('.btn-warning').css({'background-color':'#ffc107', 
                                   'color': 'black',
                                   'font-weight': 'normal'
            });
            $('.btn-danger').css({'background-color':'#dc3545', 
                                   'color': 'white',
                                   'font-weight': 'normal'
            });
            $('.btn-success').css({'background-color':'#28a745', 
                                  'color': 'white',
                                  'font-weight': 'normal'
            });
            
            $('#display').css({'background-color':'#e9ecef',                                  
                                  'font-weight': 'normal',
                                  'border-color':'black',
                                  'color':'black'
            });
            $('#mode').css({'color': 'black'});
            $('#copy-area').css({'background-color':'rgba(195, 231, 255, 0.616)',                                  
                                 'font-weight': 'normal',
                                 'color':'black'
            });
        }
    });
});