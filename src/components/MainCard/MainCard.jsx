import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { MainCardWrapper, HeartSmileText, SmallText, MineText } from './MainCard.styles'
import './MainCard.css'
import ParticlesContainer from '../Confetti/Confetti';

const MainCard = () => {

  const [showParticles, setShowParticles] = useState(false);


  useEffect(() => {
    const handleClick = (event) => {
      if (showParticles) {
        hideConfetti();
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [showParticles]);

  const showConfetti = (e) => {
    e.stopPropagation();
    document.getElementsByClassName('interactive-card-container')[0]?.classList?.add('confetti-reaction');
    setShowParticles(true);
  };

  const hideConfetti = () => {
    document.getElementsByClassName('interactive-card-container')[0]?.classList?.remove('confetti-reaction');
    setShowParticles(false);
  }

  console.log({ showParticles });
  return (
    <>
      <MainCardWrapper
        className={clsx(
          'main-card-wrapper',
          showParticles && 'confetti-reaction'
        )}
      >
        <HeartSmileText>You Make My Heart Smile!</HeartSmileText>
        <img src='/icons8-heart_2.gif' alt='heart-smile' className='heart-smile-img' onClick={showConfetti} />
        <SmallText>
          <p>You are pure sunshine. You make me laugh and my days brighter. How we met feels like a destiny. I'm glad I met you. You are my perfect little baby and I'm so so proud of you.<br></br>
          P.S. Don't forget to click on the little heart</p>
        </SmallText>
      </MainCardWrapper>
      {showParticles && (
        <>
          <ParticlesContainer />
          <MineText>
            <p>
              Oh Boy,<br></br>
              You're Mine!!
            </p>
          </MineText>
        </>
      )}
    </>
  );
}

export default MainCard;