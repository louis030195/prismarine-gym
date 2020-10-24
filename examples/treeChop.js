const PrismarineEnv = require('../dist/index').PrismarineEnv;
const Movements = require('mineflayer-pathfinder').Movements
const { GoalNear } = require('mineflayer-pathfinder').goals
const pathfinder = require('mineflayer-pathfinder').pathfinder
if (process.argv.length < 4 || process.argv.length > 6) {
  console.log('Usage : node treeChop.js <host> <port> [<name>] [<password>]')
  process.exit(1)
}

let env = new PrismarineEnv({
    host: process.argv[2],
    port: parseInt(process.argv[3]),
    username: process.argv[4],
    version: '1.16.1'
  },
  "TreeChop-v0", 
  {});

env.bot.loadPlugin(pathfinder)
// env.render();
const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));
env.bot.once('spawn', () => {
  const mcData = require('minecraft-data')(env.bot.version)
  const defaultMove = new Movements(env.bot, mcData)
  env.bot.on('chat', async function(username, message) {
  
    if (username === env.bot.username) return
    const target = env.bot.players[username] ? env.bot.players[username].entity : null
    if (message === 'come') {
      if (!target) {
        env.log('I don\'t see you !')
        return
      }
      const p = target.position

      env.bot.pathfinder.setMovements(defaultMove)
      env.bot.pathfinder.setGoal(new GoalNear(p.x, p.y, p.z, 1))
    } else if (message === 'task') {
      let observation = env.reset()
      for (const x of Array(10000).keys()) {
        let action = env.actionSpace.sample()
        let actionAsArray = await action.array();
        actionAsArray[0] += env.bot.entity.position.x
        actionAsArray[1] += env.bot.entity.position.y
        actionAsArray[2] += env.bot.entity.position.z
        let [ observation, reward, done, info ] = env.step(actionAsArray)
        env.log(`{ "Action": ${action},\n"Observation": ${observation},\n"Reward": ${reward},\n"Done": ${done},\n"Info": ${info}}\n`, true)
        if (done) observation = env.reset()
        await sleep(1000)
      }
      env.close();
    }
  })
})


