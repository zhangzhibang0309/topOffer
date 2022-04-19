// all方法
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) return reject("not a array");

    let ret = [];
    let cnt = 0;
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
      .then(res => {
        ret[i] = res;
        cnt++;
        if (cnt === promises.length) {
          resolve(ret);
        }
      })
      .catch(err => {
        reject(err);
      })
    }
    // promises.forEach((item) => {
    //   Promise.resolve(item)
    //     .then((res) => {
    //       ret.push(res);
    //       cnt++;

    //       if (cnt === promises.length) resolve(ret);
    //     })
    //     .catch((err) => {
    //       reject(err);
    //     });
    // });
  });
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1");
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2");
  }, 1000);
});

myPromiseAll([p1, p2])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
