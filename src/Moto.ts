export class Moto {

    private tamanho: number;
    private cor: string;
    private tanque: number;

    public constructor(_tamanho: number, _cor: string, _tanque: number) {
        this.tamanho = _tamanho;
        this.cor = _cor;
        this.tanque = _tanque;
    }

    public getTamanho(): number{
        return this.tamanho;
    }

    public setTamanho(_tamanho: number): void {
        this.tamanho = _tamanho;
    }

    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public getTanque(): number {
        return this.tanque;
    }

    public setTanque(_tanque: number): void {
        this.tanque = _tanque;
    }
    public locomocao(moto: string): void  {
        console.log(` lucas dirigiu a ${moto} até o mercado `);
    }

    public darGrau(): void {
        console.log(`Rafaela caiu dando grau`);
    }
}