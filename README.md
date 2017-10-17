# emilhein.github.com
my blog man!


stuff like this

```js
async function asyncTask () {
    return 4;
}

async function asyncTask2 (number) {
    console.log(`Recieved number ${number}`);
    return number * 5;
}

async function asyncTask3 (number) {
    console.log(`Recieved number ${number}`);
    return number * 5;
}
const asyncTask4 = async number => {
    console.log(`Recieved number ${number}`);
    return number * 5;
};

asyncTask()
.then(asyncTask2)
.then(result => {
    return asyncTask3(result);
})
.then(result => asyncTask4(result))
.then(console.log)
.catch(console.error);


const fastFunction = input => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(input);
        }, 100);
    });
};

const slowFunction = input => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(input + ' and Hi');
        }, 300);
    });
};

fastFunction('you')
.then(slowFunction)
.then(console.log);


```
