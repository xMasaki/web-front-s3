import roboImpactoNeg from '../img/robo impacto neg.png'

function Section5(){
    const style1 = {
        height: '600px',
      };
    return(
        <section id="secao5" class="sec2 texto-global" style={style1}>
            <div class="ul-sec3">
                <div>
                    <div>
                        <h1 class="sec5-titulo">Impacto Negativo</h1>
                        <p class="sec5-texto">
                            Uma vez que o paciente não tem conhecimento dos processos
                            que passará no hospital, poderá acarretar em diversos
                            problemas, como:<br/><br/>
                            
                            Durante o caminho até o local do exame, a criança pode ficar
                            inquieto, estressado ou ansioso, gerando estresse para o
                            acompanhante.<br/><br/>
                            
                            O responsável por não conhecer também dos processos do
                            exame do filho, poderá ter medo ou ficar receoso, gerando um
                            comportamento espelho para o paciente, dificultando o
                            processo do exame e gerando maiores filas de espera.<br/><br/>

                            Cancelamento de exames por medo e rejeição do filho a ir para o hospital.

                        </p>
                    </div>
                </div>
                <div>
                    <div class="sec4-bola">
                    <img class="sec5-img-robo" src={roboImpactoNeg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

{/* 

<section id="secao5" class="sec2 texto-global" style="height: 600px;" >
    <div class="ul-sec3">
        <div>
            <!-- <img class="sec4-img-meialua" src="../img/esq.png" alt=""> -->
            <div>
                <h1 class="sec5-titulo">Impacto Negativo</h1>
                <p class="sec5-texto">
                    Uma vez que o paciente não tem conhecimento dos processos
                    que passará no hospital, poderá acarretar em diversos
                    problemas, como:<br><br>
                    
                    Durante o caminho até o local do exame, a criança pode ficar
                    inquieto, estressado ou ansioso, gerando estresse para o
                    acompanhante.<br><br>
                    
                    O responsável por não conhecer também dos processos do
                    exame do filho, poderá ter medo ou ficar receoso, gerando um
                    comportamento espelho para o paciente, dificultando o
                    processo do exame e gerando maiores filas de espera.<br><br>

                    Cancelamento de exames por medo e rejeição do filho a ir para o hospital.

                </p>
            </div>
        </div>
        <div>
            <div class="sec4-bola">
            <img class="sec5-img-robo" src="../img/robo impacto neg.png" alt="">
            </div>
        </div>         
    </div>
</section> 

*/}

export default Section5