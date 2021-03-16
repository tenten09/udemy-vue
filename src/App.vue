<template>
  <div id="app">
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム:</label>
    <input 
      id="name" 
      type="text"
      v-model="name"
    >
    <br><br>
    <label for="comment">コメント：</label>
    <textarea 
    id="comment"
    v-model="comment"
    >
    </textarea>
    <br><br>
    <button @click="createComment">コメントをサーバーに送る</button>
    <h2>掲示板</h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      comment: "",
    };
  },
  methods: {
    createComment() {
      axios.post('https://firestore.googleapis.com/v1/projects/vuejs-http-bbd5b/databases/(default)/documents/comments',
      {
        fields: {
          name: {
            stringValue: this.name
          },
          comment: {
            stringValue: this.comment
          },
        }
      }
      )
      .then(Response => {
        console.log(Response);
      })
      .catch(error => {
        console.log(error);
      });
      this.name = ''
      this.comment = ''
    }
  }
};
</script>

<style scoped>
 #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60;
}
</style>

