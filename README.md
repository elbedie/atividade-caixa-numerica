# Caixa Numérica com React e Vite

Aplicação simples em React utilizando Vite, que apresenta uma grade de botões numerados de 0 a 8. Ao clicar, o número é substituído por "X".

## Estrutura do Projeto

```
caixa-numerica/
│
├── public/              # Arquivos estáticos
│
├── src/                 # Código-fonte
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos do componente
│   └── main.jsx         # Ponto de entrada
│
├── index.html           # HTML principal
├── package.json         # Configuração do projeto
└── vite.config.js       # Configuração do Vite
```

## Pré-requisitos

- Node.js (versão LTS)
- npm ou Yarn

## Instalação

1. Clone o repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd caixa-numerica
   ```

2. Instale as dependências:

   Com npm:

   ```bash
   npm install
   ```

   Ou com Yarn:

   ```bash
   yarn
   ```

## Execução

Para iniciar o servidor de desenvolvimento:

Com npm:

```bash
npm run dev
```

Com Yarn:

```bash
yarn dev
```

Acesse `http://localhost:5173`.
