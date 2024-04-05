function Header(){
    return(
        <header>
            <nav class="texto-global">
                <div class="nav-coluna">
                    <a class="nav-transition" href="./challenge.html" title="TechSIS">
                        <img style="width: 100%; height: 100%;" src="../img/logo.png"/>
                    </a>
                    <a href="#secao1" class="texto-nav nav-transition" style="padding-left: 40px;">Home</a>
                    <a href="#secao2" class="texto-nav nav-transition">A TechSIS</a>
                    <a href="#secao3" class="texto-nav nav-transition">Projeto SISSI</a>
                    <a href="#secao4" class="texto-nav nav-transition">Problema</a>
                    <a href="#secao5" class="texto-nav nav-transition">Impacto Negativo</a>
                    <a href="#secao6" class="texto-nav nav-transition">Solução</a>
                    <p></p>
                    <button class="button-visivel"><a style="color: white;" href="../login/index.html">Login</a></button>
                </div>
            </nav>
        </header>
    )
}

export default Header