import roboSolucao from '../img/robo-solucao.png'

function Section6(){
    const style1 = {
        paddingBottom: '60px',
        height: '600px',
      };
    return(
        <section id="secao6" class="sec2 texto-global" style={style1}>
            <div class="ul-sec3">
                <div>
                    <div class="sec4-bola">
                        <img class="sec6-img-robo" src={roboSolucao} alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        <h1 class="sec6-titulo">Solução</h1>
                        <p class="sec6-texto">
                            Um site que explicará de forma acessível, didática e intuitiva<br/>
                            os exames que os pacientes farão, visando acalmar a pessoa<br/>
                            e o acompanhante que passará pelos processos médicos,<br/>
                            informando-o dos processos.<br/><br/>

                            Além de um sistema que permita atrelar exames, diagnóstico<br/>
                            e histórico médico ao CPF do paciente e ao agendar um exame,<br/>
                            de forma automática enviar uma mensagem para o whatsapp<br/>
                            do paciente ou acompanhante com a confirmação do<br/>
                            agendamento e o link para o site contendo a explicação e<br/>
                            etapas do exame que fará.

                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

{/* 

<section id="secao6" class="sec2 texto-global" style="padding-bottom: 60px; height: 600px;">
    <div class="ul-sec3">
        <div>
            <div class="sec4-bola">
            <img class="sec6-img-robo" src="../img/robo-solucao.png" alt="">
            </div>
        </div>
        <div>
            <!-- <img class="sec4-img-meialua" src="../img/dir.png" alt=""> -->
            <div>
                <h1 class="sec6-titulo">Solução</h1>
                <p class="sec6-texto">
                    Um site que explicará de forma acessível, didática e intuitiva<br>
                    os exames que os pacientes farão, visando acalmar a pessoa<br>
                    e o acompanhante que passará pelos processos médicos,<br>
                    informando-o dos processos.<br><br>

                    Além de um sistema que permita atrelar exames, diagnóstico<br>
                    e histórico médico ao CPF do paciente e ao agendar um exame,<br>
                    de forma automática enviar uma mensagem para o whatsapp<br>
                    do paciente ou acompanhante com a confirmação do<br>
                    agendamento e o link para o site contendo a explicação e<br>
                    etapas do exame que fará.

                </p>
            </div>
        </div>
    </div>
</section> 

*/}


export default Section6