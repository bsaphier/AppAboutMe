/* globals nx typewriter1 keyboard1 select1 dial2 dial3 dial4 dial5 */

import _MonotronConstructor from './Monotron-Constructor';
import keyboardFrequencyMap from './keyboardNoteMap.js';

const _audioContext = (options) => new AudioContext(options);
const _createAudioContext = opts => _audioContext(opts);

const _audioNode = _createAudioContext();
const monotron = new _MonotronConstructor(_audioNode);
const _masterGain = _audioNode.createGain();

_masterGain.gain.value = 0.7;
_masterGain.connect(_audioNode.destination);
monotron.connect(_masterGain);


/* ---> NexusUI Utils <--- */
const _midiToFreq = midiNote => nx.mtof(midiNote);
const _dialListenerCreator = (name, max, param) => {
  name.on('*', data => {
    // >>> TODO change how value is calcualted <<<
    const value = data.value * max;
    param.setValueAtTime(value, _audioNode.currentTime);
  });
};


/* ---> NexusUI Actions <--- */
export default nx.onload = function() {

  typewriter1.on('*', data => {
    switch (data.on) {
      case 1:
        return monotron.noteOn(keyboardFrequencyMap[data.key]);
      default:
        return monotron.noteOff();
    }
  });

  keyboard1.on('*', data => {
    return (keyboard1.clicked) ?
      monotron.noteOn(_midiToFreq(data.note)) :
      monotron.noteOff();
  });

  select1.on('*', data => {
    monotron.switchLFODest(data.text);
  });

  // >>> TODO VCO knob <<<
  // >>> _dialListenerCreator(dial1, 1, monotron); <<<
  _dialListenerCreator(dial2, 20, monotron.lfo.frequency);
  _dialListenerCreator(dial3, 100, monotron.lfoGain.gain);
  _dialListenerCreator(dial4, 2200, monotron.vcf.frequency);
  _dialListenerCreator(dial5, 100, monotron.vcf.Q);

};
