import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header id="header">

        <nav className="navbar navbar-expand aos-init aos-animate visible navbar-sticky">
          <div className="container header">

            <img src="./assets/solyeti.png" alt="logo-solyetis" className="logo-main" />

            <div className="ml-auto"></div>

            <ul className="navbar-nav items">
              <li className="nav-item dropdown">
                <a href="https://solyetis.io/#solyetis" className="nav-link smooth-anchor">SOLYETIS</a>
              </li>
              <li className="nav-item">
                <a href="https://solyetis.io/#project-himalaya" className="nav-link smooth-anchor">PROJECT HIMALAYA</a>
              </li>
              <li className="nav-item">
                <a href="https://solyetis.io/#showcase" className="nav-link smooth-anchor">SHOWCASE</a>
              </li>
              <li className="nav-item">
                <a href="https://solyetis.io/#roadmap" className="nav-link smooth-anchor">ROADMAP</a>
              </li>
              <li className="nav-item">
                <a href="https://solyetis.io/#team" className="nav-link smooth-anchor">TEAM</a>
              </li>
              <li className="nav-item">
                <a href="https://solyetis.io/#faq" className="nav-link smooth-anchor">FAQ</a>
              </li>
              <li className="nav-item">
                <a href="https://twitter.com/SolYetis" target="_blank" className="nav-link shmob">TWITTER</a>
              </li>
              <li className="nav-item">
                <a href="https://discord.gg/dxZvHtWpbb" target="_blank" className="nav-link shmob">DISCORD</a>
              </li>
            </ul>

            <ul className="navbar-nav icons">
              <li className="nav-item social">
                <a href="https://twitter.com/SolYetis" target="_blank" className="nav-link"><i className="icon-social-twitter"></i></a>
              </li>
              <li className="nav-item social">
                <a href="https://discord.gg/dxZvHtWpbb" target="_blank" className="nav-link">
                  <img className="discord-icon" src="./assets/discord-icon.webp"/></a>
              </li>
            </ul>

            <ul className="navbar-nav toggle">
              <li className="nav-item">
                <a href="https://solyetis.io/#" className="nav-link" data-toggle="modal" data-target="#menu">
              <i className="icon-menu m-0"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section id="slider" className="hero odd p-0-cor">
      <div className="swiper-container no-slider animation slider-h-100 swiper-container-cor swiper-container-initialized swiper-container-horizontal">
        <div className="swiper-wrapper swiper-wrapper-cor" style={{transform: "translate3d(0px, 0px, 0px)"}}>

          <div className="swiper-slide slide-center swiper-slide-active" style={{width: "1349px"}}>

            <div id="particles-1" className="particles full-image" data-particle="space" data-mask="70">
              <canvas className="particles-js-canvas-el" width="1349" height="454" style={{width: "100%", height: "100%"}}></canvas>
            </div>
            <div className="slide-content row">
              <div className="col-12 d-flex inner">
                <div className="center align-self-center text-center">
                  <img data-aos="zoom-out-up" data-aos-delay="400" className="title effect-static-text aos-init yeti-main aos-animate" src="./assets/main-image-min.webp" />
                  <p data-aos="zoom-out-up" data-aos-delay="800" className="description ml-auto mr-auto aos-init aos-animate" style={{color:"#FFF"}}>
                    8888 Yetis are coming down from the mountains to form the SolYetis.<br />Listed on 
                    <a href="https://solanart.io/collections/solyetisog" target="_blank" className="lnklist">Solanart</a> , <a href="https://ftx.us/nfts/collection/SolYetis" target="_blank" className="lnklist">FTX</a> and <a href="https://alpha.art/collection/solyetis" target="_blank" className="lnklist">Alpha art</a>.
                  </p>
                  <div id="countdown">
                    <p className="launch">LAUNCHED ON : <br />13th October 9:30PM UTC</p>
                    <div id="btn-portal"><button className="btn-web btn-web-sd">SOLDOUT</button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
      </section>

      <section id="solyetis" className="section-1 odd highlights image-right">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 align-self-center text-center text-md-left">
            <div className="row intro">
              <div className="col-12 p-0">
                <h2 className="mb-0 super effect-static-text">SOLYETIS</h2>
                <p>Each Yeti is unique and holding one or more grants you access to many perks.</p>
              </div>
            </div>
            <div className="row items">
              <div className="col-12 p-0">
                <div className="row item">
                  <div className="col-12 col-md-2 align-self-center">
                    <i className="icon icon-plus"></i>
                  </div>
                  <div className="col-12 col-md-9 align-self-center">
                    <h4 className="ic1">Baby Yetis are coming</h4>
                    <p className="ic2">All Yetis holders who aren’t listing their Yetis will receive a free airdrop of Baby Yeti.</p>
                  </div>
                </div>
                <div className="row item">
                  <div className="col-12 col-md-2 align-self-center">
                    <i className="icon icon-plus"></i>
                  </div>
                  <div className="col-12 col-md-9 align-self-center">
                    <h4 className="ic1">$10k Giveaway</h4>
                    <p className="ic2">We will start the $10K giveaway<br />(or trip to the Himalayas, you choose)
                    <br />this week with special conditions to reward true holders.</p>
                  </div>
                </div>
                <div className="row item">
                  <div className="col-12 col-md-2 align-self-center">
                    <i className="icon icon-plus"></i>
                  </div>
                  <div className="col-12 col-md-9 align-self-center">
                    <h4 className="ic1">Yeti gang STRONG</h4>
                    <p className="ic2">Trading fees royalties from Baby Yetis will be put 100% in the mutual wallet to sweep the floor of Yetis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="col-12 col-md-6">
        <div className="col-md-12" style={{height:"13%"}}></div>
        <img src="./assets/solyetis.webp" className="YETI gif" alt="About Us" />
        </div>
        </div>
      </div>
      </section>

      <section id="project-himalaya" className="section-2 highlights image-center">
      <div className="container smaller">
        <div className="row text-center intro himalaya">
          <div className="col-12">
            <h2>PROJECT HIMALAYA</h2>
            <p className="text-max-800">8 Yetis will go back to the legendary Himalayans mountains in real life. 
            <br/>Your Yeti will give you a <b>chance to win a trip</b> straight back to the <b>Himalayas</b>.
            <br/>The winners can either <b>choose to receive $10k</b> or the <b>full adventure trip to Himalayas</b>.</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12">
            <img src="./assets/TRAVEL-min.png" className="fit-image" alt="PROJECT HIMALAYA"/>
          </div>
        </div>
      </div>
      </section>

      <section id="showcase" className="section-1 carousel showcase">
      <div className="overflow-holder">
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <h2 className="super effect-static-text text-center">SHOWCASE</h2>
            </div>
          </div>
          <div className="swiper-container mid-slider items swiper-container-initialized swiper-container-horizontal">
            <div className="swiper-wrapper" style={{transform: "translate3d(-1950px, 0px, 0px)", "transition-duration": "0ms"}}>
              <div className="swiper-slide slide-center item swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="2" style={{width: "360px", "margin-right": "30px"}}>
                <div className="row card p-0 text-center">
                  <img src="./assets/3.jpg" alt="SOLYETIS"/>
                </div>
              </div>
              <div className="swiper-slide slide-center swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="3" style={{width: "360px", "margin-right": "30px"}}>
                <div className="row card p-0 text-center">
                  <img src="./assets/4.jpg" alt="SOLYETIS"/>
                </div>
              </div>
              <div className="swiper-slide slide-center swiper-slide-duplicate" data-swiper-slide-index="4" style={{width: "360px", "margin-right": "30px"}}>
                <div className="row card p-0 text-center">
                  <img src="./assets/5.jpg" alt="SOLYETIS"/>
                </div>
              </div>
              <div className="swiper-slide slide-center item" data-swiper-slide-index="0" style={{width: "360px", "margin-right": "30px"}}>
                <div className="row card p-0 text-center">
                  <img src="./assets/1.jpg" alt="SOLYETIS"/>
                </div>
              </div>
              <div className="swiper-slide slide-center item swiper-slide-prev" data-swiper-slide-index="1" style={{width: "360px", "margin-right": "30px"}}>
                <div className="row card p-0 text-center">
                  <img src="./assets/2.jpg" alt="SOLYETIS"/>
                </div>
              </div>
              <div className="swiper-slide slide-center item swiper-slide-active" data-swiper-slide-index="2" style={{width: "360px", "margin-right": "30px"}}>
                <div className="row card p-0 text-center">
                  <img src="./assets/3.jpg" alt="SOLYETIS"/>
                </div>
              </div>
              <div className="swiper-slide slide-center swiper-slide-next" data-swiper-slide-index="3" style={{width: "360px", "margin-right": "30px"}}>
                <div className="row card p-0 text-center">
                  <img src="./assets/4.jpg" alt="SOLYETIS"/>
                </div>
              </div>
              <div className="swiper-slide slide-center" data-swiper-slide-index="4" style={{width: "360px", "margin-right": "30px"}}>
                <div className="row card p-0 text-center">
                  <img src="./assets/5.jpg" alt="SOLYETIS"/>
                </div>
              </div>
              <div className="swiper-slide slide-center item swiper-slide-duplicate" data-swiper-slide-index="0" style={{width: "360px", "margin-right": "30px"}}>
                <div className="row card p-0 text-center">
                  <img src="./assets/1.jpg" alt="SOLYETIS"/>
                </div>
              </div>
              <div className="swiper-slide slide-center item swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="1" style={{width: "360px", "margin-right": "30px"}}>
                <div className="row card p-0 text-center">
                  <img src="./assets/2.jpg" alt="SOLYETIS"/>
                </div>
              </div>
              <div className="swiper-slide slide-center item swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="2" style={{width: "360px", "margin-right": "30px"}}>
                <div className="row card p-0 text-center">
                  <img src="./assets/3.jpg" alt="SOLYETIS"/>
                </div>
              </div>
            </div>
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
              <span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span>
              <span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span>
              <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 3"></span>
              <span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 4"></span>
              <span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 5"></span>
            </div>
            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
          </div>
        </div>
      </div>
      </section>

      <section id="roadmap" className="section-4 featured">
      <div className="container">
        <div className="row text-center intro">
          <div className="col-12">
            <h2 className="white">ROADMAP</h2>
          </div>
        </div>
        <div className="timeline bg-snow">
          <ul>
            <li className="in-view">
              <div>
              <time>STAGE 1</time>The concept of 8888 Yetis starts to emerge. The founders bring together a team of a talented artist and developers to make this project alive.
              </div>
            </li>
            <li className="in-view">
              <div>
              <time>STAGE 2</time>Release free all 8888 Yetis on the Solana blockchain.
              </div>
            </li>
            <li className="in-view">
              <div>
              <time>STAGE 3</time>Sold out in 15sec.
              </div>
            </li>
            <li className="in-view">
              <div>
              <time>STAGE 4</time>Listed on Solanart.
              </div>
            </li>
            <li className="in-view">
              <div>
              <time>Stage 5</time>Listed on all major marketplaces: Alpha.art, Solsea.io, DigitalEyes.market, MagicEden.io.
              </div>
            </li>
            <li className="in-view">
              <div>
              <time>Stage 6</time>Project Himalaya: 8 Yetis will choose to either go on a crazy adventure trip to Himalaya or to receive $10K.
              </div>
            </li>
            <li className="in-view">
              <div>
              <time>Stage 7</time>Baby yetis are coming! Free airdrop for the community. 1 yeti = 1 baby yeti coming to your wallet. The more yetis you hold, the more baby yetis you'll get!
              </div>
            </li>
            <li className="in-view">
              <div>
              <time>Stage 8</time>All community members holding their yeti will automatically be whitelisted for future sales and will have a special discounts on every new project we launch.
              </div>
            </li>
          </ul>
        </div>
      </div>
      </section>

      <section id="team" className="section-1 odd offers secondary featured custom">
      <div className="container">
        <div className="row text-center intro">
          <div className="col-12">
          <h2 className="mb-0 super effect-static-text">TEAM</h2>
          </div>
        </div>
        <div className="row justify-content-center text-center items">
          <div className="col-12 col-md-6 col-lg-4 item">
            <div className="card featured">
              <h4>Sasquatch</h4>
              <p>Co-founder</p>
              <img src="./assets/Sasquatch.jpg" alt="Co-founder"/>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 item">
            <div className="card">
              <h4>Teh-Meh</h4>
              <p>Co-founder</p>
              <img src="./assets/Teh-Meh.jpg" alt="Co-founder"/>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 item">
            <div className="card featured">
              <h4>Mirka</h4>
              <p>Artist</p>
              <img src="./assets/Mirka.jpg" alt="Artist"/>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 item">
            <div className="card featured">
              <h4>Big Foot</h4>
              <p>Dev lead</p>
              <img src="./assets/Big-foot.jpg" alt="Dev lead"/>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 item">
            <div className="card featured">
              <h4>Snowman</h4>
              <p>Marketing</p>
              <img src="./assets/Snowman.jpg" alt="Marketing"/>
            </div>
          </div>
        </div>
      </div>
      </section>

      <section id="faq" className="section-6 ">
      <div className="container smaller">
        <div className="row text-center intro">
          <div className="col-12">
            <h2>FAQ</h2>
          </div>
          <div className="accordion" id="accordionFaq">
            <div className="card1">
              <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What’s the total supply of the SolYetis
                  </button>
                </h2>
              </div>
              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionFaq">
                <div className="card-body">
                Only 8888.
                </div>
              </div>
            </div>
            <div className="card1">
              <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                  <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    What’s the minting cost?
                  </button>
                </h2>
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionFaq">
                <div className="card-body">
                  The minting cost is 0.99 SOL
                </div>
              </div>
            </div>
            <div className="card1">
              <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                  <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    When is the launch date?
                  </button>
                </h2>
              </div>
              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionFaq">
                <div className="card-body">
                  The mint will happen on 10/13/21 at 9:30PM UTC.
                </div>
              </div>
            </div>
            <div className="card1">
              <div className="card-header" id="accord4">
                <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                Can I get more than 1 Yeti?
                </button>
                </h2>
              </div>
              <div id="collapse4" className="collapse" aria-labelledby="accord4" data-parent="#accordionFaq">
                <div className="card-body">
                  If you are fast enough...you can try
                </div>
              </div>
            </div>
            <div className="card1">
              <div className="card-header" id="accord5">
                <h2 className="mb-0">
                  <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                  Which wallet will be available?
                  </button>
                </h2>
              </div>
              <div id="collapse5" className="collapse" aria-labelledby="accord5" data-parent="#accordionFaq">
                <div className="card-body">
                  You will be able to mint SolYetis with Phantom (recommended), Sollet, and Solflare.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <footer className="odd">

      <section id="copyright" className="p-3 copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 p-3 text-center ">
              <p>© 2021 SOLYETIS is Proudly Powered by <a href="https://solana.com/" target="_blank">Solana</a>.</p>
            </div>
          </div>
        </div>
      </section>
      </footer>

      <div id="menu" className="p-0 modal fade" role="dialog" aria-labelledby="menu" aria-hidden="true">
      <div className="modal-dialog modal-dialog-slideout" role="document">
        <div className="modal-content full">
          <div className="modal-header" data-dismiss="modal">
            Menu <i className="icon-close"></i>
          </div>
          <div className="menu modal-body">
            <div className="row w-100">
              <div className="items p-0 col-12 text-center">
                <ul className="navbar-nav items">
                  <li className="nav-item dropdown">
                    <a href="https://solyetis.io/#solyetis" className="nav-link smooth-anchor prevent">SOLYETIS</a>
                  </li>
                  <li className="nav-item">
                    <a href="https://solyetis.io/#project-himalaya" className="nav-link smooth-anchor">PROJECT HIMALAYA</a>
                  </li>
                  <li className="nav-item">
                    <a href="https://solyetis.io/#showcase" className="nav-link smooth-anchor">SHOWCASE</a>
                  </li>
                  <li className="nav-item">
                    <a href="https://solyetis.io/#roadmap" className="nav-link smooth-anchor">ROADMAP</a>
                  </li>
                  <li className="nav-item">
                    <a href="https://solyetis.io/#team" className="nav-link smooth-anchor">TEAM</a>
                  </li>
                  <li className="nav-item">
                    <a href="https://solyetis.io/#faq" className="nav-link smooth-anchor">FAQ</a>
                  </li>
                  <li className="nav-item">
                    <a href="https://twitter.com/SolYetis" target="_blank" className="nav-link shmob">TWITTER</a>
                  </li>
                  <li className="nav-item">
                    <a href="https://discord.gg/dxZvHtWpbb" target="_blank" className="nav-link shmob">DISCORD</a>
                  </li>
                </ul>
              </div>
              <div className="contacts p-0 col-12 text-center">

              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div id="scroll-to-top" className="scroll-to-top" style={{display: "block"}}>
      <a href="https://solyetis.io/#header" className="smooth-anchor">
        <i className="icon-arrow-up"></i>
      </a>
      </div>
    </div>
  );
}

export default App;
