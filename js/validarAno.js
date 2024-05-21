class Ano {

    static validarAno(ano){ 
        const currentYear = new Date().getFullYear();
        const minYear = currentYear - 120;

        if (isNaN(ano) || ano < minYear || ano > currentYear) {
            return false;
        }
        return true;
    }
}

if (typeof exports !== 'undefined') {
    module.exports = Ano;
}
