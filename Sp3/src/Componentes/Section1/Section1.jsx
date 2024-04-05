import sec1 from '../img/sec1.png'
import S from '../img/S.png'

function Section1(){
    return(
        <section id="secao1" class="sec1">
            <img class="sec1-img1" src={sec1} alt=""></img>
            <img src={S} alt="" class="sec1-img2 transition2"></img>
            <p class="sec1-slogan slogan">Nada melhor do que informação para todos.</p>
        </section>
    )
}

export default Section1