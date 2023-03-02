function viralAdvertising(n) {
  let shared = 5;
  let sharedWith = 3;
  let commulative = 0;
  for (var i=0; i<n; i++) {
    console.log(i)
   let likedBy = Math.floor(shared/2)
   commulative += likedBy;
   shared = likedBy * sharedWith;
  }
  return commulative;
}

console.log(viralAdvertising(5));