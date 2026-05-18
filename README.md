# 👨‍💻 Meu Blog Pessoal & Portfólio

Este é um projeto de blog pessoal desenvolvido em **React** para apresentar um pouco mais sobre mim, minha trajetória acadêmica/profissional e compartilhar artigos/posts. A aplicação foi construída focando na experiência do usuário e na componentização limpa, utilizando o ecossistema do **React Router** para criar uma experiência de navegação fluida entre múltiplas páginas sem recarregamento (SPA).

---

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias e bibliotecas:

*   **React** (Biblioteca principal para construção da interface)
*   **React Router Dom** (Gerenciamento de rotas, navegação e parâmetros)
*   **React Markdown** (Para renderização de textos formatados a partir de arquivos Markdown)
*   **CSS Modules** (Estilização isolada por componente, evitando conflitos de escopo)
*   **SVGs inline** (Para ícones customizados e performáticos)

---

## 🛠️ Funcionalidades e Conceitos Aplicados

Durante o desenvolvimento deste projeto, coloquei em prática conceitos fundamentais do ecossistema React:

*   **Rotas Aninhadas (Nested Routes & Outlet):** Criação de uma `PaginaPadrao` que serve como layout fixo (contendo o `Banner`), renderizando dinamicamente os conteúdos de `Inicio` e `SobreMim` através do `<Outlet />`.
*   **Rotas Dinâmicas (`useParams`):** Captura de IDs diretamente da URL (`/posts/:id`) para renderizar dinamicamente o post correto filtrado de um arquivo JSON.
*   **Links Destacados:** O componente `MenuLink` utiliza o hook `useLocation` para identificar a página atual e aplicar uma estilização exclusiva (`linkDestacado`) para indicar ao usuário onde ele está.
*   **Tratamento de Erros (Página 404):** Implementação de uma rota coringa (`path="*"`) que redireciona o usuário para uma página customizada de "Não Encontrada" caso a URL digitada não exista, permitindo retornar à Home com o hook `useNavigate`.
*   **Correção de Rolagem (`ScrollToTop`):** Uso de efeitos colaterais (`useEffect`) para garantir que o navegador sempre role para o topo da página ao mudar de rota.
*   **Recomendação de Conteúdo:** Lógica de filtragem e ordenação para sugerir outros posts que o usuário possa gostar dentro da página de leitura atual.

---

## 📂 Estrutura de Componentes Principais

*   `AppRoutes`: Centraliza a configuração do `BrowserRouter` e árvore de caminhos da aplicação.
*   `Banner`: Cabeçalho de apresentação com biografia e foto de perfil.
*   `PostCard` & `PostModelo`: Componentes reutilizáveis para exibição de cards na listagem e estrutura de artigos.
*   `BotaoPrincipal`: Componente genérico de botão que aceita variações de tamanho via props.

---

## 🔧 Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
