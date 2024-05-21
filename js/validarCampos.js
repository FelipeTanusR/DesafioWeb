function validarCampos() {

    let nome = document.getElementById("inputName").value;
    let email = document.getElementById("inputEmail").value;
    let senha = document.getElementById("inputPassword").value;
    let ano = document.getElementById("inputYear").value;

    let nomeValidation = Nome.validarNome(nome);
    let emailValidation = Email.validarEmail(email);
    let yearValidation = Ano.validarAno(ano);

    if(nomeValidation === false){
        document.getElementById("inputNameHelp").innerHTML = "Nome inválido";
        document.getElementById("inputNameHelp").style.color = "red";
    } 
    else{
        document.getElementById("inputNameHelp").innerHTML = "";
    }

    if(emailValidation === false){
        document.getElementById("inputEmailHelp").innerHTML = "Formato inválido";
        document.getElementById("inputEmailHelp").style.color = "red";
    } 
    else{
        document.getElementById("inputEmailHelp").innerHTML = "";
    }

    if(yearValidation === false){
        document.getElementById("inputYearHelp").innerHTML = "Ano inválido";
        document.getElementById("inputYearHelp").style.color = "red";
    }
    else{
        document.getElementById("inputYearHelp").innerHTML = "";
    }

    let passStrength = Senha.validarSenha(nome,ano,senha);
    
    switch (passStrength) {
        case false:
            document.getElementById("inputPasswordHelp").innerHTML = "Senha inválida";
            document.getElementById("inputPasswordHelp").style.color = "red";
            document.getElementById("passStrengthMeter").value = 0;
            break;
        case 'fraca':
            document.getElementById("inputPasswordHelp").innerHTML = "Senha Fraca";
            document.getElementById("passStrengthMeter").value = 10;
            break;
        case 'moderada':
            document.getElementById("inputPasswordHelp").innerHTML = "Senha Moderada";
            document.getElementById("passStrengthMeter").value = 20;
            break;
        case 'forte':
            document.getElementById("inputPasswordHelp").innerHTML = "Senha Forte";
            document.getElementById("passStrengthMeter").value = 30;
            break;
    }

    if (nomeValidation && emailValidation && yearValidation && passStrength) {
        document.getElementById("inputResult").innerHTML = "Seus dados foram registrados";
    } else {
        document.getElementById("inputResult").innerHTML = "Seus dados não foram registrados";
        document.getElementById("inputResult").style.color = "red";
    }
}
