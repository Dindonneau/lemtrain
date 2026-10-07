import { Meteor } from "meteor/meteor"
import { NewTask, TasksCollection } from "./TasksCollection"

Meteor.methods({
  "tasks.insert"(doc: NewTask) {
    return TasksCollection.insertAsync(doc)
  }
})
