import style from "./Banner.module.css"

function Banner() {
    return (
        <>
            <div className={style.banner}>
                <div className={style.apresentacao}>
                    <h1 className={style.titulo}>
                        Olá a todos!
                    </h1>
                    <p className={style.paragrafo}>
                        Sou um desenvolvedor dedicado, curioso e sempre em busca de aprender novas tecnologias e aprimorar minhas habilidades. Gosto de criar projetos práticos, resolver problemas e entender como as aplicações funcionam na prática. Tenho interesse em desenvolvimento front-end, foco em evolução constante e valorizo responsabilidade, organização e trabalho em equipe.
                    </p>
                </div>
                <div className={style.imagens}>
                    

                    <img
                        className={style.minhaFoto}
                        src="/assets/Daniel.png"
                        alt="Foto de Daniel"
                    />
                </div>
            </div>


        </>
    )
}
export default Banner;