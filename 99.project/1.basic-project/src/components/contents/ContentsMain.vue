<template lang="html">
  <div>
    <article id="contents" v-for="(instadoc,index) in instadocs" >
      <table>
        <tr>
          <td>
            <img id = "img_h" src="../../assets/hanwhaDays.jpg">
          </td>
          <td>
            <a>hanwhaDays </a>
          </td>
        </tr>
      </table>


      <img id = "img_c" :src="instadoc.url">
      <h3>
        {{instadoc.text}}
      </h3>

      <input type="text" v-model="newTodoItem" @keyup.enter="addTodo({index})">
      <span class="addContainer" v-on:click="addTodo({index})">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
      </span>

      <transition-group name="list" tag="ul">
        <li v-for="(todoItem, ind) in storedTodoItems" class="shadow" v-bind:key="todoItem.item">
          <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete({todoItem, ind})"></i>
          <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
          <span class="removeBtn" v-on:click="removeTodo({todoItem, ind})">
            <i class="removeBtn fas fa-trash-alt"></i>
          </span>
        </li>
      </transition-group>


    </article>
  </div>
</template>

<script>
import {  mapGetters,  mapMutations } from 'vuex'
export default {
  data() {
    return {
      instadocs: [{
          dnum : '1',
          url: 'src/assets/contents1.jpg',
          text: 'hanwhadays👋어서와~성화봉! #63빌딩 은 처음이지?네가 온다고해서 불꽃쇼를 준비했어! 😎'
        },
        {
          dnum : '2',
          url: 'src/assets/contents2.jpg',
          text: 'hanwhadays[EVENT :: #쉬어가자그램 해시태그 이벤트]😝금요일엔 쉬어가자그램~ 추운 겨울 #이불밖은위험해 🛌바쁘게 달려온 지금을 잠시 멈추고 나만의 쉬는 순간을 공유해주세요.💕'
        },
        {
          dnum : '3',
          url: 'src/assets/contents3.jpg',
          text: 'hanwhadays무료로 체험 프로그램 할 #금손 모여라~ 👋#오늘의불꽃 #1일1불꽃 👉 #한화예술더하기 #체험프로그램'
        },
        {
          dnum : '4',
          url: 'src/assets/contents4.jpg',
          text: 'hanwhadays[4월의 불꽃 :: #봄이왔나봄 해시태그 이벤트]나를 웃음짓게 하는 따스한 봄볕☀️👉 여러분의 봄을 느낀 순간을 공유해주세요!'
        },
        {
          dnum : '5',
          url: 'src/assets/contents5.jpg',
          text: 'hanwhadays[당첨자 발표] #응원한다그램 이벤트응원과 응원이 모여 #불꽃응원 완성✨'
        },
        {
          dnum : '6',
          url: 'src/assets/contents6.jpg',
          text: 'hanwhadays[당첨자 발표] 4월의 불꽃 :: #봄이왔나봄 이벤트 이 봄의 끝을 잡고~🎶따뜻했던 4월의 봄날을 기억하며!💐'
        },
      ],
      newTodoItem: '',
      showModal: false
    }
  },

  methods: {
    addTodo(index) {
      //console.log(index);
      if (this.newTodoItem !== '') {
        const item = this.newTodoItem.trim();
        const num = index;
        this.$store.commit('addOneItem', {item, num});
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    },
    // ...mapMutations({
    //   removeTodo: 'removeOneItem',
    //   toggleComplete: 'toggleOneItem'
    // })

    removeTodo(todoItem, index) {
      this.$store.commit('removeOneItem', {todoItem, index});
    },
    toggleComplete(todoItem, index) {
      this.$store.commit('toggleOneItem', {todoItem, index});
    }
  },

  computed: {
    storedTodoItems() {
      // return this.$store.state.todoItems;
      return this.$store.getters.getTodoItems;
    }
  }

}
</script>


<style>
#contents {
  text-align: center;
  border-style: solid;
  border-width: thin;
  border-color: rgb(220, 220, 220);
  background-color: rgb(255, 255, 255);
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 50px;
  width: 600px;
}

img#img_c {
  width: 600px;
  height: 600px;
}

img#img_h {
  width: 35px;
  height: 35px;
}

h3 {
  font-weight: normal;
  text-align: left;
  margin: 10px;
}

h2 {
  font-weight: normal;
  text-align: left;
  margin: 10px;
}

a {
  /* padding: 10px; */
  margin: 5px;
  border-bottom: 5px;
  font-family: sans-serif;
}


.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
</style>
