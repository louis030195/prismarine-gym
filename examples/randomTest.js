const PrismarineEnv = require('../dist/index').PrismarineEnv;
const Movements = require('mineflayer-pathfinder').Movements
const { GoalNear } = require('mineflayer-pathfinder').goals
const pathfinder = require('mineflayer-pathfinder').pathfinder
if (process.argv.length < 4 || process.argv.length > 6) {
  console.log('Usage : node follow.js <host> <port> [<name>] [<password>]')
  process.exit(1)
}

console.log(process.argv)
let env = new PrismarineEnv({
    host: process.argv[2],
    port: parseInt(process.argv[3]),
    username: process.argv[4],
    version: '1.16.1'
  },
  "Follow-v0", {
    target: 'Bob'
  });

env.bot.loadPlugin(pathfinder)
env.render();

env.bot.once('spawn', () => {

  const mcData = require('minecraft-data')(env.bot.version)

  const defaultMove = new Movements(env.bot, mcData)
  
  env.bot.on('chat', function(username, message) {
  
    if (username === env.bot.username) return

    const target = env.bot.players[username] ? env.bot.players[username].entity : null
    if (message === 'come') {
      if (!target) {
        env.bot.chat('I don\'t see you !')
        return
      }
      const p = target.position

      env.bot.pathfinder.setMovements(defaultMove)
      env.bot.pathfinder.setGoal(new GoalNear(p.x, p.y, p.z, 1))
    } else if (message === 'task') {
      let observation = env.reset();
      for (const x of Array(10).keys()) {
        let action = env.actionSpace.sample();
        let observation, reward, done, info = env.step(action);
        if (done) observation = env.reset();
      
        // sleep(1000, function() {
        //   // executes after one second, and blocks the thread
        //   console.log(`step ${x}`)
        // })
        // env.bot.chat(`hello ${x}`);
      }
      env.close();
    }
  })
})


