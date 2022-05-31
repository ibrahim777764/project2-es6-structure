// import _ from 'lodash';
// import printMe from './print.js';
import './style.css';

const todo = [
  { description: 'Set up a new project with webpack', isCompleted: false, index: 0 },
  { description: 'Set up a new project with webpack', isCompleted: false, index: 1 },
  { description: 'Create an index.js file', isCompleted: false, index: 2 },
  { description: 'Write a function to iterate over the tasks array and populate an HTML', isCompleted: false, index: 3 },
];

function todoList() {
  let todoListContent = '';
  todo.forEach((item) => {
    todoListContent += `<li class="task"><input class="task-check" type="checkbox"><span class="list">${item.description}</span><i class='fa fa-ellipsis-v' style="margin-left:auto"></i></li>`;
  });
  document.querySelector('.todo-list').innerHTML = todoListContent;
}
todoList();