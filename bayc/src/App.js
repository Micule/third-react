import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="">
      <div className="app">
          <div style={{transition: "opacity 400ms ease 0s, transform 400ms ease 0s", transform: "none", opacity: "1"}}>
              <div className="common-container">
                  <div className="container">
                      <div className="mb-5 mb-lg-0 row">
                          <div className="col-lg-4 col-12 offset-lg-4">
                              <img className="img-fluid d-block mx-auto custom-logo pt-4" src="./BAYC_files/bayc-logo.png" alt="bayc header logo" width="300px" height="300px"/>
                          </div>
                          <div className="d-none d-lg-flex justify-content-end social-icons col-lg-4">
                              <a href="https://www.youtube.com/watch?v=xeDDq6BkScc">
                                  <i className="fa fa-youtube-play social-icon pr-lg-0"></i>
                              </a>
                              <a href="https://www.instagram.com/boredapeyachtclub">
                                  <i className="fa fa-instagram social-icon pr-lg-0"></i>
                              </a>
                              <a href="https://discord.gg/3P5K3dzgdB">
                                  <i className="fa fa-discord-alt social-icon pr-lg-0"></i>
                              </a>
                              <a href="https://twitter.com/BoredApeYC">
                                  <i className="fa fa-twitter social-icon pr-lg-0"></i>
                              </a>
                          </div>
                          <div className="px-0 col-12">
                              <div className="mb-4 mb-lg-5 container">
                                  <div className="row">
                                      <div className="px-0 col-12">
                                          <video className="mx-auto w-100" autoplay="autoplay" loop="true" id="myVideo" muted>
                                              <source src="https://ik.imagekit.io/bayc/assets/club-landing.mp4" type="video/mp4" />
                                          </video>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-12">
                              <div className="welcome pt-lg-4 row">
                                  <div className="border-bottom px-0 ml-3 ml-lg-0 col-9">
                                      <h1 className="common-title mb-3">
                                          WELCOME TO<br />THE BORED APE<br />YACHT CLUB
                                      </h1>
                                      <button className="bayc-button mb-4 w-100" type="button">
                                          ENTER
                                      </button>
                                  </div>
                                  <div className="scroll m-auto pr-0 col-2">
                                      <div className="rotate my-auto">
                                          ← SCROLL DOWN
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="mb-5 row">
                          <div className="col-lg-8 col-12">
                              <p className="common-p">A limited NFT collection where the token itself doubles as your membership to a swamp club for apes. The club is open! Ape in with us.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <footer className="">
              <div className="container-fluid footer-line">
                  <hr className="p-0 line" />
                  <div className="row mx-0 footer-padding">
                      <div className="col-12 col-lg-4 order-lg-first my-lg-auto">
                          <div className="email-container">
                              <span className="email-label">
                                  GET ON THE LIST
                              </span>
                              <br />
                              <div className="d-flex email-flex"><br />
                                  <form id="email-submit" method="post" name="mc-embedded-subscribe-form" target="_blank" className="email-form">
                                      <input id="email-address" className="m-0 email-input-text" type="email" placeholder="Email Address" name="EMAIL" required="" value="" />
                                      <div aria-hidden="true" style={{position: "absolute", left: "-5000px"}}>
                                          <input type="text" name="b_c979ffabc41007fd79ffe121b_b785550a9e" tabindex="-1" value="" />
                                      </div>
                                      <button name="subscribe" className="email-submit" type="submit">→</button>
                                  </form>
                              </div>
                          </div>
                      </div>
                      <div className="col-12 col-lg-4 order-first">
                          <img className="img-fluid footer-logo" src="BAYC_files/bayc-footer.png" alt="logo" />
                      </div>
                      <div className="order-last my-auto text-center col-lg-4 col-sm-12 col-12">
                          <div className="row">
                              <div className="text-lg-right col-sm-12 col-12">
                                <a href="https://www.youtube.com/watch?v=xeDDq6BkScc"><i className="fa fa-youtube-play social-icon pr-lg-0"></i></a><a href="https://www.instagram.com/boredapeyachtclub"><i className="fa fa-instagram social-icon pr-lg-0"></i></a><a href="https://discord.gg/3P5K3dzgdB"><i className="fa fa-discord-alt social-icon pr-lg-0"></i></a><a href="https://twitter.com/BoredApeYC"><i className="fa fa-twitter social-icon pr-lg-0"></i></a>
                              </div>
                              <div className="col-lg-12 col-sm-6 col-6">
                                  <p className="copyright text-right"><span className="copy-left">© 2021 Yuga Labs LLC</span></p>
                              </div>
                              <div className="col-lg-12 col-sm-6 col-6">
                                  <p id="terms" className="copyright text-right">
                                      <a className="" href="https://boredapeyachtclub.com/#/terms">BAYC Terms &amp; Conditions</a>
                                      <br />
                                      <a className="" href="https://boredapeyachtclub.com/#/mayc/terms">MAYC Terms &amp; 1</a>
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="container-fluid m-0 p-0">
                  <span className="last-line"></span>
              </div>
          </footer>

      </div>
    </div>
  );
}

export default App;
