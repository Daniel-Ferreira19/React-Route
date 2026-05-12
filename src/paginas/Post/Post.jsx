import style from "./Post.module.css"
function Post({post}) {
    return(
 <div className={style.post}>
<img
    className={style.capa}
    src={`/posts/${post.id}/capa.png`}
    alt="imagens"
/>
<h2 className={style.titulo}>{post.titulo}</h2>

<button className={style.botaoLer}>Ler</button>
 </div>
    )
}
export default Post;