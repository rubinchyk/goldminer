import React, { useState } from 'react';
import './dice.scss';
type Props = {};

const Dice = (props: Props) => {
  const dices = [
    '&#9856;',
    '&#9857;',
    '&#9858;',
    '&#9859;',
    '&#9860;',
    '&#9861;',
  ];

  const [dice, setDice] = useState<string>(dices[0]);
  const [stopped, setStopped] = useState<boolean>(true);
  const [inter, setInter] = useState<NodeJS.Timer>();
  const [currentDice, setCurrentDice] = useState<number>(0);

  const change = () => {
    const random = Math.floor(Math.random() * 6);
    setCurrentDice(random + 1); 
    setDice(dices[random]);
  };

  const stopStart = () => {
    if (stopped) {
      setStopped(false);
      const _interval = setInterval(change, 100);
      setInter(_interval);

      const _end = setInterval(() => {
        clearInterval(_interval); 
        clearInterval(_end); 
        setStopped(true);
      }, 3000)
    }
  };

  return <div className="dice" onClick={stopStart} dangerouslySetInnerHTML={{__html: dice}}></div>;
};

export default Dice;
