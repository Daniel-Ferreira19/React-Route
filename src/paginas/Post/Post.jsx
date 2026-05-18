import { useParams } from "react-router-dom"
import posts  from "../../assets/video-3.1/json/posts.json";
import PostModelo from "../PostModelo/PostModelo";
import ReactMarkdown from "react-markdown"
import "./Post.css"

function Post() {

   const parametros = useParams() 
   
        const post = posts.find((post) => {
            return post.id === Number(parametros.id)
        })

if(!post) {
    return <h1>post não encontrado </h1>
}

    return (
  <PostModelo 
  fotoCapa={`/assets/post/${post.id}/capa.png`}
  titulo={post.titulo}
  >
    <div className="post-markdown-container">
    <ReactMarkdown>
      {post.texto}
     </ReactMarkdown>
     </div>
  </PostModelo>
    )
    
}
export default Post