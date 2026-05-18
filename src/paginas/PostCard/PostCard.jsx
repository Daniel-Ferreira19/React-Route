import { Link } from "react-router-dom";
import style from "./PostCard.module.css"
import BotaoPrincipal from "../BotaoPrincipal/BotaoPrincipal";
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

              <BotaoPrincipal>
                Ler
              </BotaoPrincipal>
            </div>
        </Link>
    )
}
export default PostCard;