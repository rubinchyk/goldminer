import React, { useState } from 'react';
import './matrix.scss';

type Props = {};

const Matrix = (props: Props) => {
  const randomBlock = (max: number): number => {
    return Math.floor(Math.random() * max) + 1;
  }

  // Correct values for Multiplication table
  const [matrix, setMatrix] = React.useState([
    [1, 2, 3, 4, 5, 6, 7, 8, 9], //1
    [2, 4, 6, 8, 10, 12, 14, 16, 18], //2
    [3, 6, 9, 12, 15, 18, 21, 24, 27], //3
    [4, 8, 12, 16, 20, 24, 28, 32, 36], //4
    [5, 10, 15, 20, 25, 30, 35, 40, 45], //5
    [6, 12, 18, 24, 30, 36, 42, 48, 54], //6
    [7, 14, 21, 28, 35, 42, 49, 56, 63], //7
    [8, 16, 24, 32, 40, 48, 56, 64, 72], //8
    [9, 18, 27, 36, 45, 54, 63, 72, 81], //9
  ]);

  // Horizontal and vertical headers from 1 to 9
  const indexes = Array.from(Array(9).keys());

  // Array from indexes.length will fill with random quantity of elements in each iterations with random number from 1 to 9
  const goldBlocks = indexes.map(i => Array.from(Array(randomBlock(2))).map(() => randomBlock(8)));

  // Check if this block should be gold
  const isItGoldBlock = ($index: number, $index2: number): string => goldBlocks[$index].some(el => el === $index2) ? 'gold' : '';

  // Center of gameboard
  const isItCenter = ($index: number, $index2: number): string => matrix[$index][$index2] === 25 ? 'center' : '';

  return (
    <>
      <table>
        <thead>
          <tr>
            <th></th>
            {indexes.map((ind) => (
              <th key={++ind}>{++ind}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {indexes.map((ind, $index) => (
            <tr key={++ind}>
              <th>{++ind}</th>
              {indexes.map((ind2, $index2) => (
                <td className={`${isItGoldBlock($index, $index2)} ${isItCenter($index, $index2)}`} key={ind2} data-value={matrix[$index][$index2]}></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Matrix;

