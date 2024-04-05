function Footer(){
    return(
        <footer>
            <div class="texto-global" style="padding-top: 40px; padding-bottom: 60px; border-top: 4px solid orange;">
                <ul class="ul-footer">
                    <li>
                        <ul style="padding-bottom: 30px;">
                            <p class="titulo-footer">SOBRE</p>
                            <li>
                                <a href="#secao2" class="texto-foot">O que é TechSIS?</a>
                            </li>
                            <li>
                                <a href="#secao3" class="texto-foot">O que é SISSI?</a>
                            </li>
                        </ul>
                        <ul>
                            <p class="titulo-footer">INVESTIMENTO</p>
                            <li>
                                <a href="" class="texto-foot">Invista na TechSIS</a>
                            </li>
                            <li>
                                <a href="" class="texto-foot">Fundo de Investimento da TechSIS</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                        <p class="titulo-footer"></p>
                        <li></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <p class="titulo-footer">CONHEÇA NOSSO TIME</p>
                            <li>
                                <a href="https://www.linkedin.com/in/gustavo-bezerra-829202289/" class="texto-foot">Gustavo Bezerra</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/jeferson-gabriel-de-mendon%C3%A7a-59b443210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app " class="texto-foot">Jeferson Gabriel</a>
                            </li>
                            <li>
                                <a href="" class="texto-foot">Larissa Estella</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/lucas-masaki-nagahama-17040728a/" class="texto-foot">Lucas Masaki</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/victor-vilares-05a742211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " class="texto-foot">Vitor Vilares</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul style="padding-bottom: 70px;">
                            <p style="padding-bottom: 3px;" class="titulo-footer">FALE CONOSCO</p>
                            <li>
                                <div class="form-control">
                                    <input style="margin-bottom: 10px;" type="text" id="email" placeholder="Digite seu e-mail" />
                                </div>
                                <div>
                                    <button class="button-visivel" type="submit" id="button2">Enviar</button>
                                </div>
                            </li>
                        </ul>  
                        <ul>
                            <p style="padding-bottom: 3px;" class="titulo-footer">OUVIDORIA</p>
                            <li>
                                <button class="button-visivel" type="submit">Clique Aqui</button>
                            </li>
                        </ul>  
                    </li>
                </ul>
            </div>
            <div class="texto-global">
                <ul class="redes-sociais">
                    <li style="border-top: 1px solid #343538;">
                        <p class="titulo-footer"  style="padding-top: 35px; padding-bottom: 35px;">SIGA AS NOSSAS REDES SOCIAIS</p>
                    </li>
                    <li style="display: flex; align-items: center; flex-direction: row-reverse; border-top: 1px solid #343538;">
                        <ul class="ul-footer">
                            <li class="logo-espaco">
                                <a href="https://www.youtube.com/">
                                    <img src="../img/youtube.svg" alt=""/>
                                </a>
                            </li>
                            <li class="logo-espaco">
                                <a href="https://www.facebook.com/?locale=pt_BR">
                                    <img src="../img/facebook.svg" alt=""/>
                                </a>
                            </li>
                            <li class="logo-espaco">
                                <a href="https://www.linkedin.com/">
                                    <img src="../img/linkedin.svg" alt=""/>
                                </a>
                            </li>
                            <li class="logo-espaco">
                                <a href="https://www.instagram.com/">
                                    <img src="../img/instagram.svg" alt=""/>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>    
            <div class="direitos-reservados">
                <p style="opacity: .8;">
                    2023-2024 TechSIS/INTERESTELAR
                </p>
                <p style="opacity: .8;">
                    Todos os direitos reservados - TechSIS
                </p>
            </div>
        </footer>
    )
}

export default Footer