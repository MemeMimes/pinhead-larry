import { PinheadLarryClient } from "./PinheadLarryClient";

const getPinheadLarryClientSingleton = async (): Promise<PinheadLarryClient> => {
  if (!globalThis.pinheadLarryClientPromise) {
    globalThis.pinheadLarryClientPromise = PinheadLarryClient.getInstance();
  }

  return globalThis.pinheadLarryClientPromise;
};

declare global {
  var pinheadLarryClientPromise: Promise<PinheadLarryClient> | undefined;
}

if (!globalThis.pinheadLarryClientPromise) {
  globalThis.pinheadLarryClientPromise = PinheadLarryClient.getInstance();
}

export default getPinheadLarryClientSingleton;