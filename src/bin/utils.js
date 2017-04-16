export const int = float => parseInt(float, 10);

const _normHelpA = (max, min, newMax, newMin) => ((newMax - newMin) / (max - min));
const _normHelpB = (max, newMax, paramA) => (newMax - paramA * max);

// this returns a func that will normalize an input to the range provided here
export const normal = (max, min, newMax, newMin) => {
  let paramA = _normHelpA(max, min, newMax, newMin);
  let paramB = _normHelpB(max, newMax, paramA);

  return ( value ) => (paramA * value + paramB);
};
