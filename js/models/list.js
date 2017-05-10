// List Model
class List{
  constructor(title){
    this.title = title
    this.id = List.all.length
    this.tasks = []
    List.all.push(this)
  }
}
List.all = []
