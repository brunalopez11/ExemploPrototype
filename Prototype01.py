import copy

# Classe Pessoa - Padrão que será clonada:
class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def __str__(self):
        return f"Nome: {self.nome}, Idade: {self.idade}"

    def clone(self):
        return copy.copy(self)
    
# Classe PessoaManager - Gerencia instancias de Pessoa:
class PessoaManager:
    def __init__(self):
        self.pessoas = {}
    
    def addPessoa(self, nome, idade, id):
        pessoa = Pessoa(nome, idade)
        self.pessoas[id] = pessoa
        
    def getPessoaById(self, id):
        return self.pessoas[id].clone()

# Criando uma instancia de PessoaManager:
manager = PessoaManager()

# Add duas pessoas:
manager.addPessoa('João da Silva', 30, 1);
manager.addPessoa('Maria da Silva', 27, 2);

# Clonando 1 Pessoas e Modificando:
pessoaClone1 = manager.getPessoaById(1)
pessoaClone1.idade = 18

# Clonando 2 Pessoas e Modificando:
pessoaClone2 = manager.getPessoaById(2)
pessoaClone2.nome = "Dolly da Silva Clonada"
pessoaClone2.idade = 55

# Imprimindo as Pessoas:
print("Pessoa Original - 1:")
print(manager.getPessoaById(1))
print("Pessoal Clonada 1:")
print(pessoaClone1)
print("--------------------------------------")
print("Pessoa Original - 2:")
print(manager.getPessoaById(2))
print("Pessoal Clonada 2:")
print(pessoaClone2)
print("--------------------------------------")