import { ElementRef } from "@angular/core";

export class Utils {
    static soLetras(event: KeyboardEvent) {
        return /([A-Za-z])/g.test(event.key) ? true : false;
    }

    static soNumeros(event: KeyboardEvent) {
        return /([0-9])/g.test(event.key) ? true : false;
    }

    static soNumerosComPonto(event: KeyboardEvent) {
        return /([0-9]|\.)/g.test(event.key) ? true : false;
    }

    static soNumerosComVirgula(event: KeyboardEvent) {
        return /([0-9]|\,)/g.test(event.key) ? true : false;
    }

    static backSpace(event: KeyboardEvent) {
        switch (event.key) {
            case 'Backspace':
                return true
            default:
                return false;
        }
    }

    static setasEBackSpace(event: KeyboardEvent) {
        switch (event.key) {
            case 'Backspace':
                return true
            case 'ArrowLeft':
                return true
            case 'ArrowRight':
                return true
            default:
                return false;
        }
    }

    static setasEBackSpaceESpace(event: KeyboardEvent) {
        
        switch (event.key) {
            case 'Backspace':
                return true
            case 'ArrowLeft':
                return true
            case 'ArrowRight':
                return true
            case ' ':
                return true
            default:
                return false;
        }
    }

    static retornaSoNumero(frase: string) {
        return frase.replace(/([^0-9])/g, '');
    }

    static retornaSoLetras(frase: string) {
        return frase.replace(/([^A-Za-z])/g, '');
    }

    static addMascaraCpf(numeros: string, tamMax: number): string {

        if (numeros.length < tamMax) {
            numeros =
                numeros
                    .replace(/\D/g, '')
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d{1,2})/, '$1-$2');
        }

        return numeros;
    }

    static addMascaraCnpj(numeros: string, tamMax: number) {

        if (numeros.length < tamMax) {
            numeros =
                numeros
                    .replace(/\D/g, '')
                    .replace(/(\d{2})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d{2})/, '$1/$2')
                    .replace(/(\d{4})(\d{1,2})/, '$1-$2');
        }

        return numeros;
    }

    static addMascaraCep(numeros: string, tamMax: number) {

        if (numeros.length < tamMax) {
            numeros =
                numeros
                    .replace(/\D/g, '')
                    .replace(/(\d{5})(\d)/, '$1-$2')
                    .replace(/^(\d{5})(\d{1,2,3})/, '$1-$2');
        }

        return numeros;
    }

    static addMascaraTelefone(numeros: string, tamMax: number, ddd: boolean = true, ddd3Digitos: boolean = false) {

        if (numeros.length < tamMax) {

            if (ddd && !ddd3Digitos) {
                numeros =
                    numeros
                        .replace(/\D/g, '')
                        .replace(/(\d{2})(\d)/, '($1) $2')
                        .replace(/(\d{4})(\d)/, '$1-$2');

            } else if (ddd && ddd3Digitos) {
                numeros =
                    numeros
                        .replace(/\D/g, '')
                        .replace(/(\d{3})(\d)/, '($1) $2')
                        .replace(/(\d{4})(\d)/, '$1-$2');

            } else {
                numeros =
                    numeros
                        .replace(/\D/g, '')
                        .replace(/(\d{4})(\d)/, '$1-$2');

            }

        }

        return numeros;
    }

    static addMascaraCelular(numeros: string, tamMax: number, ddd: boolean = true, ddd3Digitos: boolean = false) {

        if (numeros.length < tamMax) {

            if (ddd && !ddd3Digitos) {
                numeros =
                    numeros
                        .replace(/\D/g, '')
                        .replace(/(\d{2})(\d)/, '($1) $2')
                        .replace(/(\d{5})(\d)/, '$1-$2');

            } else if (ddd && ddd3Digitos) {
                numeros =
                    numeros
                        .replace(/\D/g, '')
                        .replace(/(\d{3})(\d)/, '($1) $2')
                        .replace(/(\d{4})(\d)/, '$1-$2');

            } else {
                numeros =
                    numeros
                        .replace(/\D/g, '')
                        .replace(/(\d{5})(\d)/, '$1-$2');
            }
        }

        return numeros;
    }

    static addMascaraData(data: string, tamMax: number) {

        if (data.length < tamMax) {
            data =
                data
                    .replace(/\D/g, '')
                    .replace(/(\d{2})(\d)/, '$1/$2')
                    .replace(/(\d{2})(\d)/, '$1/$2');
        }

        return data;
    }

    static addMascaraTituloEleitor(titulo: string, tamMax: number) {

        if (titulo.length < tamMax) {
            titulo =
                titulo
                    .replace(/\D/g, '')
                    .replace(/(\d{4})(\d)/, '$1 $2')
                    .replace(/(\d{4})(\d)/, '$1 $2');
        }

        return titulo;
    }
}