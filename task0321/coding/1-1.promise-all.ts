// 编写Promise.all 
import asyncTask from './utils/async-task';

const myPromiseAll = (
  tasks: Promise<any>[],
): Promise<any[]> => {
  let count = 0;
  let results = Array(tasks.length);

  return new Promise((resolve, reject) => {  
    tasks.forEach((task, i) => {
      task
        .then(result => {
          results[i] = result;
          count++;
          if (count < tasks.length) return;
          resolve(results);
        })
        .catch(err => reject(err));
    });
  });
};

// test
myPromiseAll([
  asyncTask(2),
  asyncTask(1),
  asyncTask(3),
]).then(results => console.log(results, 213));
myPromiseAll([
  asyncTask(3),
  asyncTask(1),
  asyncTask(2),
]).then(results => console.log(results, 312));
myPromiseAll([
  asyncTask(2),
  asyncTask(3),
  asyncTask(1, false),
])
  .then(results => console.log(results, 'won\'t show'))
  .catch(err => console.log(err));
