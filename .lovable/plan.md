# Incorporar logotipo SEVBEN

## Objetivo
Substituir o placeholder atual (quadrado com gradiente e letra "S") pelo logotipo oficial enviado pelo usuário.

## Abordagem

### 1. Preparar os assets
A imagem enviada contém o logo completo ("Grupo SEVBEN" + tagline) sobre fundo azul-marinho. Vou extrair duas versões com fundo transparente via `imagegen--edit_image`:

- **Ícone "S"** (apenas o símbolo gráfico em azul/cinza) — para uso no header e como favicon. Fundo transparente.
- **Logo horizontal completo** (símbolo + "GRUPO SEVBEN" em branco) — opcional, para uso destacado.

Ambos serão hospedados via `lovable-assets` (CDN), seguindo a prática do projeto.

### 2. Aplicar no site (`src/App.tsx`)

**Header (desktop + mobile):**
- Substituir o quadrado gradiente `<div>` com letra "S" por `<img>` do ícone, mantendo as mesmas dimensões (h-11 w-11).
- Manter o texto "SEVBEN" + tagline ao lado (já existente).

**Hero — card escuro lateral:**
- Substituir o quadrado gradiente "S" no canto superior direito pelo mesmo ícone, dimensões equivalentes (h-12 w-12).

### 3. Favicon (`index.html`)
- Adicionar `<link rel="icon">` apontando para o ícone do logo, para que apareça também na aba do navegador.

## Fora de escopo
- Não alterar paleta, layout, tipografia, conteúdo ou demais seções.
- Não embutir a imagem original com fundo azul; apenas o ícone limpo com transparência.

## Resultado esperado
Logo oficial da SEVBEN aparecendo no header (topo do site), no card do hero e na aba do navegador, mantendo 100% do design e conteúdo atual.
