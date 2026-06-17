# Salvar Versão 1.0 — SEVBEN Landing Page

## Objetivo
Congelar e documentar o estado atual do projeto como **versão 1.0** na memória persistente do projeto.

## Estado Atual (congelado)

### Stack Técnico
- **Vite 7** + **React 19** + **TypeScript 5**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Lucide React** (ícones)
- **SPA estática pura** — sem router, sem SSR, sem servidor, sem backend

### Build / Deploy
- `vite.config.ts` com `base: "./"` para compatibilidade com GitHub Pages (subpath)
- Saída: `dist/index.html` + assets com hash
- `public/CNAME` incluído no build para domínio customizado
- `npm run build` gera o site estático pronto para publicação

### Seções da Landing Page (App.tsx)
1. **Header** — sticky, blur backdrop, menu hamburger mobile (estado `menuOpen`)
2. **Hero** — gradiente radial, título principal, 2 CTAs, 3 cards de destaque (Apps / Cursos / Escala), card de pilares com checkmarks
3. **Sobre** — Missão / Visão / Valores em cards
4. **Serviços** — 3 cards: Criação de aplicativos, Desenvolvimento de cursos digitais, Estruturação de negócios digitais
5. **Diferenciais** — 6 tags com ícones de check
6. **Contato** — 2 cards de e-mail:
   - `contato@sevbenoficial.com`
   - `financeiro@sevbenoficial.com`
   - Ambos com `whitespace-nowrap` e fonte responsiva para ficar em uma única linha
7. **Footer** — copyright + tagline

### Design Tokens (definidos)
- Backgrounds: `slate-50` / `white` / `slate-950` (seção escura do contato)
- Acento primário: gradiente `blue-600` → `indigo-700`
- Texto: `slate-900` títulos, `slate-600` corpo, `slate-500` secundário
- Cards: `rounded-2xl`, borda `slate-200`, `shadow-sm`
- Largura máxima: `max-w-7xl`
- Fonte: sans-serif do sistema (sem fonte customizada carregada)

### SEO (index.html)
- Título: "SEVBEN | Soluções Inteligentes para Negócios Digitais"
- Meta tags OG + Twitter com imagem social
- `lang="pt-BR"`

## Ação
Gravar dois arquivos de memória:
1. `mem://index.md` — índice do projeto com regras core e referência à v1.0
2. `mem://versions/v1.0.md` — snapshot completo do estado congelado descrito acima

## Arquivos Chave Congelados
- `src/App.tsx` — componente único da landing page
- `index.html` — SEO e ponto de entrada
- `vite.config.ts` — configuração de build estático
- `package.json` — dependências mínimas (React, Vite, Tailwind, Lucide)
