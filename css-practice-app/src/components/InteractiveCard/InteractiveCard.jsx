import React, { useState } from 'react';
import clsx from 'clsx';
import './InteractiveCard.css';
import MusicPlayer from '../MusicPlay/MuiscPlay';
import WheelCard from '../WheelCard/WheelCard';
const InteractiveCard = () => {

    const [showWheel, setShowWheel] = useState(false);
  
  const handleSpinWheel = () => {
    document.getElementsByClassName('main-card-wrapper')[0]?.classList?.add('confetti-reaction');
    setShowWheel(true);
  };

  return (
    <>
    <div className={clsx(
      'interactive-card-container',
      showWheel && 'confetti-reaction',
    )}>
      <div class="card-background-wrapper">
        <div class="card-wrapper flip-right">
            <div class="card">
                <div class="front">
                  <p>Flip to see <br></br> the hottest <br></br> guy <br></br> I know so far</p>
                  <img src='/cardheart.png' alt='heart'/>
                </div>
                <div class="back"><img src="/him.jpg" alt='YOU' width={150} height={200}/></div>
            </div>
        </div>
        </div>
        <div class="card-background-wrapper">
        <div class="card-wrapper">
            <div class="card">
                <div class="front">
                  <p>A song that <br></br> reminds <br></br> me of <br></br> you </p>
                  <MusicPlayer/>
                </div>
            </div>
        </div>
        </div>
        <div class="card-background-wrapper">
        <div class="card-wrapper">
            <div class="card">
                <div class="front" onClick={handleSpinWheel}>
                <p> Tap <br></br> for your <br></br> surprises </p>
                <img src='/icons8-gift-32.png' alt='gift'/>
                </div>
            </div>
        </div>
        </div>
    </div>
    {
      showWheel && (
        <WheelCard 
        setShowWheel={setShowWheel}
        />
      )
    }
    </>
  );
}

export default InteractiveCard;