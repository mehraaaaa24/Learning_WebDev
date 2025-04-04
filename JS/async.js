function findsum(n) {
    let ans = 0;
    for (i=0; i<n; i++) {
        ans += i;
   }
   return ans;
}

function findSumTill100() {
    return console.log(findsum(100));
}

function syncSleep () {
    let a = 1;
    for (i = 0; i < 1000000000; i++) {
        a++;
    }
}


setTimeout(findSumTill100, 1000);
console.log("first this");
syncSleep();

