import { TasksCollection } from "../api/TasksCollection"
import { useSubscribe, useTracker } from "meteor/react-meteor-data"
import { Task } from "./Task"

export const App = () => {
  const isLoading = useSubscribe("tasks")
  const tasks = useTracker(() => TasksCollection.find({}).fetch())

  if (isLoading()) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Welcome to Meteor!</h1>

      <ul>
        {tasks.map(task => (
          <Task key={task._id} task={task} />
        ))}
      </ul>
    </div>
  )
}
