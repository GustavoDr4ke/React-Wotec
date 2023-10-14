import loga from './wotec2.png';
import loga2 from './logoWOTec.png';
import './App.css';


function App() {
  return (
    <div className="App">
        <nav>
        <div class="nav-logo">
            <a href="h">
               <img src={loga} alt="" />
            </a>
        </div>

        <ul class="nav-links">
            <li class="link"><a href="h">Inicio</a></li>
            <li id="link1" class="link"><a href="h" >contatos</a></li>
            <li id="link2" class="link"><a href="cadastro.html" target="_blank"> cadastro</a></li>
            <li id="link3" class="link"><a href="h" >sobre nós</a></li>
        </ul> 
        
        <a href="login.html" target="_blank" > <button class="btn">login</button></a>
    </nav>

    <header class="container">
        <div class="content">
            <span class="blur"></span>
            <span class="blur"></span>
            <h4>Sua segurança e a nossa preocuração</h4>
            <h1>Ola, sua a <span>WOtec</span> empresa de segurança domiciliar</h1>
            <p>"Nossa empresa é especializada em proteger o que é mais importante para você:
                 sua segurança. Oferecemos serviços de escalação de câmera de segurança para
                  garantir vigilância contínua e monitoramento eficaz. Além disso, fornecemos
                   soluções avançadas de cerca de choque para reforçar ainda mais a sua defesa.
                   Combinamos tecnologia de ponta e expertise para proporcionar tranquilidade, 
                   assegurando que você e seus bens estejam sempre protegidos."
            </p>
            <a href="SS.html" target="_blank" > <button class="btn">Solicitar Serviço</button></a>
        </div>
        <div class="image">
            <img src={loga2} alt="" />
        </div>
    </header>

    <section class="container">
        <h2 class="header">Informações</h2>
        <div class="features">
            <div class="card">
                <span><i class="ri-money-dollar-box-line"></i></span>
                <h4>metodos de pagamento</h4>
                <p>
                    vejas todos como funciona nossa taxas e metodos de pagamento
                </p>
                
            </div>
            <div class="card">
                <span><i class="ri-bug-line"></i></span>
                <h4>Poblema com o Software</h4>
                <p>
                    Nos Oferecemos 100% de apoio em nosso software que ouver algum poblema 
                </p>
                
            </div>
            <div class="card">
                <span><i class="ri-history-line"></i></span>
                <h4>Tempo de Serviço </h4>
                <p>
                   nosso serviço fazer feito o mais rapido possivel e garantido o melhor serviço possivel 
                    
                </p>
                
            </div>
            <div class="card">
                <span><i class="ri-shake-hands-line"></i></span>
                <h4>Entre em contato com nós</h4>
                <p>
                    Em caso de algum poblema entre en contato com nossa emprea 
                </p>
                <a href="h">veja <i class="ri-arrow-right-line"></i></a>
            </div>
        </div>
    </section>


    <footer class="container">
        <span class="blur"></span>
        <span class="blur"></span>
        <div class="column">
            <div class="logo">
                <img src={loga} alt="" />
            </div>
            <p>
                A empresa em si é uma empresa de muito sucesso.
            </p>
            <div class="socials">
                <a href="h"><i class="ri-youtube-line"></i></a>
                <a href="h"><i class="ri-instagram-line"></i></a>
                <a href="h"><i class="ri-twitter-line"></i></a>
            </div>
        </div>
        <div class="column">
            <h4> Empresa</h4>
            <a href="h">Negócios</a>
            <a href="h">Parceria</a>
            <a href="h">Rede</a>
        </div>
        <div class="column">
            <h4>Sobre nós</h4>
            <a href="h">Blogues</a>
            <a href="h">Canais</a>
            <a href="h">Patrocinadores</a>
        </div>
        <div class="column">
            <h4> Contato</h4>
            <a href="h">Contate-nos</a>
            <a href="h">Política de Privacidade</a>
            <a href="h">termos e Condições</a>
        </div>
    </footer>


    <script src="/src/script/script.js"></script>
    </div>
  );
}

export default App;
