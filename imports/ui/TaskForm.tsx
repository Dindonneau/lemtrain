import { Meteor } from "meteor/meteor"
import { FormEvent, useState } from "react"
import { NewTask } from "../api/TasksCollection"

export const TaskForm = () => {
  const [text, setText] = useState("")

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const actualText = text.trim()
    if (!actualText) return

    await Meteor.callAsync("tasks.insert", {
      text: actualText,
      createdAt: new Date()
    } satisfies NewTask)

    setText("")
  }

  return (
    <form className='task-form' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add a new task'
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type='submit'>Add Task</button>
    </form>
  )
}
