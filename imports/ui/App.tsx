import { TaskDocument, TasksCollection } from "../api/TasksCollection"
import { useSubscribe, useTracker } from "meteor/react-meteor-data"
import { Task } from "./Task"
import { TaskForm } from "./TaskForm"
import { Meteor } from "meteor/meteor"

export const App = () => {
  const isLoading = useSubscribe("tasks")
  const tasks = useTracker(() =>
    TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch()
  )

  if (isLoading()) {
    return <div>Loading...</div>
  }

  const handleToggleCheck = ({ _id, isChecked }: TaskDocument) => {
    Meteor.callAsync("tasks.update", { _id, isChecked })
  }

  const handleDelete = ({ _id }: TaskDocument) => {
    Meteor.callAsync("tasks.delete", _id)
  }

  return (
    <div className='app'>
      <header>
        <div className='app-bar'>
          <div className='app-header'>
            <h1>📝️ To Do List</h1>
          </div>
        </div>
      </header>

      <div className='main'>
        <TaskForm />

        <ul className='tasks'>
          {tasks.map(task => (
            <Task
              key={task._id}
              task={task}
              onCheckboxClick={handleToggleCheck}
              onDeleteClick={handleDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
