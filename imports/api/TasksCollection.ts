import { Mongo } from "meteor/mongo"

export interface TaskDocument {
  _id: string
  text: string
  createdAt?: Date
}

export type NewTask = Omit<TaskDocument, "_id">

export const TasksCollection = new Mongo.Collection<TaskDocument>("tasks")
