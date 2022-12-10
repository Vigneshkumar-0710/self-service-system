import { useEffect } from 'react'

import { BotUI, BotUIMessageList, BotUIAction, useBotUI } from '@botui/react';
import { createBot } from 'botui'

const myBot = createBot()

export default function Bot(){

    useEffect(() => {
        myBot
          .wait({ waitTime: 1000 })
          .then(() => myBot.message.add({ text: 'hello, what is your name?' }))
          .then(() => myBot.action.set(
              {
                options: [
                  { label: 'John', value: 'john' },
                  { label: 'Jane', value: 'jane' },
                ],
              },
              { actionType: 'select' }
          ))
          .then((data) => myBot.message.add({ text: `nice to meet you ${data.selected.label}` }))
      }, [])

    return (
      <div className='row justify-content-center mt-4'><div className='col-4'>
          <BotUI bot={myBot}>
      <BotUIMessageList />
      <BotUIAction />
    </BotUI>
 </div></div>
        )
}