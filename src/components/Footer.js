import React from 'react';
import { Footer } from 'react-materialize';
import youtube from '../assets/ic_youtube.png';
import facebook from '../assets/ic_facebook.png';
import './Footer.css';

const Deck = () => {
  return (
    <Footer
      className="footer"
      style={{ background: '#212121' }}
      copyrights="Projeto React 2020 Copyright"
      links={
        <ul>
          <li>
            <a className="orange-text text-lighten-3" href="ferramentas">
              Ferramentas
            </a>
          </li>
          <li>
            <a className="orange-text text-lighten-3" href="sobre">
              Sobre
            </a>
          </li>
          <li>
            <a className="orange-text text-lighten-3" href="contato">
              Contato
            </a>
          </li>
          <li>
            <a className="orange-text text-lighten-3" href="#!">
              Git
            </a>
          </li>
        </ul>
      }
      moreLinks={
        <a className="grey-text text-lighten-4 right" href="sobre">
          <img src={youtube} alt="Alguma coisa" className="redesSociais" />
          <img src={facebook} alt="Alguma coisa" className="redesSociais" />
        </a>
      }
    >
      <h4 className="footerTitle">Projeto React</h4>
      <p className="web3">if (web3.prof == "fábio")</p>
    </Footer>
  );
};

export default Deck;
