/*
    INTERACTIVE LOGIC GAME
    Build a game where a user gets presented decisions and, based on the user's choice, a storyline of your choosing develops.
    Requirements:  
    1. Use the `window.prompt` and/or `window.confirm` method to let users make decisions in your story.
    3. Users should have to make at least 3 decisions. Each decision should affect the outcome of your story.
    4. Upon the final decision, Your html page should update, displaying the result of the user's decisions. 
        - There is a div with the id `result` in the html document. 
        - Create an html element containing the game's result (text) and add the element as a child to #result
        - Once your result is appended to the DOM, target #result, remove the .hide class, 
            and add the .fade-in-up class to see the user's result appear on the screen.
    
    Helpful information:
    window.prompt - https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
    window.confirm - https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm
    if/elseif/else - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
*/

// Your code starts here

// Capture user name
let name = window.prompt("What is your name?");

// define choices and user's outcome (gameResult);
// all variables currently contain `undefined` as a value;
let action1, action2, action3, gameResult;
action1 = window.prompt(
  "It's 3rd down with 5 yards to the end zone. There's 8 seconds left in the Super Bowl. You're down 24-21 with one timeout. A touchdown wins the game. A fieldgoal ties it. Coach calls a run-pass option, so it's up to you to decide if you hand the ball off or pass the ball. The play starts and you see a small running lane, your star receiver also gets good separation off of the line. Do you RUN the ball or PASS? (type RUN or PASS)"
);

if (action1 === "RUN") {
  // Choice 2
  action2 = window.prompt(
    "You hand the ball off and your running back makes a cut towards the hole. Then it happens. The linebacker steps right in the hole and cracks your running back at the line ending the play with no gain. The clock is running and the game is on the line. What do you do? Use your final TIMEOUT or try to get one more quick PLAY off on 4th down? (type TIMEOUT or PLAY)"
  );
  // Handle Choice 3
  if (action2 === "TIMEOUT") {
    action3 = window.prompt(
      "You call the timeout with 2 seconds left. Your coach asks you if you want to kick the easy fieldgoal and go into overtime or go for the win on 4th down. What do you do? (type FIELDGOAL or PLAY)"
    );
    if (action3 === "PLAY") {
      gameResult =
        "You go back out for the final play. The ball gets snapped and you throw a beautiful pass with no time left on the clock. Your receiver goes up and makes an athletic play over the cornerback, toe tapping in the back corner of the endzone as he comes down. <b>" +
        name.toUpperCase() +
        " WINS THE GAME WITH THE WALK OFF TOUCHDOWN!</b>";
    } else {
      gameResult =
        "You decides to play it safe and kick the fieldgoal. Your kicker easily makes fieldgoal and go your team ties it up to go to overtime. Your team loses the coin toss and the opposing team gets the ball first. Your defense, worn out from 60 minutes of hard faught football, unfortunatley gives up too much and the opposing team breaks off a big scoring play. The headline running in your city the next day is <b>'" +
        name +
        " Loses Super Bowl on Decion to Play It Safe'</b>.";
    }
  } else if (action2 === "PLAY") {
    gameResult =
      "You try to get your players lined up before the clock runs out. As soon as you call for the snap, the refs blow the whistle. The clock hit 0:00. You lose. Tommorrow's headline reads <b>'" +
      name +
      " Blows Super Bowl on Odd No-Huddle 4th Down Call'</b>.";
  } else {
    gameResult =
      "Unfortunatly, there was a miscommunication on the handoff and you fumbled the ball. The opposing team picks the ball up and runs the clock out. Your team loses the game. Tommorrow's headline reads <b>'" +
      name +
      " Blows Super Bowl on Embarrasing Goal Line Fumble'</b>.";
  }
} else if (action1 === "PASS") {
  action2 = window.prompt(
    "You pull the ball back from your running back. You eye your receiver. What initially looked like good separation now is much more of a 50/50 matchup in the corner. Do you THROW the ball anyway or HOLD onto the ball? (type THROW or HOLD)"
  );
  if (action2 === "THROW") {
    action3 = window.prompt(
      "As you wind up to throw, you have to decide if you want to throw the 50/50 ball and give your receiver a chance to make a spectacular game winning play or is you want to play is safe, throw the ball high out of bounds to stop the clock, allowing you team to take the game into overtime on 4th down with a field goal. What do you do? Throw the FADE pass to your receiver or throw the ball AWAY and go to 4th down? (type FADE or AWAY)"
    );
    if (action3 === "FADE") {
      gameResult =
        "You decide to put the game in your star receiver's hands. You release a beautiful ball to the back corner of the endzone. Your receiver goes up followed by the defensive player. Both players get hands on the ball, but your receiver rips the ball away. The stadium erupts as the clip replays on the big screen; BOTH FEET COME DOWN IN BOUNDS! It's a touchdown! <b>" +
        name.toUpperCase() +
        " WINS THE SUPER BOWL!</b>";
    } else {
      gameResult =
        "You decide to play it safe and throw the ball away. On 4th down, your kicker nails the fieldgoal and your team goes to overtime. In overtime, you call the coin toss for the first possesion, you pick heads. It flips. It's tails. The opposing team gets the ball first. Your team lines up to kick the ball to the opposing team. The kick lands in the field of play and the kickoff returner catches it. The returner fakes the return one direction, then swiftly reverses. He gets past the first wave of tacklers... 50... 45... 40... He just has to beat the kicker now! The kicker misses the tackle and not it's just a footrace to the endzone. TOUCHDOW... You lose the game. Tomorrow's news story reads <b>\"Tensions high between" +
        name +
        " and Star Receiver as receiver claims loss in Super Bowl is due to quarteback's 'lack of faith in him'\"</b>.";
    }
  } else {
    gameResult =
      "You hold onto the ball, looking for another target. Just as you wind up to throw the ball, BOOM, you get hit and the ball comes out. FUMBLE! The clock winds down as both teams scramble to recover the ball. Despite your team recovering the ball, the clock hit 0:00. You lost the Championship. Tomorrow's headline reads <b>'" +
      name +
      " Fumbles The Super Bowl Away In Disappointing Loss'</b>.";
  }
} else {
  gameResult =
    "You fail to make a decisive decision, " +
    name +
    ". The running back thinks you started to pull the ball out, you think he is taking it. You release the ball and it falls on the turf. The defense immediately scoops up the ball. <b>You lose the game</b>.";
}

// Handle updating the DOM
// Select #result
let resultWrapper = document.getElementById("result");
// create your new element
let resultMessage = document.createElement("p");
// add the gameResult to the element
resultMessage.innerHTML = gameResult;
// add the new element to #result as a child element
resultWrapper.appendChild(resultMessage);
// Show the result on the screen
resultWrapper.classList.remove("hide");
resultWrapper.classList.add("fade-in-up");
