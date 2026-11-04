# Fôlego Financeiro — app

App instalável (PWA) de custos pessoais. Ele importa extratos e faturas (OFX/CSV), aceita lançamentos manuais e parcelados, tem o plano do mês com receitas, despesas fixas e metas, vários cartões com ciclos próprios e a previsão de quanto ainda cabe em cada um.

Depois de aberto pela primeira vez, funciona sem internet.

## O que tem nesta pasta

| Arquivo | Para que serve |
|---|---|
| `index.html` | O app inteiro |
| `manifest.webmanifest` | Nome, cores e ícones usados na instalação |
| `sw.js` | Guarda o app no aparelho para abrir offline |
| `icons/` | Ícones da tela inicial |

## 1. Publicar (grátis, uma vez só)

O app precisa ficar num endereço `https://` para poder ser instalado.

**Opção mais rápida: Netlify Drop**
1. Acesse https://app.netlify.com/drop no computador.
2. Arraste a pasta `folego-app` inteira para a página.
3. Em segundos aparece um endereço do tipo `https://nome-aleatorio.netlify.app`. Crie uma conta grátis para manter o site no ar e, se quiser, trocar o nome.

**Opção GitHub Pages**
1. Crie um repositório novo no GitHub e envie os arquivos desta pasta.
2. Em Settings › Pages, escolha a branch `main` e a pasta raiz.
3. O endereço fica `https://seu-usuario.github.io/nome-do-repositorio/`.

## 2. Instalar no celular

- **Android (Chrome):** abra o endereço, toque no menu ⋮ e depois em **Instalar app**. Ou use o botão **Instalar app** em Plano do mês › Backup.
- **iPhone (Safari):** abra o endereço, toque em **Compartilhar** e depois em **Adicionar à Tela de Início**.
- **Computador (Chrome/Edge):** clique no ícone de instalar na barra de endereço.

## 3. Seus dados

- Tudo fica salvo **só no aparelho** onde você usa o app. Nada vai para servidor nenhum.
- Por isso, exporte um backup de vez em quando: **Plano do mês › Backup › Exportar backup**. Guarde o arquivo no Drive ou no e-mail.
- Para usar em outro aparelho: exporte o backup num aparelho e use **Restaurar de arquivo** no outro.
- **Para trazer o que você já lançou no painel do Claude:** abra o painel no Claude, vá em Plano do mês › Backup › **Exportar backup** (o texto é copiado). Depois, no app, use **Colar backup**.

## Atualizar o app

Se eu gerar uma versão nova, substitua os arquivos no Netlify ou no GitHub. O app atualiza na próxima vez que você abrir com internet, e seus dados continuam no aparelho.
