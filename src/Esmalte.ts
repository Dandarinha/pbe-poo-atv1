export class Esmalte {

    private cor: string;
    private formato: string;
    private marca: string;

    public constructor(_cor: string, _formato: string, _marca: string) {
        this.cor = _cor;
        this.formato = _formato;
        this.marca = _marca;
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

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(_marca: string): void {
        this.marca = _marca;
    }

    public pintaraunha(pessoa: string): void  {
        console.log(`A ${pessoa} pintou a unha`);
    }

    public protegerunha(): void {
        console.log(`cuidar da unha`);
    }
}