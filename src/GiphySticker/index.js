import React, { useEffect } from 'react';
import giphy from 'assets/images/giphy.svg';
import styled from 'styled-components';
import './index.css';

function GiphySticker() {
  useEffect(() => {
    (function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; window.giphyStickerPackId = 4809408; js = d.createElement(s); js.id = id; js.src ='https://scripts.giphy.com/sticker-embed/latest/bundle.js'; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'giphy-sticker-pack'))
  }, []);
  

  return (
      <Wrapper>
        <ImageWrapper>
          <Image src={giphy} className="App-logo" alt="logo" />
        </ImageWrapper>
        <p>
          Click GIPHY stickers at the bottom right of the screen to party! 🍾🥳
        </p>
        <BackButton>
          🔙 to <a href="https://hung.dev">hung.dev</a>
        </BackButton>
      </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: antiquewhite;
  padding: 16px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

const ImageWrapper = styled.div`
  padding-bottom: 50px;
`

const Image = styled.img`
  width: 100%;
  display: block;
  width: 300px;
`

const BackButton = styled.span`
  position: fixed;
  bottom: 10px;
  left: 10px;
  font-size: 0.75rem;
`

export default GiphySticker;
