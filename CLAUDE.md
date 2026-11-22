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
description: "O mesmo texto do resumo (ou versão de até 155 caracteres com o termo que a pessoa digitaria no Google). É o que aparece no resultado da busca."
marca: "90 dias"   # 1 a 3 palavras que aparecem grandes no bloco do post (um artigo de lei, um número, um prazo)
image: "/assets/img/og/slug-do-post.png"   # cartão de compartilhamento 1200x630 (opcional; sem ele vale o padrão)
---
```

Foto é opcional. Os posts novos usam o bloco tipográfico com `marca`; os de agosto mantêm `imagem` (URL base do Unsplash, sem query string) e `imagem_alt`.

2. Corpo em Markdown, voz do Rafael em primeira pessoa (direta, honesta, elegante). **Regra anti-IA (pedido expresso do Rafael):** no máximo 1 travessão (—) por post; proibido contraste dicotômico ("não é X, é Y" e variantes), aforismo-parágrafo de uma linha, fecho com pergunta retórica ou "me conta", anáfora e tríades retóricas. Períodos encadeados, prosa que respira. Subtítulos com `##`. Para embutir vídeo do canal:

```html
<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID" title="..." allowfullscreen loading="lazy"></iframe></div>
```

3. `git add` + commit + push na `main`. Pronto.

**Título pensando na busca:** o título precisa conter o termo que alguém digitaria no Google (lei, tema do STF, nome do tributo), de preferência no começo. "IBS e CBS na base do lucro presumido: o que diz a lei" é encontrado; "O que aprendi esta semana" não. Subtítulos `##` em número de três ou mais geram o sumário lateral do post.

**Cuidados:** data futura = post não aparece (Jekyll ignora futuros). Nunca citar clientes, casos identificáveis ou estratégias internas da Veiga. Não publicar detalhes do plano editorial acadêmico (alvos de revista/cronograma) — tema e ideias da tese são públicos, a estratégia não.

## Estrutura

- `_posts/` — as entradas do diário (o que cresce no dia a dia)
- `_data/videos.yml` — catálogo dos 52 vídeos do canal em séries (a página /videos/ e a home leem daqui)
- `_data/publicacoes.yml` — livro, artigos acadêmicos e colunas do Migalhas (página /publicacoes/)
- `_layouts/`, `_includes/`, `assets/css/main.css` — o design (v6 "Biblioteca", escolhida pelo Rafael em 22/11/2026: papel creme `#F5F1E8`, tinta `#1A1A1A`, grafite `#4D4D4F`, vermelho Veiga `#C1272D` como único destaque, fotos em sépia `#754C24`, rodapé em tinta; títulos em Newsreader (serifa), corpo Instrument Sans, detalhes JetBrains Mono)
- `_includes/row.html` — a linha de post usada em todas as listas; `_includes/tile.html` — o bloco do post na abertura da home
- `_includes/schema.html` — dados estruturados do autor (Person) e trilha do post; `_includes/author-box.html` — caixa "Quem escreve" no fim de cada post; `_includes/nav.html` — o menu (um lugar só)
- `assets/img/og-padrao.png` — imagem padrão de compartilhamento (home e seções); `assets/img/og/` — cartões por post

## SEO (o que já está montado)

- Título da home vem de `title` + `tagline` do `_config.yml`; cada seção tem `title` e `description` próprios no front matter.
- O `robots.txt` só vale na raiz do domínio, que pertence ao repositório `VEIGALAW/veigalaw.github.io`, e não a este.
- O sitemap fica em `/diario-tributario/sitemap.xml`; enviado no Search Console em 22/11/2026 pela conta pessoal do Rafael (verificação: `googled03c1e71b6cf69a9.html`, não apagar). O `google2573b1e52d4b4e53.html` é de outra conta; também fica.
- Páginas de seção: `diario/`, `doutorado/`, `pratica/`, `ideias/`, `videos/`, `publicacoes/`, `sobre/` — filtram posts por `categoria`

## Fatos fixos (não alterar sem pedido do Rafael)

- Doutorando PUC-SP, Núcleo III, orientadora Profa. Dra. Luiza Nagib
- Mestre IBDT (orientadora Profa. Dra. Martha Toribio Leão); dissertação publicada IBDT 2025: "Tributação sobre lucros e dividendos: uma análise comparada entre os métodos de integração no Chile e no Brasil"
- Artigo: Leão & Canesso, Revista de Direito Tributário da APET n. 53, 2026
- Head of Tax, Veiga Partners; canal @rafaelmaldonadocanesso (52 vídeos); 14 colunas no Migalhas
