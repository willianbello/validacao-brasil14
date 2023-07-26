import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class ValidacaoBrasil {

    static cpf(required: boolean = true): ValidatorFn {

        return (control: AbstractControl): ValidationErrors | null => {

            const valorCpf = control.value.toString();
            const numeroCpf = valorCpf.replace(/([^0-9])/g, '');

            if (!required && (numeroCpf.length == 0 || !numeroCpf)) {
                return null;
            }

            if (required && (numeroCpf.length == 0 || !numeroCpf)) {
                return { required: true };
            }

            if (
                numeroCpf.length != 11
                || [
                    '00000000000',
                    '11111111111',
                    '22222222222',
                    '33333333333',
                    '44444444444',
                    '55555555555',
                    '66666666666',
                    '77777777777',
                    '88888888888',
                    '99999999999',
                ].filter(numerosTeste => numerosTeste == numeroCpf).length > 0
                || cpfInvalido(numeroCpf)
            ) {
                return { cpf: true };
            }

            return null;
        }
    }

    static cnpj(required: boolean = true): ValidatorFn {

        return (control: AbstractControl): ValidationErrors | null => {

            const valorCnpj = control.value.toString();
            const numeroCnpj = valorCnpj.replace(/([^0-9])/g, '');

            if (!required && (numeroCnpj.length == 0 || !numeroCnpj)) {
                return null;
            }

            if (required && (numeroCnpj.length == 0 || !numeroCnpj)) {
                return { required: true };
            }

            if (
                numeroCnpj.length != 14
                || [
                    '00000000000000',
                    '11111111111111',
                    '22222222222222',
                    '33333333333333',
                    '44444444444444',
                    '55555555555555',
                    '66666666666666',
                    '77777777777777',
                    '88888888888888',
                    '99999999999999',
                ].filter(numerosTeste => numerosTeste == numeroCnpj).length > 0
                || cnpjInvalido(numeroCnpj)
            ) {
                return { cnpj: true };
            }

            return null;
        }
    }

    static cep(required: boolean = true): ValidatorFn {

        return (control: AbstractControl): ValidationErrors | null => {

            const valorCep = control.value.toString();
            const numeroCep = valorCep.replace(/([^0-9])/g, '');

            if (!required && (numeroCep.length == 0 || !numeroCep)) {
                return null;
            }

            if (required && (numeroCep.length == 0 || !numeroCep)) {
                return { required: true };
            }

            if (
                numeroCep.length != 8
                || [
                    '00000000',
                    '11111111',
                    '22222222',
                    '33333333',
                    '44444444',
                    '55555555',
                    '66666666',
                    '77777777',
                    '88888888',
                    '99999999',
                ].filter(numerosTeste => numerosTeste == numeroCep).length > 0
            ) {
                return { cep: true };
            }

            return null;
        }
    }

    static telefone(required: boolean = false, comDDD: boolean = true, digitosDDD3: boolean = false): ValidatorFn {

        return (control: AbstractControl): ValidationErrors | null => {

            let tamMax = 0;

            if (comDDD && !digitosDDD3) {
                tamMax = 10;
            } else if (comDDD && digitosDDD3) {
                tamMax = 11;
            } else {
                tamMax = 8;
            }

            const valorTelefone = control.value.toString();
            const numeroTelefone = valorTelefone.replace(/([^0-9])/g, '');

            if (!required && (numeroTelefone.length == 0 || !numeroTelefone)) {
                return null;
            }

            if (required && (numeroTelefone.length == 0 || !numeroTelefone)) {
                return { required: true };
            }

            if (comDDD && !digitosDDD3 && numeroTelefone.length != 10) {
                return { telefone: true };
            }
            if (comDDD && digitosDDD3 && numeroTelefone.length != 11) {
                return { telefone: true };
            }
            if (!comDDD && numeroTelefone.length != 8) {
                return { telefone: true };
            }

            return null;
        }
    }

    static celular(required: boolean = true, comDDD: boolean = true, digitosDDD3: boolean = false): ValidatorFn {

        return (control: AbstractControl): ValidationErrors | null => {

            let tamMax = 0;

            if (comDDD && !digitosDDD3) {
                tamMax = 10;
            } else if (comDDD && digitosDDD3) {
                tamMax = 11;
            } else {
                tamMax = 8;
            }

            const valorCelular = control.value.toString();
            const numeroCelular = valorCelular.replace(/([^0-9])/g, '');

            if (!required && (numeroCelular.length == 0 || !numeroCelular)) {
                return null;
            }
            if (required && (numeroCelular.length == 0 || !numeroCelular)) {
                return { required: true };
            }

            if (comDDD && digitosDDD3 && numeroCelular.length >= 4 && numeroCelular[3] != 9) {
                return { nove: true };
            }

            if (comDDD && !digitosDDD3 && numeroCelular.length >= 3 && numeroCelular[2] != 9) {
                return { nove: true };
            }

            if (!comDDD && numeroCelular.length >= 1 && numeroCelular[0] != 9) {
                return { nove: true };
            }

            if (comDDD && !digitosDDD3 && numeroCelular.length != 11) {
                return { celular: true };
            }
            if (comDDD && digitosDDD3 && numeroCelular.length != 12) {
                return { celular: true };
            }
            if (!comDDD && numeroCelular.length != 9) {
                return { celular: true };
            }

            return null;
        }
    }

    static tituloEleitor(required: boolean = true): ValidatorFn {

        return (control: AbstractControl): ValidationErrors | null => {

            const valorTitulo = control.value.toString();
            const numeroTitulo = valorTitulo.replace(/([^0-9])/g, '');

            if (!required && (numeroTitulo.length == 0 || !numeroTitulo)) {
                return null;
            }

            if (required && (numeroTitulo.length == 0 || !numeroTitulo)) {
                return { required: true };
            }

            if (
                numeroTitulo.length != 12
                || [
                    '000000000000',
                    '111111111111',
                    '222222222222',
                    '333333333333',
                    '444444444444',
                    '555555555555',
                    '666666666666',
                    '777777777777',
                    '888888888888',
                    '999999999999',
                ].filter(numerosTeste => numerosTeste == numeroTitulo).length > 0
                || tituloEleitorInvalido(numeroTitulo)
            ) {
                return { titulo: true };
            }

            return null;
        }
    }

    static data(required: boolean = true, ano4Digitos: boolean = true, min?: string | null, max?: string | null): ValidatorFn {

        return (control: AbstractControl): ValidationErrors | null => {

            const valorData = control.value.toString();
            const numeroData = valorData.replace(/([^0-9])/g, '');

            const numeroDataMin = min?.replace(/([^0-9])/g, '');
            const numeroDataMax = max?.replace(/([^0-9])/g, '');

            if (!required && (numeroData.length == 0 || !numeroData)) {
                return null;
            }

            if (required && (numeroData.length == 0 || !numeroData)) {
                return { required: true };
            }

            if (
                (numeroData.length != 6 && numeroData.length != 8)
                || (dataInvalida(numeroData) && !min && !max)
                || (numeroData.length != 8 && ano4Digitos)
            ) {
                return { data: true };
            }

            if (min && !max) {

                return validaDataMin(numeroData, numeroDataMin) ? { min: true } : null;

            } else if (!min && max) {

                return validaDataMax(numeroData, numeroDataMax) ? { max: true } : null;

            } else if (min && max) {

                return validaDataRange(numeroData, numeroDataMin, numeroDataMax) ? { range: true } : null;

            }

            return null;
        }
    }
}

function cpfInvalido(numeroCpf: any): boolean {
    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
        soma += parseInt(numeroCpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(numeroCpf.substring(9, 10))) {
        return true; // Primeiro dígito verificador inválido
    }

    soma = 0;

    for (let i = 1; i <= 10; i++) {
        soma += parseInt(numeroCpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(numeroCpf.substring(10, 11))) {
        return true; // Segundo dígito verificador inválido
    }

    return false; // CPF válido
}

function cnpjInvalido(numeroCnpj: any): boolean {

    let tamanho = numeroCnpj.length - 2;
    let numeros = numeroCnpj.substring(0, tamanho);
    const digitos = numeroCnpj.substring(tamanho);
    let soma = 0;
    let posicao = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += parseInt(numeros.charAt(tamanho - i)) * posicao--;
        if (posicao < 2) {
            posicao = 9;
        }
    }

    let result = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (result !== parseInt(digitos.charAt(0))) {
        return true; // Primeiro dígito verificador inválido
    }

    tamanho += 1;
    numeros = numeroCnpj.substring(0, tamanho);
    soma = 0;
    posicao = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += parseInt(numeros.charAt(tamanho - i)) * posicao--;
        if (posicao < 2) {
            posicao = 9;
        }
    }

    result = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (result !== parseInt(digitos.charAt(1))) {
        return true; // Segundo dígito verificador inválido
    }

    return false; // CNPJ válido
}

function tituloEleitorInvalido(titulo: any): boolean {

    // Obter o dígito verificador
    const digitoVerificador = parseInt(titulo.slice(-2), 10);

    // Obter a sequência de dígitos utilizados para calcular o dígito verificador
    const base = titulo.slice(0, 10).split('').map(Number);

    // Calcular o dígito verificador utilizando o algoritmo de Módulo 11
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += base[i] * (9 - i);
    }
    const resto = soma % 11;
    const digitoCalculado = (resto === 0 || resto === 1) ? 0 : 11 - resto;

    // Verificar se o dígito verificador está correto
    if (digitoCalculado !== digitoVerificador) {
        return true;
    }

    return false;
}

function dataInvalida(data: string): boolean {
    let dataLength: number = data.length;

    let dia, mes, ano;

    if (dataLength >= 6 && dataLength <= 8) {
        dia = data.substring(0, 2);
        mes = data.substring(2, 4);
        ano = data.substring(4);

        let testeData = new Date(`${mes}/${dia}/${ano}`);

        return Number.isNaN(testeData.getTime());
    } else {
        return true;
    }
}

function validaDataMin(data: string, min: string | undefined): boolean {
    let dataLength: number = data.length;

    let dia, mes, ano;
    let diaMin, mesMin, anoMin;

    if (min && min.length && min.length >= 6 && min.length <= 8) {

        diaMin = min.substring(0, 2);
        mesMin = min.substring(2, 4);
        anoMin = min.substring(4);
    }

    if (dataLength >= 6 && dataLength <= 8) {
        dia = data.substring(0, 2);
        mes = data.substring(2, 4);
        ano = data.substring(4);

        let testeData = new Date(`${mes}/${dia}/${ano}`);
        let testeDataMin = new Date(`${mesMin}/${diaMin}/${anoMin}`);

        if (!Number.isNaN(testeData.getTime())) {
            if (Number.isNaN(testeDataMin.getTime())) {
                throw new Error('Data Mínima no Validator é inválida');
            } else {
                return testeData < testeDataMin;
            }
        }

        return true;
    } else {
        return true;
    }
}

function validaDataMax(data: string, max: string | undefined): boolean {
    let dataLength: number = data.length;

    let dia, mes, ano;
    let diaMax, mesMax, anoMax;

    if (max && max.toString() && max.toString().length >= 6 && max.toString().length <= 8) {
        diaMax = max.toString().substring(0, 2);
        mesMax = max.toString().substring(2, 4);
        anoMax = max.toString().substring(4);
    }

    if (dataLength >= 6 && dataLength <= 8) {
        dia = data.substring(0, 2);
        mes = data.substring(2, 4);
        ano = data.substring(4);

        let testeData = new Date(`${mes}/${dia}/${ano}`);
        let testeDataMax = new Date(`${mesMax}/${diaMax}/${anoMax}`);

        if (!Number.isNaN(testeData.getTime())) {
            if (Number.isNaN(testeDataMax.getTime())) {
                throw new Error('Data Máxima no Validator é inválida');
            } else {
                return testeData > testeDataMax;
            }
        }

        return true;
    } else {
        return true;
    }
}

function validaDataRange(data: string, min: string | undefined, max: string | undefined): boolean {
    let dataLength: number = data.length;

    let dia, mes, ano;
    let diaMin, mesMin, anoMin;
    let diaMax, mesMax, anoMax;

    if (min && min.toString() && min.toString().length >= 6 && min.toString().length <= 8) {
        diaMin = min.toString().substring(0, 2);
        mesMin = min.toString().substring(2, 4);
        anoMin = min.toString().substring(4);
    }

    if (max && max.toString() && max.toString().length >= 6 && max.toString().length <= 8) {
        diaMax = max.toString().substring(0, 2);
        mesMax = max.toString().substring(2, 4);
        anoMax = max.toString().substring(4);
    }

    if (dataLength >= 6 && dataLength <= 8) {
        dia = data.substring(0, 2);
        mes = data.substring(2, 4);
        ano = data.substring(4);

        let testeData = new Date(`${mes}/${dia}/${ano}`);
        let testeDataMin = new Date(`${mesMin}/${diaMin}/${anoMin}`);
        let testeDataMax = new Date(`${mesMax}/${diaMax}/${anoMax}`);

        if (!Number.isNaN(testeData.getTime())) {
            if (Number.isNaN(testeDataMin.getTime())) {
                throw new Error('Data Mínima no Validator é inválida');
            }
            if (Number.isNaN(testeDataMax.getTime())) {
                throw new Error('Data Máxima no Validator é inválida');
            } else {
                return testeData > testeDataMax || testeData < testeDataMin;
            }
        }

        return true;
    } else {
        return true;
    }
}