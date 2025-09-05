// class pessoa - padrao que sera clonada:

class Pessoa{
    constructor(id, nome, idade){
        this.id = id
        this.nome = nome;
        this.idade = idade;
    }

    // Metodo clone - realiza uma copia superficial do objeto:
    clone(){
        return new Pessoa(this.id, this.nome, this.idade);
    }

}

// classe PessoaManager - gerencia instancias de pessoa:
class PessoaManager{
    constructor(){
        this.pessoas = {};
    }

// metodo addPessoa - adiciona pessoas ao adicionar pessoa:
    addPessoa(id, nome, idade){
        const pessoa = new Pessoa(id, nome, idade);
        this.pessoas[id] = pessoa;
    }

    //metodo getPessoaId - solicita uma pessoa eplo id e retorna uma copia dela:
    getPessoaId(id){
        const pessoaOriginal = this.pessoas[id];
        if(pessoaOriginal){
            return pessoaOriginal.clone();
        }else{
            return null;
        }
    }
}

//criando uma instancia de PessoaManager:
    const manager = new PessoaManager();

// add duas pessoas:
manager.addPessoa(1, 'Joao da Silva', 30);
manager.addPessoa(2, 'Maria da Silva', 27);

//clonando 1 pessoa e modificando
const pessoaClone1 = manager.getPessoaId(1);
if(pessoaClone1){
    pessoaClone1.nome = 'Dolly da Silva Clonado';
    pessoaClone1.id = 3
}

// clonando 1 pessoa e modificando:
const pessoaClone2 = manager.getPessoaId(2);
if(pessoaClone2){
    pessoaClone2.idade = '9999';
    pessoaClone2.id = 4
}

//imprimindo pessoas:
console.log("Pessoa Original - 1:");
console.log(manager.getPessoaId(1));
console.log("Pessoa Clonada 1:");
console.log(pessoaClone1);
console.log("------------------------------------------------")
console.log("Pessoa Original - 2:");
console.log(manager.getPessoaId(2));
console.log("Pessoa Clonada 2:");
console.log(pessoaClone2);
console.log("------------------------------------------------")