// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    return Math.abs(someValue - 42)
  }


distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet(someValue2) {
    // Call distanceFromHqInBlocks and multiply  by 264
    return distanceFromHqInBlocks(someValue2) * 264;
}


console.log(distanceFromHqInFeet(43)); 
console.log(distanceFromHqInFeet(50)); 
console.log(distanceFromHqInFeet(34)); 

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

console.log(distanceTravelledInFeet(43, 48)); 
console.log(distanceTravelledInFeet(50, 60)); 
console.log(distanceTravelledInFeet(34, 28)); 

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // Free ride
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // Charge $0.02 per extra foot
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat rate of $25
    } else {
        return 'cannot travel that far'; 
    }
}


console.log(calculatesFarePrice(43, 44)); 
console.log(calculatesFarePrice(34, 32)); 
console.log(calculatesFarePrice(50, 58)); 
console.log(calculatesFarePrice(34, 24)); 







































