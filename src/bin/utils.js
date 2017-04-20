export const int = float => parseInt(float, 10);

// pythagorean theorem (a^2 + b^2 = c^2) given a and b, this func returns c
export const hypote = (x, y) => Math.sqrt( Math.pow(x, 2) + Math.pow(y, 2) );

const _normHelpA = (max, min, newMax, newMin) => ((newMax - newMin) / (max - min));
const _normHelpB = (max, newMax, paramA) => (newMax - paramA * max);

// this returns a func that will normalize an input to the range provided here
export const normal = (max, min, newMax, newMin) => {
  let paramA = _normHelpA(max, min, newMax, newMin);
  let paramB = _normHelpB(max, newMax, paramA);

  return ( value ) => (paramA * value + paramB);
};
