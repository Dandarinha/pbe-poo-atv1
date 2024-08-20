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
    public separarambiente(janela: string): void  {
        console.log(`Beatriz colocou uma ${janela} na sua sala para entrar a luz da varanda`);
    }

    public iluminar(): void {
        console.log(`A janela foi aberta para entrar luz no ambiente`);
    }
}