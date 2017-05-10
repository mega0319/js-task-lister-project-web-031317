// Task Model
class Task{
  constructor(description, priority, list){
    this.description = description
    this.priority = priority
    this.id = Task.counter
    this.list = list
  }
}
Task.counter = 0
