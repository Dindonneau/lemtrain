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
    <div>
      <h1>Welcome to Meteor!</h1>

      <TaskForm />

      <ul>
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
  )
}
