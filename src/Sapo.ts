export class Sapo {

    private especie: string;
    private cor: string;
    private tamanho: number;

    public constructor(_especie: string, _cor: string, _tamanho: number) {
        this.especie= _especie;
        this.cor = _cor;
        this.tamanho = _tamanho;
    }

    public getEspecie(): string {
        return this.especie;
    }

    public setEspecie(_especie: string): void {
        this.especie = _especie;
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

    public coaxar(animal: string): void  {
        console.log(`o ${animal} tem o som de coaxar`);
    }

    public pular(): void {
        console.log(`o sapo pulou`);
    }
}