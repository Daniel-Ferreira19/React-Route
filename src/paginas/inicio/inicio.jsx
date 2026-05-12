import Banner from "../Banner/Banner";
import style from "./inicio.module.css";
import posts  from "../../assets/video-3.1/json/posts.json";
import Post from "../Post/Post";

function Inicio() {
  return (
    <main>
      <Banner />

      <ul className={style.posts }>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post}/>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Inicio;
