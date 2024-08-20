export class Cadeira {

    private tamanho: number;
    private cor: string;
    private modelo: string;

    public constructor(_tamanho: number, _cor: string, _modelo: string) {
        this.tamanho = _tamanho;
        this.cor = _cor;
        this.modelo = _modelo;
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
        this.cor= _cor;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(_modelo: string): void {
        this.modelo = _modelo;
    }
    public sentar(cadeira: string): void  {
        console.log(`Maria sentou-se na ${cadeira} quebrada`);
    }

    public decorar(): void {
        console.log(`A decoradora usou a cadeira para por na sala de reunião`);
    }
}