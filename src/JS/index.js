  //Responsive menu 
  var menuBtn =  document.querySelector(".menu-btn")
  var navBar =  document.querySelector(".navbar")

  menuBtn.addEventListener("click", ()=>{
      menuBtn.classList.toggle("active");
      navBar.classList.toggle("active");
  })

  
// To-do part
Vue.component('task-list', {
  template: '#task-list',
  props: {
    tasks: {default: []}
  },
  data() {
    return {
      newTask: ''
    };
  },
  computed: {
    incomplete() {
      return this.tasks.filter(this.inProgress).length;
    }
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.tasks.push({
          title: this.newTask,
          completed: false
        });
        this.newTask = '';
      }
    },
    completeTask(task) {
      task.completed = ! task.completed;
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    clearCompleted() {
      this.tasks = this.tasks.filter(this.inProgress);
    },
    clearAll() {
      this.tasks = [];
    },
    
    inProgress(task) {
      return ! this.isCompleted(task);
    },
    isCompleted(task) {
      return task.completed;
    }
  }
});

Vue.component('task-item', {
  template: '#task-item',
  props: ['task'],
  computed: {
    className() {
      var classes = ['added-task-items'];
      if (this.task.completed) {
        classes.push('added-task-completed');
      }
      return classes.join(' ');
    }
  }
});





new Vue({
  el: '#app',
  data: {
    tasks: [
      {
        title: 'Ella Sri Lanka',
        completed: true
      },
      {
        title: 'Kandy , Temple of tooth',
        completed: false
      }
    ]
  }
});
 