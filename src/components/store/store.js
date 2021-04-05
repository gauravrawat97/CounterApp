import {action, makeObservable, observable} from 'mobx';

class ToDoList {
  constructor() {
    makeObservable(this);
  }
  @observable content = [];

  @action addData(data) {
    return (this.content = [...this.content, data]);
  }

  @action removeData(id) {
    return (this.content = this.content.filter((data) => data.id !== id));
  }

  @action updateData(data) {
    return (this.content = this.content.map((content) =>
      content.id === data.id ? data : content,
    ));
  }
}
export default ToDoList = new ToDoList();
