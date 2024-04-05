import roboProblema from '../img/robo-problema.png'

function Section4(){
    const style1 = {
        paddingTop: '60px',
        height: '600px',
      };
    return(
        <section id="secao4" class="sec2 texto-global" style={style1}>
            <div class="ul-sec3">
                <div>
                    <div class="sec4-bola">
                        <img class="sec4-img-robo" src={roboProblema} alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        <h1 class="sec4-titulo">O Problema</h1>
                        <p class="sec4-texto">
                            O cliente do Hospital das Clínicas passa pela
                            falta de informação, medo e ansiedade durante todo o
                            processo da realização do exame, desde o sair de casa até
                            a saída do hospital.<br/><br/>
                            
                            Além de que no hospital pode haver um grande tempo de espera
                            para a consulta e do exame.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}


{/* 

<section id="secao4" class="sec2 texto-global" style="padding-top: 60px; height: 600px;">
    <div class="ul-sec3">
        <div>
            <div class="sec4-bola">
            <img class="sec4-img-robo" src="../img/robo-problema.png" alt="">
            </div>
        </div>
        <div>
            <!-- <img class="sec4-img-meialua" src="../img/dir.png" alt=""> -->
            <div>
                <h1 class="sec4-titulo">O Problema</h1>
                <p class="sec4-texto">
                    O cliente do Hospital das Clínicas passa pela
                    falta de informação, medo e ansiedade durante todo o
                    processo da realização do exame, desde o sair de casa até
                    a saída do hospital.<br><br>
                    
                    Além de que no hospital pode haver um grande tempo de espera
                    para a consulta e do exame.
                </p>
            </div>
        </div>
    </div>
</section> 

*/}

export default Section4