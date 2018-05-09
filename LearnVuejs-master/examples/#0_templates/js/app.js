var app = new Vue({
  el: '#app',
  data: {
    message : 'Hello Vue.js',
    // 할일 #1
    // 새로운 데이터 속성을 1개 추가하고, data bindings 를 이용하여 화면에 표시해보세요.
<<<<<<< HEAD

    uid: '10',
=======
    message2 : 'hello Vue.js2',

    uid: '20',

    number: 10,
>>>>>>> cff6e360a4ec07a324d821f771541dca6dee3186
    // 할일 #2
    // uid 를 변경하고 해당 uid 의 변경 여부를 크롬 개발자 도구의 "화면 요소 검사" 기능으로 p 태그의 id 값을 확인해보세요.

    flag: true
    // 할일 #4
    // 위 flag 값을 false 로 변경하였을 때 화면에 어떤 영향을 주는지 확인해보세요.
  },
  methods: {
    // ES6
    clickBtn() {
<<<<<<< HEAD
      console.log("hi");
=======
      //console.log("hi");
      this.message = this.message.split('').reverse().join('');
>>>>>>> cff6e360a4ec07a324d821f771541dca6dee3186
    },
    // ES5
    // clickBtn: function() {
    //   console.log("hi");
    // }
<<<<<<< HEAD
=======
    clickBtn2() {
      alert("hello");
    },

    clickBtn3() {
      console.log(this.flag);
      if(this.flag == true){
        this.flag = false;
      }else{
        this.flag = true;
      }
    }
>>>>>>> cff6e360a4ec07a324d821f771541dca6dee3186

    // 할일 #3
    // eventMethod 를 하나 추가하고 template 에서 해당 이벤트를 실행할 수 있는 button 을 하나 추가하세요.
    
<<<<<<< HEAD
  }
});
=======
    
  },

  filters: {
    capitalize: function (value){
      if(!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }

  }
});

>>>>>>> cff6e360a4ec07a324d821f771541dca6dee3186
