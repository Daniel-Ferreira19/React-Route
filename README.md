# 📌 Projeto React Router - Início dos Estudos

Este projeto foi criado com o objetivo de iniciar os estudos sobre rotas no React utilizando React Router.

---

## 🚀 Objetivo

Entender como funciona a navegação entre páginas em uma aplicação React sem recarregar o navegador.

---

## 🧭 O que foi feito até agora

- Instalação do React Router
- Criação de duas páginas:
  - Página Inicial (Inicio)
  - Página Sobre Mim (SobreMim)
- Configuração básica de rotas

---

## ⚙️ Estrutura inicial das rotas

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/sobreMim" element={<SobreMim />} />
    <Route path="*" element={<div>Página não encontrada</div>} />
  </Routes>
</BrowserRouter>


 
