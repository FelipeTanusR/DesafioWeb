class Nome {

    static validarNome(nome){ 
        const regex = /^([A-Za-z]{6,}|([A-Za-z]+\s[A-Za-z]+))$/;

        if (!nome.match(regex)) {
            return false;
        }
        return true;
    }
}

if (typeof exports !== 'undefined') {
    module.exports = Nome;
}
