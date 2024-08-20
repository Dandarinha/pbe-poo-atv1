export class Latalixo {

    private tamanho: number;
    private cor: string;
    private formato: string;

    public constructor(_tamanho: number, _cor: string, _formato: string) {
        this.tamanho = _tamanho;
        this.cor = _cor;
        this.formato = _formato;
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

    public getFormato(): string {
        return this.formato;
    }

    public setFormato(_formato: string): void {
        this.formato = _formato;
    }
    public armazenarLiquido(garrafa: string): void  {
        console.log(`Inez colocou agua em sua ${garrafa}`);
    }

    public confeccionaritens(): void {
        console.log(`A garrafa foi usada para fazer um chuveirao de "banho"`);
    }
}