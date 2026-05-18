import { Route, Routes, useParams } from "react-router-dom"
import posts from "../../assets/video-3.1/json/posts.json";
import PostModelo from "../PostModelo/PostModelo";
import ReactMarkdown from "react-markdown"
import "./Post.css"
import PaginaPadrao from "../PaginaPadrão/PaginaPadao";
import style from "./Post.module.css"
import PostCard from "../PostCard/PostCard";
import NaoEncontrada from "../NaoEncontrada/NaoEncontrada";
function Post() {

  const parametros = useParams()

  const post = posts.find((post) => {
    return post.id === Number(parametros.id)
  })

  if (!post) {
    return <NaoEncontrada/>
  }
const postRecomendados = posts
  .filter((post) => post.id !== Number(parametros.id))
  .sort((a, b) => b.id - a.id)
  .slice(0,4);

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao/>}>
        <Route index element={
          <PostModelo
          fotoCapa={`/assets/post/${post.id}/capa.png`}
          titulo={post.titulo}
        >
          <div className="post-markdown-container">
            <ReactMarkdown>
              {post.texto}
            </ReactMarkdown>
          </div>

      <h2 className={style.tituloOutrosPosts}>
        Outros post que voce pode gostar
      </h2>
      <ul className={style.postsRecomendados}>
        {postRecomendados.map((post) =>(
          <li key={post.id}>
        <PostCard  post={post}/>
          </li>
        ))}
      </ul>
      
        </PostModelo>

      }/>
        
      </Route>
    </Routes>
  )

}
export default Post