import { TaskDocument } from "../api/TasksCollection"

type TaskProps = {
  task: TaskDocument
}

export const Task = ({ task }: TaskProps) => {
  return <li>{task.text}</li>
}
