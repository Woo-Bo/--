import lesson from './seed/lesson'
import system from './seed/system'
import tag from './seed/tag'
import topic from './seed/topic'
import user from './seed/user'
async function run() {
  await user()
  await tag()
  await system()
  await lesson()
  await topic()
}

run()
