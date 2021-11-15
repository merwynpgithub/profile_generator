const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your nickname? ", (answer1) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("Which meal is your favourite? ", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
              console.log(`Hey ${answer1}. Your favourite activity is ${answer2}. You listen to ${answer3}. Your favourite meal is ${answer4}. Your favourite food is ${answer5}. You love playing ${answer6}. Your superpower is ${answer7}. Thank you for your valuable feedback: ${answer1}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});