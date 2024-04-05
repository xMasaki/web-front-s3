import TechSIS from '../img/TechSIS.png'

function Section2(){
    const style1 = {
        borderBottom: '1px solid #34353850',
      };
    const style2 = {
        paddingBottom: '0',
        paddingTop: '0',
      };
    const style21 = {
        fontSize: '25px',
      };
    const style22 = {
        paddingRight: '173px',
        fontSize: '25px',
      };
    const style23 = {
        paddingRight: '198px',
        fontSize: '25px',
      };
    const style3 = {
        display: 'none',
      };
    return(
        <section id="secao2" class="sec2 texto-global">
            <h1 class="sec2-titulo">Somos a <img class="sec2-img1" src={TechSIS} alt="" /></h1>
            <ul style={style1} class="ul-sec2">
                <li>
                    <ul>
                        <li style={style2}>
                            <button class="button-invisivel" onClick="trocarTexto(0)" style={style21}>Quem somos?</button>
                        </li>
                        <li style={style2}>
                            <button style={style22} class="button-invisivel" onClick="trocarTexto(1)" >Nossa Missão</button>
                        </li>
                        <li style={style2}>
                            <button style={style23} class="button-invisivel" onClick="trocarTexto(2)">Nosso Time</button>
                        </li>
                    </ul>
                </li>
                <li></li>
                <li id="sec2-textos">
                    <p id="texto1" class="sec3-txt">
                        Somos um grupo de alunos do 1º ano de Engenharia de Software da FIAP, apaixonados por tecnologia
                        e em pensar em o que podemos fazer para transformar o mundo de hoje para o melhor.
                    </p>
                    <p id="texto2" style={style3} class="sec3-txt">
                        Nossa missão é solucionar problemas enfrentados por hospitais com os conhecimentos que aprendemos até o momento.
                    </p>
                    <p id="texto3" style={style3} class="sec3-txt">
                        Joseh Gabriel: Gestor<br/><br/>
                        Jeferson Gabriel: Design<br/><br/>
                        Larissa Estella, Lucas Masaki e Vitor Vilares: Programadores
                    </p>
                </li>
            </ul>
        </section>
    )
}



{/* 

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
            Gustavo Bezerra: Gestor<br><br>
            Jeferson Gabriel: Design<br><br>
            Larissa Estella, Lucas Masaki e Vitor Vilares: Programadores
        </p>
    </li>
</ul> 
    
    */}



export default Section2