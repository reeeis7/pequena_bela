frase = input('digite uma frase com 1 ou mais palavras: ')
contagem= len(frase)


frase_sem_espaco = frase.strip()
contagem2= len(frase_sem_espaco)


palavras = frase.split(' ')
qtde_palavras = len(palavras)


print(f'quantidade de caracteres: {contagem}')
print(f'numero de caracteres sem os espaços: {contagem2}')
print(f'quantidade de palavras: {qtde_palavras}')