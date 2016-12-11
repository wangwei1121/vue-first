import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#app-1',
  components:{'appVue':App}
})

new Vue({
  el: '#app2',
  data: {
     todos: [
       { text: 'Learn JavaScript' },
       { text: 'Learn Vue.js' },
       { text: 'Build Something Awesome' }
     ]
   }
})

var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})

var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})

var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
      // 如果 question 发生改变，这个函数就会运行
      question: function (newQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
    }
  },
  methods: {
    getAnswer:function(){
      var vm = this
      if (vm.question.trim() == '') {
        vm.answer = 'I cannot give you an answer until you ask a question!'
      }else {
        vm.answer = 'Thinking...'
        console.log(vm.question);
      }
    }
  }
})

var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})


var article1 = new Vue({
  el: '#article-1',
  data: {
    articles: []
  },
  mounted: function() {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {
        },
        emulateJSON: true
    }).then(function(response) {
      // 这里是处理正确的回调
      this.articles = response.data.subjects
    }, function(response) {
      // 这里是处理错误的回调
      console.log(response)
    });
  }
})
