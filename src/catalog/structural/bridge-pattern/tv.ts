import { Device } from "./device";

export class TV implements Device {
  private disabled = true;
  private channel = 1;
  private volume = 1;

  disable() {
    this.disabled = true;
  }

  isEnabled(): boolean {
    return !this.disabled;
  }

  enable() {
    this.disabled = false;
  }

  getChannel(): number {
    return this.channel;
  }

  setChannel(channel: number) {
    this.channel = channel;
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(percent: number) {
    this.volume = percent;
  }
}
