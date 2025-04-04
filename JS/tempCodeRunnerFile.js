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

setTimeout(findSumTill100, 1000);
console.log("first this");