export const scaleFactory = (scale, tonic) => scale.map( (step, idx) => ({
    step: idx + 1,
    noteInHz: tonic * step
}) );


export class SineDing {

    constructor(context) {
        this.context = context;
    }

    setup() {
        this.oscillator = this.context.createOscillator();
        this.oscillator.type = 'sine';

        this.filter = this.context.createBiquadFilter();
        this.filter.frequency.value = 3520;
        this.filter.type = 'bandpass';
        this.filter.Q.value = 0.8;

        this.gainNode = this.context.createGain();

        this.oscillator.connect(this.filter);
        this.filter.connect(this.gainNode);
        this.gainNode.connect(this.context.destination);
    }

    play(value) {
        this.setup();
        this.oscillator.frequency.value = value;
        this.gainNode.gain.setValueAtTime(0, this.context.currentTime);
        this.gainNode.gain.linearRampToValueAtTime(1, this.context.currentTime + 0.01);
        this.oscillator.start(this.context.currentTime);
    }

    stop() {
        this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.context.currentTime + 0.5);
    }

    kill() {
        this.oscillator.stop(this.context.currentTime + 0.5);
        for (let i in this) {
            if (this.hasOwnProperty(i)) {
                this[i] = undefined;
            } else if (this.prototype.hasOwnProperty(i)) {
                this.prototype[i] = undefined;
            }
        }
    }

}
