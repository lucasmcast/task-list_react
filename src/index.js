import './index.css';
import TaskListView from './views/taskList';

class Index{

  routes = ["home"]

  constructor(){
    this.route(window.location.pathname)
  }

  route(pathname){
    switch(pathname){
      case "/":
        new TaskListView(this.routes);
        break;
      case "/home":
        new TaskListView(this.routes);
        break;
    }
  }
}

new Index();