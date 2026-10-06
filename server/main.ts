import { Meteor } from "meteor/meteor"
import { TasksCollection } from "../imports/api/TasksCollection"

import "../imports/api/TasksPublication"

const insertTask = async (taskText: string) => {
  await TasksCollection.insertAsync({ text: taskText })
}

Meteor.startup(async () => {
  if ((await TasksCollection.find().countAsync()) === 0) {
    const myTasks = [
      "First Task",
      "Second Task",
      "Third Task",
      "Fourth Task",
      "Fifth Task",
      "Sixth Task",
      "Seventh Task"
    ]

    myTasks.forEach(insertTask)
  }
})
