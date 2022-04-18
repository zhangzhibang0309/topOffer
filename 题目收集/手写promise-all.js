function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) return reject("not a array");

    let ret = [];
    let cnt = 0;
    promises.forEach((item) => {
      Promise.resolve(item)
        .then((res) => {
          ret.push(res);
          cnt++;

          if (cnt === promises.length) resolve(ret);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

const p1 = new Promise((resolve,reject) => {
  console.log("p1")
  resolve("p1")
})
const p2 = new Promise((resolve,reject) => {
  console.log("p2")
  resolve("p2")
})

myPromiseAll([p1,p2]).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})