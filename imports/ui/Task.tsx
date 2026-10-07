import { TaskDocument } from "../api/TasksCollection"

type TaskProps = {
  task: TaskDocument
  onCheckboxClick: (task: TaskDocument) => void
  onDeleteClick: (task: TaskDocument) => void
}

export const Task = ({ task, onCheckboxClick, onDeleteClick }: TaskProps) => {
  return (
    <li>
      <input
        type='checkbox'
        checked={!!task.isChecked}
        onClick={() => onCheckboxClick(task)}
        readOnly
      />
      {task.text}
      <button onClick={() => onDeleteClick(task)}>&times;</button>
    </li>
  )
}
