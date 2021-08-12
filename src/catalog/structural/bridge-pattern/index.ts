import { TV } from "./tv";
import { Radio } from "./radio";
import { AdvancedRemoteControl, RemoteControl } from "./remote-control";

const tv = new TV();
const remoteTV = new RemoteControl(tv);
remoteTV.togglePower();

const radio = new Radio();
const remoteRadio = new AdvancedRemoteControl(radio);
remoteRadio.mute();
