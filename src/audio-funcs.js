import { SineDing } from './bin/audio-helpers';


export const soundEvent = ({ noteInHz }) => aCtx => {
  let sound = new SineDing( aCtx );
  sound.play(noteInHz);
  sound.stop();
};
