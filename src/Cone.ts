export class Cone {

    private tamanho: number;
    private cor: string;
    private base: number;

    public constructor(_tamanho: number, _cor: string, _base: number) {
        this.tamanho = _tamanho;
        this.cor = _cor;
        this.base = _base;
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

    public getBase(): number {
        return this.base;
    }

    public setBase(_base: number): void {
        this.base = _base;
    }
    public sinalizar(cone : string): void  {
        console.log(`Maria usou o ${cone} para sinalizar rua com buraco`);
    }

    public utilizadoParaAtividade(): void {
        console.log(`Professora usou o cone para as crianças correr em volta`);
    }
}