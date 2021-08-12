import { Device } from "./device";

export class RemoteControl {
  constructor(protected readonly device: Device) {}

  togglePower(): void {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  volumeDown(): void {
    this.device.setVolume(this.device.getVolume() - 10);
  }

  volumeUp(): void {
    this.device.setVolume(this.device.getVolume() + 10);
  }

  channelUp(): void {
    this.device.setChannel(this.device.getChannel() + 1);
  }

  channelDown(): void {
    this.device.setChannel(this.device.getChannel() - 1);
  }
}

export class AdvancedRemoteControl extends RemoteControl {
  mute(): void {
    this.device.setVolume(0);
  }
}
