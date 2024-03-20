interface IAluno {
    readonly nome: string
    idade: number
}

class Aluno implements IAluno {
    constructor(
        public nome: string = "teste",
        idade: number
    ) {

    }


    public teste(): void {
        this.nome;
    }


    public getNome(): string {
        return this.nome
    }

}