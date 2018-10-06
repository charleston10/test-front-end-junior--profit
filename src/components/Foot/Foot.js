import React from 'react';
import logoProfite2 from "../../assets/logo_profite2.png";
import logoVtex from "../../assets/logo_vtex.png";
import letter from "../../assets/letter.png";
import headset from "../../assets/headset.png";

class Foot extends React.Component {
    render() {
        return (
            <div class="row align-items-center">
                <div id="divAdress" class="col-5">
                    <div class="row align-items-center">
                        <div class="col-sm">
                            <span>Localização</span>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-sm">
                            <div id="divrectangle" />
                        </div>
                    </div>
                    <div id="rowListFoot" class="row align-items-center">
                        <div class="col-5">
                            <ul>
                                <li>São Paulo</li>
                                <li>Rua do Rócio, 423/1801</li>
                                <li>Vila Olímpia - SP</li>
                                <li>04552-000</li>
                                <li>+55 11 3333 3333</li>
                            </ul>
                        </div>
                        <div class="col-5">
                            <ul>
                                <li>Rio de Janeiro</li>
                                <li>Vol.da Pátria, 301/702</li>
                                <li>Botafogo - RJ</li>
                                <li>22270-000</li>
                                <li>+55 21 3333 3333</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="divContatFoot" class="col-5">
                    <div class="row align-items-center">
                        <div class="col-6">
                            <button><img src={letter} alt="letter" />ENTRE EM CONTATO</button>
                            <button><img src={headset} alt="headset" />FALE COM O NOSSO CONSULTOR ONLINE</button>
                        </div>
                    </div>
                </div>
                <div id="divImgFoot" class="col-2 align-self-end">
                    <div class="row">
                        <div class="col-sm">
                            <div class="row">
                                <span>Created by</span>
                            </div>
                            <div id="divImgFootProfite" class="row">
                                <img src={logoProfite2} alt="logoProfite2" />
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="row">
                                <span>Powered by</span>
                            </div>
                            <div id="divImgFootVtex" class="row">
                                <img src={logoVtex} alt="logoVtex" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Foot;
