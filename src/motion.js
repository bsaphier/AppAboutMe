import { presets, spring } from 'react-motion';

export const welcome = {
  initial: {
    top: -42,
    letterSpacing0: 21,
    letterSpacing1: 13,
    letterSpacing2: 8,
    letterSpacing3: 5,
    letterSpacing4: 3,
    letterSpacing5: 2,
    letterSpacing6: 1,
    letterSpacing7: 1
  },
  exit: {
    top: spring(-42, presets.stiff),
    letterSpacing0: spring(1, presets.wobbly),
    letterSpacing1: spring(1, presets.wobbly),
    letterSpacing2: spring(1, presets.wobbly),
    letterSpacing3: spring(1, presets.wobbly),
    letterSpacing4: spring(1, presets.wobbly),
    letterSpacing5: spring(1, presets.wobbly),
    letterSpacing6: spring(1, presets.wobbly),
    letterSpacing7: spring(1, presets.wobbly)
  },
  enter: {
    top: spring(42, presets.stiff),
    letterSpacing0: spring(-0.055, presets.wobbly),
    letterSpacing1: spring(0.175, presets.gentle),
    letterSpacing2: spring(-0.06, presets.wobbly),
    letterSpacing3: spring(-0.08, presets.gentle),
    letterSpacing4: spring(-0.048, presets.gentle),
    letterSpacing5: spring(-0.1, presets.gentle),
    letterSpacing6: spring(-0.091, presets.gentle),
    letterSpacing7: spring(-0.1, presets.gentle)
  }
};
