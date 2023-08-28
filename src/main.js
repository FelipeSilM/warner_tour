$(document).ready(function(){
    $("#telefone").mask('(00) 00000-0000', {
        placeholder:  "(00) 00000-0000"
    })
    $('form').validate({
        rules: {
            nome:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            telefone:{
                required:false
            },
            mensagem: {
                required:true
            }
        },
        messages:{
            nome:'Nos informe seu nome',
            email:'Por favor, insira um e-mail válido',
            mensagem:'Conte-nos sua dúvida'
        },
        
    })
})