export class Casaco {

    private modelo: string;
    private cor: string;
    private marca: string;

    public constructor(_modelo: string, _cor: string, _marca: string) {
        this.modelo  = _modelo ;
        this.cor = _cor;
        this.marca = _marca;
    }

    public getModelo():string{
        return this.modelo;
    }

    public setModeloo(_modelo: string): void {
        this.modelo = _modelo;
    }

    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(_marca: string): void {
        this.marca = _marca;
    }

    public Proteger( casaco: string): void  {
        console.log(`O ${casaco} protege do frio`);
    }

    public vestir(): void {
        console.log(`A menina ira vestir o casaco`);
    }
}