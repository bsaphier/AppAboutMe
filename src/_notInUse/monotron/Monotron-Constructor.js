export default class _MonotronConstructor {


  constructor (audioContext) {
    this.audioContext = audioContext;

    this.lfoGain = audioContext.createGain();
    this.lfo = audioContext.createOscillator();
    this.vco = audioContext.createOscillator();
    // >>> I'm going to want to design/create a different filter <<<
    this.vcf = audioContext.createBiquadFilter();
    this.output = audioContext.createGain();

    /* --> audioNode connections <-- */
    this.vco.connect(this.vcf);
    this.vcf.connect(this.output);
    this.lfo.connect(this.lfoGain);
    // >>> the vcf.frequency param might chcange <<<
    this.lfoGain.connect(this.vco.frequency);

    /* --> initialize output to no volume & set osc types <-- */
    this.output.gain.value = 0;
    this.vco.type = this.lfo.type = 'sawtooth';

    /* --> start the oscillators <-- */
    this.vco.start(audioContext.currentTime);
    this.lfo.start(audioContext.currentTime);
  }


  noteOn (freq, time = this.audioContext.currentTime) {
    this.vco.frequency.setValueAtTime(freq, time);
    this.output.gain.linearRampToValueAtTime(1.0, time + 0.1);
  }


  noteOff (time = this.audioContext.currentTime) {
    this.output.gain.linearRampToValueAtTime(0.0, time + 0.1);
  }


  switchLFODest (currentSelection) {
    this.lfoGain.disconnect();
    if (currentSelection === 'Cutoff') {
      this.lfoGain.connect(this.vcf.frequency);
    } else {
      this.lfoGain.connect(this.vco.frequency);
    }
  }


  connect (target) {
    this.output.connect(target);
  }
}
