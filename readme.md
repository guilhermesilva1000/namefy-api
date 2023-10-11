<p align="center">
<a href="#"><img title="Namefy" src="https://img.shields.io/badge/-Namefy-FF0000?style=for-the-badge"></a>
</p>
<p align="center">
<a href="https://github.com/guilhermesilva1000"><img title="Author" src="https://img.shields.io/badge/Author-guilhermesilva1000-FF0000.svg?style=for-the-badge&logo=github"></a>
</p>

# Namefy API

A API Namefy é uma aplicação TypeScript construída com Express que gera nomes aleatórios e fornece endpoints para acessar esses nomes.

---

## Pré-requisitos

Certifique-se de que você tenha as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18.x)
- [Yarn](https://yarnpkg.com/) (gerenciador de pacotes)

## Instalação

Siga os passos abaixo para configurar e executar a API Namefy:

1. Clone este repositório:

```bash
git clone https://github.com/guilhermesilva1000/namefy-api.git
```

2. Navegue até o diretório do projeto:

```bash
cd namefy-api
```

3. Instale as dependências usando Yarn:

```bash
yarn install
```

4. Inicie a API:

```bash
yarn start
```

5. A API estará disponível em **`http://localhost:3000`**.

# Uso

A API Namefy oferece os seguintes endpoints:

### 1. /api/names (GET)

Este endpoint retorna todos os nomes do arquivo `**data.json**`, que contém os nomes gerados.

Exemplo de solicitação usando `curl`:

```bash
curl http://localhost:3000/api/names
```

### 2. /api/random (GET)

Este endpoint gera um nome completo aleatório (full_name), composto por um nome, sobrenome e último nome.

Exemplo de solicitação usando `curl`:

```bash
curl http://localhost:3000/api/random
```

Exemplo de resposta:

```json
{
  "full_name": "André Pereira Cardoso"
}
```

### 3. /api/random/:gender (GET)

Este endpoint gera um nome completo aleatório (full_name), por gênero (male, female).

Exemplo de solicitação usando `curl`:

```bash
curl http://localhost:3000/api/random/female
```

Exemplo de resposta:

```json
{
  "full_name": "Juliana Carvalho Braga"
}
```

## Consumindo a API em Python

Aqui está um exemplo de como consumir a API Namefy em Python usando a biblioteca **`requests`**:

```python
import requests

# Endpoint para obter um nome aleatório
random_name_url = "http://localhost:3000/api/random"

# Endpoint para obter todos os dados
all_names_url = "http://localhost:3000/api/names"

# Fazendo uma solicitação para obter um nome aleatório
response = requests.get(random_name_url)

if response.status_code == 200:
    data = response.json()
    full_name = data["full_name"]
    print(f"Nome Aleatório: {full_name}")
else:
    print("Erro ao obter um nome aleatório")

# Fazendo uma solicitação para obter todos os nomes
response = requests.get(all_names_url)

if response.status_code == 200:
    data = response.json()
    print("Todos os Nomes:")
    for i in data["all_names"]:
        print(i)
else:
    print("Erro ao obter todos os nomes")
```

Certifique-se de instalar a biblioteca **`requests`** no seu ambiente Python antes de executar o código:

```bash
pip install requests
```

Isso permitirá que você faça solicitações HTTP para a API Namefy a partir do seu código Python.

---

### Autor

<img src="https://github.com/guilhermesilva1000.png" width="128" height="128"/>

### Guilherme Silva 👨‍💻

---

### Contribuidores
