// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0, 
  y: 0,
  travelLogArray: []
}
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  console.log(`Old direction ${rover.direction}`)

switch (rover.direction) {
  case "N":
   rover.direction = "W";
    break;
  case "W":
  rover.direction = "S";
    break; 
  case "S":
  rover.direction = "E"
    break;
  case "E":
  rover.direction = "N";
    break;
  default: 
    console.log("Please insert N, W, S, E");
  
}
console.log(`New direction ${rover.direction}`)
}



function turnRight(rover){
  console.log("TurnRight was called!");
  console.log(`Old direction is ${rover.direction}`)

  switch (rover.direction) {
    case "N":
     rover.direction = "E";
      break;
    case "E":
    rover.direction = "S";
      break; 
    case "S":
    rover.direction = "W"
      break;
    case "W":
    rover.direction = "N";
      break;
    default: 
      console.log("Please insert N, W, S, E");

}
console.log(`New direction ${rover.direction}`)
}





function moveForward(rover){
  console.log("moveForward was called")
  rover.travelLogArray.push(`(${rover.x}, ${rover.y})`)

  switch (rover.direction){
    case "W":
    if (rover.x - 1 < 0){
      console.log("This goes passed the west boundry, I need to stop!")
      return;
    }
    rover.x -= 1;
    break;
    case "N":
    if (rover.y + 1 < 9){
      console.log("This goes passed the north boundry, I need to stop!")
      return;
    }
    rover.y -= 1;
    break;
    case "S":
    if (rover.y + 1 > 9){
      console.log("This goes passed the south boundry, I need to stop!")
      return;
    }
    rover.y += 1;
    break;
    case "E":
    if (rover.x + 1 > 9){
      console.log("This goes passed the east boundry, I need to stop!")
      return;
    }
    rover.x += 1;
    break;
    default:
    
    console.log("Invalid");

  }


console.log(rover);
}

function moveBackward(rover){
console.log("moveBackward was called");

rover.travelLogArray.push(`(${rover.x}, ${rover.y})`)

  switch (rover.direction){
    case "E":
    if (rover.x - 1 < 0){
      console.log("This goes passed the west boundry, I need to stop!")
      return;
    }
    rover.x -= 1;
    break;
    case "S":
    if (rover.y + 1 < 9){
      console.log("This goes passed the north boundry, I need to stop!")
      return;
    }
    rover.y -= 1;
    break;
    case "N":
    if (rover.y + 1 > 9){
      console.log("This goes passed the south boundry, I need to stop!")
      return;
    }
    rover.y += 1;
    break;
    case "W":
    if (rover.x + 1 > 9){
      console.log("This goes passed the east boundry, I need to stop!")
      return;
    }
    rover.x += 1;
    break;
    default:
    
    console.log("Invalid");

  }

}


function listOfCommands(myCommands){
  for(i = 0; i < myCommands.length; i++){
    console.log(myCommands[i]);

    switch (myCommands[i]){
      case "f":
      moveForward(rover);
      break;
      case "r":
      turnRight(rover);
      break;
      case "l":
      turnLeft(rover);
      break;
      case "b":
      moveBackward(rover);
      break;
      default:
      
      console.log("Not valid");
    }
    
  }
  console.log(rover.travelLogArray);
}



