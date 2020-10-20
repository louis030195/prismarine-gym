const PrismarineEnv = require('../dist/index').PrismarineEnv;

if (process.argv.length < 4 || process.argv.length > 6) {
  console.log('Usage : node follow.js <host> <port> [<name>] [<password>]')
  process.exit(1)
}

function sleep(time, callback) {
  var stop = new Date().getTime();
  while(new Date().getTime() < stop + time) {
      ;
  }
  callback();
}

let env = new PrismarineEnv({
    host: process.argv[2],
    port: parseInt(process.argv[3]),
    username: process.argv[4],
    password: process.argv[5]
  },
  "Follow-v0", {
    target: 'Bob'
  });
let observation = env.reset();
for (const x of Array(10).keys()) {
  env.render();
  let action = env.actionSpace.sample();
  let observation, reward, done, info = env.step(action);
  if (done) observation = env.reset();
  sleep(1000, function() {
    // executes after one second, and blocks the thread
  })
  env.bot.chat(`hello ${x}`);
}
env.close();