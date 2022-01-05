
export class Coracao {

    public isCheio: boolean;
    public urlCoracaoCheio: string; 
    public urlCoracaoVazio: string;

    constructor(isCheio: boolean, urlCoracaoCheio: string, urlCoracaoVazio: string) {
        this.isCheio = isCheio;
        this.urlCoracaoCheio = urlCoracaoCheio;
        this.urlCoracaoVazio = urlCoracaoVazio;
    }

    public exibeCoracao() : string {
        if(this.isCheio) {
            return this.urlCoracaoCheio;
        } else {
            return this.urlCoracaoVazio;
        }
    }

}