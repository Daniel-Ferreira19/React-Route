import styles from "./SobreMim.module.css"
import PostModelo from "../PostModelo/PostModelo";
import fotoCapa from "/assets/sobre_mim_capa.png"
import fotoSobreMim from "/assets/Daniel.png"

function SobreMim() {
  return(
    <main>
      
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Daniel!
            </h3>
            
            <img
                src={fotoSobreMim}
                alt="Foto do Daniel"
                className={styles.fotoSobreMim}
            />
<div className={styles.paragrafo}>
          <p> Sou uma pessoa curiosa, dedicada e apaixonada por tecnologia. Meu interesse pela programação começou pela vontade de entender como as coisas funcionavam e, com o tempo, percebi que queria transformar isso em carreira.</p>

<p> Quando decidi entrar na faculdade para aprender programação, também entendi que grande parte do aprendizado real vinha da prática e do estudo por conta própria. Foi então que comecei a buscar cursos, desenvolver projetos e aprender constantemente fora da sala de aula, o que me tornou uma pessoa mais autodidata, persistente e focada em evolução.</p>

<p> Hoje venho desenvolvendo conhecimentos em React, JavaScript, HTML e CSS, sempre buscando criar projetos práticos, melhorar minhas habilidades e aprender novas tecnologias. Gosto de resolver problemas, criar interfaces modernas e transformar ideias em soluções funcionais.</p>

<p> Além da parte técnica, valorizo comprometimento, responsabilidade e trabalho em equipe. Meu objetivo é crescer profissionalmente na área da tecnologia, adquirir experiência e continuar evoluindo como desenvolvedor a cada novo desafio.</p>
</div>
        </PostModelo>
    

    </main>
  )
  
}

export default SobreMim;
