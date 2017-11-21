import { firstRoll, secondRoll, maxPins } from '../constants'

export const isSpare = (pinsHitted, roll) => roll === secondRoll && (pinsHitted === maxPins);
export const isStrike = (pinsHitted, roll) => roll === firstRoll && (pinsHitted === maxPins);

export const cyclicChangeState = (state) => state === firstRoll ? secondRoll : firstRoll;