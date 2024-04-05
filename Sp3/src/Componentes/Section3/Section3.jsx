import S from '../img/S.png'

function Section3(){
    const style1 = {
        borderBottom: '1px solid #34353850',
        paddingBottom: '50px',
        letterSpacing: '.3px',
        fontSize: '20px',
      };
    return(
        <section id="secao3" class="sec2 texto-global">
            <h1 class="sec3-titulo">Projeto <img class="sec3-img1" src={S} alt="" /></h1>
            <p style={style1}>
                O projeto SISSI tem como objetivo auxiliar as etapas de atendimento, trazendo qualidade, excelência, simplicidade e confiança para os usuários e os médicos/enfermeiros, fazendo com que o tratamento seja realizado da melhor maneira possível.<br/><br/>
                A fim de possibilitar o fim da desinformação, medo e preocupação tornando a experiência do paciente e seus acompanhantes a melhor possível, a SISSI é uma plataforma web que possui uma interface simples e intuitiva para humanizar e simplificar o acesso às informações médicas.<br/><br/>
                O site conterá explicações de procedimentos rotineiros das instalações médicas para as crianças e acompanhantes por meio de imagens explicativas, bem como funcionalidades interativas e cartazes de passo a passo com imagens dos procedimentos que serão realizados de uma forma lúdica para melhorar a comunicação assertiva no âmbito de possibilitar ao receptor permitindo que tenha o maior entendimento sobre as informações e procedimentos.<br/><br/>
            </p>
        </section>
    )
}

export default Section3