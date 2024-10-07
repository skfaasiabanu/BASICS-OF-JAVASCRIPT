const firstName="faasia";
console.log(firstName ?? "happy");
console.log(null ?? "happy");
console.log(undefined ?? "happy");
console.log(" " ?? "happy");

const a=0;
console.log(a || 1);
console.log(a ?? 1);