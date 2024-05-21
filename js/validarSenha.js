class Senha {
    static verificarQuantidade(expressao, palavra) {
        return palavra.match(expressao) ? palavra.match(expressao).length : 0; //operadores ternarios
    }
    
    static validarSenha(primeiroNome, anoDeNascimento, senha) {
        primeiroNome = String(primeiroNome);
        senha = String(senha);
        anoDeNascimento = String(anoDeNascimento);
    
        // Expressões regulares
        const expLetra = /[a-zA-ZçÇ]/g;
        const expNum = /\d/g;
        const expCarEspecial = /[!@#%&$+]/g;
        const expMaiuscula = /[A-ZÇ]/g;
    
        // Quantidades de letras, números e caracteres especiais na senha
        const qtdLetra = this.verificarQuantidade(expLetra, senha);
        const qtdNumero = this.verificarQuantidade(expNum, senha);
        const qtdCarEspecial = this.verificarQuantidade(expCarEspecial, senha);
        const qtdMaiuscula = this.verificarQuantidade(expMaiuscula, senha);
    
        // Validar se o comprimento da senha está entra 6 e 20 caracteres
        if (!(senha.length >= 6 && senha.length <= 20)) {
            return false;
        }
    
        // Senha não deve conter o primeiroNome nem o anoDeNascimento 
        if (senha.includes(primeiroNome) || senha.includes(anoDeNascimento)) {
            return false;
        }
    
        // A senha deve conter pelo menos uma letra, um número e um caracter especial
        if (qtdLetra > 0 && qtdNumero > 0 && qtdCarEspecial > 0) {
            // Calcular a força da senha: fraca, moderada, forte
            if (senha.length >= 13 && qtdCarEspecial > 1 && qtdMaiuscula > 1 && qtdNumero > 1) {
                return 'forte';
            } else if (senha.length >= 9 && qtdMaiuscula > 0) {
                return 'moderada';
            } else {
                return 'fraca';
            }
        } else {
            return false;
        }
    }
}

if (typeof exports !== 'undefined') {
    module.exports = Senha;
}
