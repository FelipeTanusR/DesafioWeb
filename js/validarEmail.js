class Email {

    static validarEmail(email){ 
        const regex = /^[\w-\.\d*]+@[\w\d]+(\.[c][o][m]|\.[n][e][t]|\.[o][r][g]|\.[b][r])$/i;

        if (!email.match(regex)) {
            return false;
        }
        return true;
    }
}

if (typeof exports !== 'undefined') {
    module.exports = Email;
}
