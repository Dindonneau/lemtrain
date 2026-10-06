import { Mongo } from "meteor/mongo"

export interface TaskType {
  _id?: string
  text: string
}

export const TasksCollection = new Mongo.Collection<TaskType>("tasks")
