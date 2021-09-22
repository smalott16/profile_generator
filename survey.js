const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is your name? ', (answer) => {
  //console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.question('What\'s an activity you like doing? ', (answer2) => {
      
      rl.question('What do you listen to while doing that? ', (answer3) => {

        rl.question('Which meal is your fave (e.g.: breakfast, lunch dinner)? ', (answer4) => {

          rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
            
            rl.question('Which sport is your absolute favourite? ', (answer6) => {
            
              rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
                
                console.log(`Meet ${answer}. They are are someone who loves ${answer2} while listening to ${answer3}. ` +
                `Their favourite meal of the day is ${answer4} during which they love to eat ${answer5}.` +
                `${answer}'s favourite sport is ${answer6}. ${answer}'s super power includes (in their own words) \"${answer7}"`)
                
                rl.close();
              });

            });

          });

        });

      });

    });
    //rl.close();
});

