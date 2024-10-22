nome = input("Qual seu nome e sobrenome? ")
cidade = input("Qual sua cidade? ")
estado = input("Qual seu estado? ")
rua = input("Digite o nome da rua da sua casa ")
numero = input("Digite o número da sua casa ")
bairro = input("Digite o nome do seu bairro ")

print(f'Prezado(a) {nome.capitalize()}')
print(f'Sua residência fica em {rua.capitalize()}, {numero}, {bairro.capitalize()}, {cidade.capitalize()} - {estado.upper()}')
