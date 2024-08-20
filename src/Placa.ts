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
    public indicar(placa : string): void  {
        console.log(`Maria utilizou a placa ${placa} se informar na rua`);
    }

    public sinalizar(): void {
        console.log(`julia utilizou a placa para nao se perder`);
    }
}