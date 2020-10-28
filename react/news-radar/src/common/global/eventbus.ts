interface EventStructure {
  [key: string]: Function[];
}

class EventBus {
  public events: EventStructure;
  constructor() {
    this.events = {};
  }

  on(eventName: string, callback: Function) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  emit(eventName: string, ...args: any[]) {
    const funcs = this.events[eventName];
    if (funcs) {
      for (let i = 0, l = funcs.length; i < l; i++) {
        funcs[i].apply(null, args);
      }
    }
  }
}

const emitter = new EventBus();
export default emitter;
