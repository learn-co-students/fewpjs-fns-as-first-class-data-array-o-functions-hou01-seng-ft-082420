
// function wakeDog(dogName, dogBreed) {
//   string = `Wake ${dogName} the ${dogBreed}`
//   debugger
//    OR
//   console.log("test") //in order for this to show you have to call the function first,
//   // either in the js file or in the devtools console
//   return string;
//   }

//   wakeDog("fluffy", "yorkie") //if called outside function it should show with refresh
//   // html loads, reads through it, sees js file attached and reads it, stores fns defined, and runs the code

  function wakeDog(dogName, dogBreed) {
    let string = `Wake ${dogName} the ${dogBreed}`
    return string;
  }


  function leashDog(dogName, dogBreed) {
    let string = `Leash ${dogName} the ${dogBreed}`
    return string;
  }

  function walkToPark(dogName, dogBreed) {
    let string = `Walk to the park with ${dogName} the ${dogBreed}`
    return string;
  }

  function throwFrisbee(dogName, dogBreed) {
    let string = `Throw the frisbee for ${dogName} the ${dogBreed}`
    return string;
  }

  function walkHome(dogName, dogBreed) {
    let string = `Walk home with ${dogName} the ${dogBreed}`
    return string;
  }

  function unleashDog(dogName, dogBreed) {
   let string = `Unleash ${dogName} the ${dogBreed}`
    return string;
  }

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  let array = []
  for (let i = 0; i < routine.length; i++) {
    let activity = routine[i](dogName, dogBreed)
    array.push(activity)
     //when i is 0, it's wakeDog, not being invoked
    }
    return array;
}

console.log(exerciseDog("fluffy", "yorkie"))

