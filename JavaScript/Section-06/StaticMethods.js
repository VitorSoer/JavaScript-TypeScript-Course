class RemoteControl {
  constructor(tvModel) {
    this.tvModel = tvModel;
    this.volume = 0;
  }

  turnUpTheVolume() {
    if (this.volume >= 10) return console.log(`Volume limit reached!`);

    this.volume += 2;
    console.log(`Volume: ${this.volume}`);
  }
  turnDownTheVolume() {
    if (this.volume <= 0) return console.log(`Is muted!`);

    this.volume -= 2;
    console.log(`Volume: ${this.volume}`);
  }

  static changeBattery() {
    console.log(`You changed the battery!`);
  }
}

const controlOne = new RemoteControl("LG");

for (let i = 0; i < 6; i++) controlOne.turnUpTheVolume();
console.log("---------");
for (let i = 0; i < 6; i++) controlOne.turnDownTheVolume();
console.log("---------");
RemoteControl.changeBattery();
