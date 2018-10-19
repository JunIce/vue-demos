<template>
  <div class="row-bg">
    <el-row type="flex" justify="center">
      <div class="todo_title">
        <h1>TODO LISTS</h1>
      </div>
    </el-row>
    <el-row type="flex"  justify="center">
      <el-col :span="10">
        <el-input 
          type="text" 
          placeholder="请输入内容"
          v-model.trim="text"
          @change="addToList(text)"
          clearable
          ></el-input>
      </el-col>
    </el-row>
    <div class="todolists">
      <el-row v-for="todo in todos" :key="todo.id" class="row-list">
        <el-col :span="10" :offset="7">
          <el-row >
            <el-col :span="22">{{todo.id}}. {{todo.text}}</el-col>
            <el-col :span="2"><i v-on:click="todoDone(todo.id)" class="el-icon-circle-check-outline" :class="todo.completed ? 'icon-check-active':'icon-check-default'"></i></el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "home",
  data() {
    return{
      text: ''
    };
  },
  methods: {
    // todoDone(id) {
    //   console.log(id)
    // },
    addToList(text) {
      this.addToDo(text)
      this.text = ''
    },
    ...mapActions('todoModule', [
      'addToDo',
      'todoDone'
    ])
  },
  computed: {
    ...mapState('todoModule', {
      todos: state=>state.todos
    })
  }
};
</script>
<style scoped>
.todo_title{
  font-size: 36rpx;
  text-align: center;
  line-height: 100px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.todolists{
  margin-top: 30px;
}
.row-list{
  margin: 10px;
  font-size: 32px;
  font-weight: bold;
}
.icon-check-default{
  color: #ccc;
}
.icon-check-active{
  color: red;
}
</style>
