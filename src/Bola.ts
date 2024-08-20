export class Bola {

    private tamanho: number;
    private modelo: string;
    private marca: string;

    public constructor(_tamanho: number, _modelo: string, _marca: string) {
        this.tamanho = _tamanho;
        this.modelo = _modelo;
        this.marca = _marca;
    }

    public getTamanho(): number{
        return this.tamanho;
    }

    public setTamanho(_tamanho: number): void {
        this.tamanho = _tamanho;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(_modelo: string): void {
        this.modelo= _modelo;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(_marca: string): void {
        this.marca = _marca;
    }
    public jogar(pessoa: string): void  {
        console.log(`A ${pessoa} jogou a bola`);
    }

    public chutar(): void {
        console.log(`A bola esta nos pés`);
    }
}