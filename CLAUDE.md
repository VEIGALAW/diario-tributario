# Diário Tributário — guia de manutenção

Blog pessoal do Rafael Maldonado Canesso (Jekyll + GitHub Pages).

- **URL pública:** https://veigalaw.github.io/diario-tributario/
- **Repo:** https://github.com/VEIGALAW/diario-tributario (branch `main`)
- **Deploy:** automático — todo push na `main` reconstrói o site em ~1–2 min (GitHub Pages/Jekyll). Não há build local; verificar o resultado na URL pública.

## Como adicionar um post (o fluxo do dia a dia)

1. Criar `_posts/AAAA-MM-DD-slug-curto.md` com este front matter:

```yaml
---
layout: post
title: "Título do post"
date: AAAA-MM-DD
categoria: doutorado   # doutorado | pratica | ideias
categoria_label: "Doutorado"   # "Doutorado" | "Da prática" | "Ideias"
resumo: "Uma frase-isca de até 200 caracteres, sem aspas internas."
imagem: https://images.unsplash.com/photo-XXXXXXXX   # URL base do Unsplash, SEM query string (o template acrescenta os parâmetros)
imagem_alt: "Descrição curta da foto"
---
```

Para achar uma foto nova: resolver a URL base com `curl -s -o /dev/null -w '%{redirect_url}' "https://unsplash.com/photos/<ID>/download?w=640"` e usar só a parte antes do `?`. Baixar uma prévia pequena e OLHAR a imagem antes de usar.

2. Corpo em Markdown, voz do Rafael em primeira pessoa (direta, honesta, elegante). **Regra anti-IA (pedido expresso do Rafael):** no máximo 1 travessão (—) por post; proibido contraste dicotômico ("não é X, é Y" e variantes), aforismo-parágrafo de uma linha, fecho com pergunta retórica ou "me conta", anáfora e tríades retóricas. Períodos encadeados, prosa que respira. Subtítulos com `##`. Para embutir vídeo do canal:

```html
<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID" title="..." allowfullscreen loading="lazy"></iframe></div>
```

3. `git add` + commit + push na `main`. Pronto.

**Cuidados:** data futura = post não aparece (Jekyll ignora futuros). Nunca citar clientes, casos identificáveis ou estratégias internas da Veiga. Não publicar detalhes do plano editorial acadêmico (alvos de revista/cronograma) — tema e ideias da tese são públicos, a estratégia não.

## Estrutura

- `_posts/` — as entradas do diário (o que cresce no dia a dia)
- `_data/videos.yml` — catálogo dos 52 vídeos do canal em séries (a página /videos/ e a home leem daqui)
- `_data/publicacoes.yml` — livro, artigos acadêmicos e colunas do Migalhas (página /publicacoes/)
- `_layouts/`, `_includes/`, `assets/css/main.css` — o design (editorial: papel marfim `#FAF7F0`, verde-garrafa `#16382B`, dourado `#A87C2E`; fontes Fraunces/Newsreader/Inter)
- Páginas de seção: `diario/`, `doutorado/`, `pratica/`, `ideias/`, `videos/`, `publicacoes/`, `sobre/` — filtram posts por `categoria`

## Fatos fixos (não alterar sem pedido do Rafael)

- Doutorando PUC-SP, Núcleo III, orientadora Profa. Dra. Luiza Nagib
- Mestre IBDT (orientadora Profa. Dra. Martha Toribio Leão); dissertação publicada IBDT 2025: "Tributação sobre lucros e dividendos: uma análise comparada entre os métodos de integração no Chile e no Brasil"
- Artigo: Leão & Canesso, Revista de Direito Tributário da APET n. 53, 2026
- Head of Tax, Veiga Partners; canal @rafaelmaldonadocanesso (52 vídeos); 14 colunas no Migalhas
