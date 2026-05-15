import { Link } from "react-router-dom";
import style from "./PostCard.module.css"
function PostCard({ post }) {
    return (
        <Link to={`/post/${post.id}`}>
            <div className={style.post}>
                <img
                    className={style.capa}
                    src={`/posts/${post.id}/capa.png`}
                    alt="imagens"
                />
                <h2 className={style.titulo}>{post.titulo}</h2>

                <button className={style.botaoLer}>Ler</button>
            </div>
        </Link>
    )
}
export default PostCard;