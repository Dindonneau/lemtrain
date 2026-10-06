import { TaskType } from "../api/TasksCollection"

export const Task = ({ task }: { task: TaskType }) => {
  return <li>{task.text}</li>
}
