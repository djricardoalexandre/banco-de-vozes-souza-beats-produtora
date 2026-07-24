# Banco de Vozes - Souza Beats Produtora

Site profissional para exibição do banco de vozes da Souza Beats Produtora.

## Características

- 100 vozes pré-configuradas (50 femininas e 50 masculinas)
- Filtros funcionais (Todos, Vozes Femininas, Vozes Masculinas)
- Design responsivo para mobile e desktop
- Integração direta com WhatsApp para solicitações
- Player de áudio HTML5 nativo
- Sistema de avaliação com estrelas

## Como Personalizar as Vozes

Para substituir os dados das vozes, edite o arquivo `src/data/voices.ts`:

```typescript
// Exemplo de como atualizar uma voz:
{
  id: 'SB-F01',
  name: 'Nome da Locutora',
  gender: 'feminino',
  audioUrl: 'https://whyp.it/tracks/seu-audio',
  photoUrl: 'URL_da_foto'
}
```

## Deploy no Netlify

### Via Interface Web (Mais Fácil)

1. Faça login no [Netlify](https://www.netlify.com/)
2. Clique em "Add new site" > "Import an existing project"
3. Conecte seu repositório do GitHub
4. As configurações serão detectadas automaticamente do `netlify.toml`
5. Clique em "Deploy site"

### Via Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

## Deploy no GitHub Pages

### Configuração

1. Instale o pacote gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Adicione no `package.json`:
```json
{
  "homepage": "https://seu-usuario.github.io/seu-repositorio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Execute o deploy:
```bash
npm run deploy
```

## Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## Estrutura do Projeto

```
src/
  ├── components/       # Componentes React
  │   ├── Header.tsx
  │   ├── FilterButtons.tsx
  │   └── VoiceTable.tsx
  ├── data/
  │   └── voices.ts     # Dados das vozes (EDITE AQUI)
  ├── types/
  │   └── Voice.ts      # Tipos TypeScript
  ├── App.tsx           # Componente principal
  └── main.tsx          # Entry point
```

## Contato

WhatsApp: +55 31 98353-2534

© 2024 Souza Beats Produtora
