function Body(){
    return(
        
        <main style="display: block;">
            <section id="secao1" class="sec1">
                <img class="sec1-img1" src="../img/sec1.png" alt=""/>
                <img src="../img/S.png" alt="" class="sec1-img2 transition2"/>
                <p class="sec1-slogan slogan">Nada melhor do que informação para todos.</p>
            </section>
            <section id="secao2" class="sec2 texto-global">
                <h1 class="sec2-titulo">Somos a <img class="sec2-img1" src="../img/TechSIS.png" alt=""/></h1>
            <ul style="border-bottom: 1px solid #34353850;" class="ul-sec2">
                <li>
                    <ul>
                        <li style="padding-bottom: 0; padding-top: 0;">
                            <button class="button-invisivel" onclick="trocarTexto(0)" style="font-size: 25px;">Quem somos?</button>
                        </li>
                        <li style="padding-bottom: 0; padding-top: 0;">
                            <button style="padding-right: 173px; font-size: 25px;" class="button-invisivel" onclick="trocarTexto(1)" >Nossa Missão</button>
                        </li>
                        <li style="padding-bottom: 0; padding-top: 0;">
                            <button style="padding-right: 198px; font-size: 25px;" class="button-invisivel" onclick="trocarTexto(2)">Nosso Time</button>
                        </li>
                    </ul>
                </li>
                <li></li>
                <li id="sec2-textos">
                    <p id="texto1" class="sec3-txt">
                        Somos um grupo de alunos do 1º ano de Engenharia de Software da FIAP, apaixonados por tecnologia
                        e em pensar em o que podemos fazer para transformar o mundo de hoje para o melhor.
                    </p>
                    <p id="texto2" style="display:none;" class="sec3-txt">
                        Nossa missão é solucionar problemas enfrentados por hospitais com os conhecimentos que aprendemos até o momento.
                    </p>
                    <p id="texto3" style="display:none;" class="sec3-txt">
                        Gustavo Bezerra: Gestor<br/><br/>
                        Jeferson Gabriel: Design<br/><br/>
                        Larissa Estella, Lucas Masaki e Vitor Vilares: Programadores
                    </p>
                </li>
            </ul>
            </section>
            <section id="secao3" class="sec2 texto-global">
                <h1 class="sec3-titulo">Projeto <img class="sec3-img1" src="../img/S.png" alt=""/></h1>
                <p style="border-bottom: 1px solid #34353850; padding-bottom: 50px; letter-spacing: .3px; font-size: 20px;">
                    O projeto SISSI tem como objetivo auxiliar as etapas de atendimento, trazendo qualidade, excelência, simplicidade e confiança para os usuários e os médicos/enfermeiros, fazendo com que o tratamento seja realizado da melhor maneira possível.<br/><br/>
                    A fim de possibilitar o fim da desinformação, medo e preocupação tornando a experiência do paciente e seus acompanhantes a melhor possível, a SISSI é uma plataforma web que possui uma interface simples e intuitiva para humanizar e simplificar o acesso às informações médicas.<br/><br/>
                    O site conterá explicações de procedimentos rotineiros das instalações médicas para as crianças e acompanhantes por meio de imagens explicativas, bem como funcionalidades interativas e cartazes de passo a passo com imagens dos procedimentos que serão realizados de uma forma lúdica para melhorar a comunicação assertiva no âmbito de possibilitar ao receptor permitindo que tenha o maior entendimento sobre as informações e procedimentos.<br/><br/>
                </p>
            </section>
            <section id="secao4" class="sec2 texto-global" style="padding-top: 60px; height: 600px;">
                <div class="ul-sec3">
                    <div>
                        <div class="sec4-bola">
                        <img class="sec4-img-robo" src="../img/robo-problema.png" alt=""/>
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
            <section id="secao5" class="sec2 texto-global" style="height: 600px;" >
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
                        <img class="sec5-img-robo" src="../img/robo impacto neg.png" alt=""/>
                        </div>
                    </div>         
                </div>
            </section>
            <section id="secao6" class="sec2 texto-global" style="padding-bottom: 60px; height: 600px;">
                <div class="ul-sec3">
                    <div>
                        <div class="sec4-bola">
                        <img class="sec6-img-robo" src="../img/robo-solucao.png" alt=""/>
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
        </main>
    )
}

export default Body