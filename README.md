# emilhein.github.com
my blog man!


stuff like this

´´´js
async function asyncTask () {
    return 4;
}

async function asyncTask2 (number) {
    console.log(`Recieved number ${number}`);
    return number + 5;
}
asyncTask()
.then(asyncTask2)
.then(console.log)
.catch(console.error);
´´´
