export class Notebook {

    private modelo: string;
    private sistema: string;
    private marca: string;

    public constructor(_modelo: string, _sistema: string, _marca: string) {
        this.modelo  = _modelo ;
        this.sistema = _sistema;
        this.marca = _marca;
    }

    public getModelo():string{
        return this.modelo;
    }

    public setModeloo(_modelo: string): void {
        this.modelo = _modelo;
    }

    public getSistema(): string {
        return this.sistema;
    }

    public setSistema(_sistema: string): void {
        this.sistema = _sistema;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(_marca: string): void {
        this.marca = _marca;
    }

    public pesquisar( notebook: string): void  {
        console.log(`o ${notebook} tem função para adquirir conhecimento`);
    }

    public seComunicar(): void {
        console.log(`Mariana utiliza o notebook para se comunicar com as suas amigas de outra cidade`);
    }
}