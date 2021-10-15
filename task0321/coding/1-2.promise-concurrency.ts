import asyncTask from './utils/async-task';

class Concurrency <T> {
  private running: Promise<T>[] = [];
  private results: T[] = [];

  public constructor (
    private tasks: (() => Promise<T>)[],
    public limit: number = 5,
  ) {}
  public async run (): Promise<T[]> {
    for (let i = 0; i < this.tasks.length; i++) {
      console.log(`task ${i} begins`);
      const p: Promise<T> = this.tasks[i]();
      this.running.push(p);
      p
        .then(this.handler.bind(this, p, i))
        .catch(this.handler.bind(this, p, i));
      if (this.running.length < this.limit) continue;
      await Promise.race(this.running); // block loop
    }
    await Promise.all(this.running); // run leftovers
    return this.results;
  }
  private handler (
    p: Promise<T>,
    i: number,
    res: T,
  ): T {
    this.running.splice(this.running.indexOf(p), 1);
    this.results[i] = res;
    console.log(`task ${i} ends`);
    return res;
  }
}

new Concurrency([
  () => asyncTask(1),
  () => asyncTask(2),
  () => asyncTask(3),
  () => asyncTask(1),
  () => asyncTask(2),
  () => asyncTask(3),
  () => asyncTask(1),
  // () => asyncTask(1, false),
  () => asyncTask(2),
  () => asyncTask(3),
], 3)
  .run()
  .then(console.log)
  .catch(console.log);
