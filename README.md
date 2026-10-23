# NEXVON — Fluência Imersiva v2100

Sistema completo de aprendizado de idiomas baseado no Language Reactor.
Arquivo único HTML standalone — sem backend, sem instalação.

## ⚡ Configuração Rápida (2 minutos)
Após subir o site, acesse: **`https://SEU-SITE/setup.html`**
O assistente detecta seu domínio, te leva direto para criar as chaves do Google/Facebook e salva tudo automaticamente.

## 🚀 Deploy no GitHub Pages (recomendado)
1. Crie um repositório público no GitHub
2. Faça upload de TODOS os arquivos desta pasta
3. Settings → Pages → Branch: `main` → Save
4. Acesse `https://SEU-USUARIO.github.io/SEU-REPO/`
5. Vá em `/setup.html` para configurar login real em 2 min

## 🔑 Login real Google/Facebook
- As chaves exigem sua conta pessoal (não podem ser geradas automaticamente)
- Use o **setup.html** — assistente guiado com links diretos e cópia automática
- Google: console.cloud.google.com (OAuth Client ID)
- Facebook: developers.facebook.com (App ID)
- Adicione seu domínio nas origens autorizadas

## 📱 PWA + Notificações
- manifest.json + sw.js inclusos → instale no celular (ícone na tela inicial)
- Botão "Ativar Notificações" no dashboard → lembretes mesmo com app fechado

## 📁 Arquivos
- `index.html` — Sistema completo
- `setup.html` — Assistente de configuração (login real)
- `manifest.json` + `sw.js` — PWA / notificações
- `favicon.svg` — Ícone
- `guia-deploy.html` — Guia visual (salve como PDF: Ctrl+P)
- `.github/workflows/deploy.yml` — Deploy automático
- `netlify.toml` / `vercel.json` / `.htaccess` / `_redirects` / `.nojekyll`

## 🔐 Admin
- E-mail: `admin@nexvon.ai` · Senha: `admin2100` (troque no primeiro acesso!)
