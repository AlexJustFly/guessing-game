class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.cent = Math.round( (this.min + this.max) / 2 );
        return this.cent;
    }

    lower() {
        this.max=this.cent;
    }

    greater() {
        this.min=this.cent;
    }
}

module.exports = GuessingGame;
