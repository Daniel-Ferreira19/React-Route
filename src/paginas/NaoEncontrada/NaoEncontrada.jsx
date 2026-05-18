import style from "./NaoEncontrada.module.css"
import Erro40 from '/assets/erro_404.png'
import BotaoPrincipal from "../BotaoPrincipal/BotaoPrincipal";
import { useNavigate } from "react-router-dom";
export default function NaoEncontrada() {
  const navegar = useNavigate()
    return(
        <>
        <div className={style.conteudoContainer}>
               <span className={style.texto404}>404</span>

               <h1 className={style.titulo}> Ops! Pagina não encontrada :( </h1>

               <p className={style.paragrafo}> 
                 Tem certeza de que era isso que você estava procurando?

               </p>

                 <p className={style.paragrafo}>
                 Aguarde uns instantes e recarregue a pagina, ou volte para a página inicial. 
               </p>

                <div 
                className={style.botaoContainer}
                onClick={() => navegar("/")}
                >
                    <BotaoPrincipal tamanho="lg">
                      Voltar
                      </BotaoPrincipal>
                </div>

                <img className={style.imagemErro}
                src={Erro40}
                alt="erro de um X"
                />
        </div >

        <div className={style.espacoEmBranco}></div>
        </>
    )
}
