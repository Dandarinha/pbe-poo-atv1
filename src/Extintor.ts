export class Extintor {

    private formato: string;
    private cor: string;
    private tamanho: number;

    public constructor(_formato: string, _cor: string, _tamanho: number) {
        this.formato  = _formato;
        this.cor = _cor;
        this.tamanho = _tamanho;
    }

    public getFormato():string{
        return this.formato;
    }

    public setFormato(_formato: string): void {
        this.formato = _formato;
    }

    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public getTamanho(): number{
        return this.tamanho;
    }

    public setTamanho(_tamanho: number): void {
        this.tamanho = _tamanho;
    }

    public salvarVida( extintor: string): void  {
        console.log(` O bombeiro utiliza ${extintor} para salvar vida`);
    }

    public apagarFogo(): void {
        console.log(`O fogo foi apagado`);
    }
}