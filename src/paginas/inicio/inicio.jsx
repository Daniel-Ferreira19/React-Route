
import style from "./inicio.module.css";
import posts  from "../../assets/video-3.1/json/posts.json";
import PostCard from "../PostCard/PostCard";

function Inicio() {
  return (
    
      <ul className={style.posts }>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post}/>
          </li>
        ))}
      </ul>
   
  );
}

export default Inicio;
