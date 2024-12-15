  import React, { useState } from "react";
  import { SpinWheel } from 'spin-wheel-game';
  import ParticlesContainer from '../Confetti/Confetti'
  import './WheelCard.css';

  const messageEnum = {
    first: "A secret surprise",
    second: "A cute message",
  }

  const WheelCard = (props) => {

      const { setShowWheel } = props;

      const [showParticles, setShowParticles] = useState(false);
      const [wheelResult, setWheelResult] = useState(null);
       
      const segments = [
        { segmentText: 'A secret surprise', segColor: '#f694a5' },
        { segmentText: 'A cute message', segColor: '#e1c9f6' },
      ];
      
      const handleSpinFinish = (result) => {
        console.log(`Spun to: ${result}`);
        setWheelResult(result);
        setShowParticles(true);
      };

      const handleGoBack = () => {
        document.getElementsByClassName('main-card-wrapper')[0]?.classList?.remove('confetti-reaction');
        setShowWheel(false);
      };
      
      const spinWheelProps = {
        segments,
        onFinished: handleSpinFinish,
        primaryColor: 'pink',
        contrastColor: 'snow',
        buttonText: 'Spin',
        isOnlyOnce: false,
        size: 190,
        upDuration: 10,
        downDuration: 600,
        fontFamily: 'CopperPlate Gothic Light',
        arrowLocation: 'center',
        showTextOnSpin: false,
      };

      const getResultMessage = (result) => {
        if (result === messageEnum.first) {
          return <div className="first-message"> You get a hot date night with me 💋 </div>;
        } else if (result === messageEnum.second) {
          return <div className="second-message"><p>Who would’ve thought a random day on Reddit would change my life forever? From that first message "rab di beparwahiyaan kutte khayein malaiyaan" to the endless conversations, you’ve brought so much joy and love into my world. It feels like the universe led us to each other in the most unexpected, magical way. Falling in love with you has been the sweetest adventure, and I’m so grateful for that serendipitous moment. You’re my favorite notification, my forever person, and the reason my heart smiles every day. I love you endlessly.</p></div>;
        }
        return null;
      };
    return (
      <div style={{
        flexDirection: 'column',
        gap: '30px',
        marginTop: '30px',
        display: 'flex',
      }}>
        <SpinWheel
           {...spinWheelProps}
        />
        {showParticles && (
          <ParticlesContainer />
      )}
      {
        wheelResult && getResultMessage(wheelResult)
      }
      <button class="button-56" role="button" onClick={ handleGoBack }>Go Back</button>
      </div>
    );
  };
  
  export default WheelCard;
  