//criando os objetos dos elementos de texto do form

var nome = document.querySelector("#inputName");
var nomeHelp = document.querySelector("#inputNameHelp");
var ano = document.querySelector("#inputYear");
var anoHelp = document.querySelector("#inputYearHelp");
var email = document.querySelector("#inputEmail");
var emailHelp = document.querySelector('#inputEmailHelp');
var senha = document.querySelector("#inputPassword");
var senhaHelp = document.querySelector("#inputPasswordHelp");
var barraSenha = document.getElementById("passStrengthMeter");

const button = document.getElementsByClassName("btn btn-primary");

/*declarando o evento listener para o campos de texto do form. 
Uma vez o foco do campo inputName mude, será chamada a função validarNome*/
nome.addEventListener('focusout', validarNome);

/*declaração tradicional de função validarNome(e)
'e' é o objeto do tipo evento que contém, alpem de outras propriedades, o objeto que iniciou o evento,
neste caso o objeto 'nome'
*/

function validarNome(e){ 
    //declaração da expressão regular para definir o formato de um nome válido
    const regexNome = /^([A-Za-z]{6,}|([A-Za-z]+\s[A-Za-z]+))$/;
    
    console.log(e); //impressão em console do objeto evento e
    console.log(e.target.value); //impressão em console do valor do objeto 'nome' que originou o evento   

    if(e.target.value.trim().match(regexNome)==null){
        //muda o conteúdo e o estilo do objeto nomeHelp que referencia o elemento html com id=inputNameHelp
        nomeHelp.textContent = "Formato de nome inválido"; 
        nomeHelp.style.color = "red";
        return false;
    }
    else{
        nomeHelp.textContent = "";
        return true;
    }       
}



/*declarando o evento listener para o campos de texto do form. 
Uma vez o foco seja mudado, será chamada a função validarNome*/

//declaração de função de forma anônima usando uma expressão de função de seta =>

ano.addEventListener('focusout', validarAno) 

validarAno(ano){ 
    //declaração da expressão regular para definir o formato de um ano válido
    const regexAno = /^[0-9]{4}$/;
    //tirar (trim) espaços em branco antes e depois da string
    const anoTrimado = ano.value.trim();
    console.log(ano.value);

    if(anoTrimado.match(regexAno)==null){
        //muda o conteúdo e o estilo do objeto nomeHelp que referencia o elemento html com id=inputYearHelp
        anoHelp.textContent = "Formato de ano inválido";
        anoHelp.style.color = "red";
        return false;
    }
    else{
        //objeto Date
        var date = new Date();
        //obtem o ano atual
        console.log(date.getFullYear()); 
        
        if( parseInt(anoTrimado) > 2022 ){
             //muda o conteúdo e o estilo do objeto nomeHelp que referencia o elemento html com id=inputYearHelp
            anoHelp.textContent = `Ano inválido. O ano não pode ser maior que 2022.`;
            anoHelp.style.color = "red";
            return false;
        }
        else if( parseInt(anoTrimado) < 1900){
             //muda o conteúdo e o estilo do objeto nomeHelp que referencia o elemento html com id=inputYearHelp
            anoHelp.textContent = `Ano inválido. O ano não pode ser menor que 1900.`;
            anoHelp.style.color = "red";
            return false;
        }
        else{
            anoHelp.textContent = "";
            return true;
        }        
        
    }
}

//declara eventilistener para a funcao de validacao de email
email.addEventListener('focusout', validarEmail);

function validarEmail(e){ 
    
    //inicializa o regex do email
    const regexEmail = /^[\w-\.\d*]+@[\w\d]+(\.[c][o][m]|\.[n][e][t]|\.[o][r][g]|\.[b][r])$/;
    
    console.log(e); 
    console.log(e.target.value); 

    //testa o valor da barra de email para o regexemail
    if(e.target.value.trim().match(regexEmail)==null){
      
        //imprime o texto de falha
        emailHelp.textContent = "Formato de email inválido"; 
        emailHelp.style.color = "red";
        return false;
    }
    else{
        emailHelp.textContent = "";
        return true;
    }       
}

//declara o eventlistener para a funao de validacao de senha
senha.addEventListener('focusout', validarSenha);

function validarSenha(e){ 
    //inicializa as variaveis regex de teste, utilizando o nome e ano como valores
    const regexAno = new RegExp(ano.value);
    const regexNome = new RegExp(nome.value.toLowerCase());
    //inicializa os regex de senha minima, fraca, media e forte
    const regexSenhamin = /(?=.*[!@#$%()}{,.^?~=+\-_\/*\-+.\|])(?=.*[a-zA-Z])(?=.*[0-9]).{6,20}.$/;
    const regexSenhaFraca = /(?=.*[!@#$%()}{,.^?~=+\-_\/*\-+.\|])(?=.*[0-9]).{6,8}.$/;
    const regexSenhaMedia =  /(?=.*[!@#$%()}{,.^?~=+\-_\/*\-+.\|])(?=.*[A-Z])(?=.*[0-9]).{8,}.$/;
    const regexSenhaForte = /(?=.*[!@#$%()}{,.^?~=+\-_\/*\-+.\|]{2,})(?=.*[A-Z]{2,})(?=.*[0-9]{2,}).{12,}.$/ ;
    

    console.log(e); 
    console.log(e.target.value); 


    
    //verifica se a senha bate com os requisitos minimos, ou se possui o nome ou o ano
    if(e.target.value.trim().match(regexSenhamin)==null||regexNome.test(senha.value.toLowerCase())||regexAno.test(senha.value)){
        
        //imprime o erro
        senhaHelp.textContent = "Formato de senha inválida"; 
        senhaHelp.style.color="red";
        barraSenha.value = 0;
        return false;
    } 
    //verifica se bate com a senha forte
    else if(e.target.value.trim().match(regexSenhaForte)!==null){
       
        senhaHelp.textContent = "Senha Forte";
        barraSenha.value = 30;
        return true;
    } 
    //verifica se bate com a senha media
    else if(e.target.value.trim().match(regexSenhaMedia)!==null){
       
        senhaHelp.textContent = "Senha Média";
        barraSenha.value = 21;
        return true;
    } 
    //verifica se bate com a senha fraca
    else if(e.target.value.trim().match(regexSenhaFraca)!==null){
       
        senhaHelp.textContent = "Senha Fraca";
        barraSenha.value = 11;
        return true;
    }         
}


button.addEventListener('click', function () {
    // Display the prompt when the button is clicked
    let vnome = this.validarNome(nome);
    let vano = this.validarAno(ano);
    let vemail = this.validarEmail(email);
    let vsenha = this.validarSenha(senha);


    if (vnome && vano&& vemail&& vsenha) {
        document.getElementById("inputResult").innerHTML = "Seus dados foram registrados";
    } else {
        document.getElementById("inputResult").innerHTML = "Seus dados não foram registrados";
    }



});