<template>
  <div>
    <h2>USers</h2>
    <router-link to="/users/1">ユーザー１</router-link>
    <router-link to="/users/2">ユーザー２</router-link>
    <hr>
    <h1>User No. {{ id }}</h1>
    <router-view></router-view>
    <router-link :to="'/users/' + (Number(id) + 1 ) + '/profile' ">次のユーザー</router-link>
    <router-link :to="{ name: 'users-id-profile', params: { id: Number(id) + 1 } }">次のユーザー</router-link>
    <div style="height: 700px;"></div>
    <router-link id="next-user" :to="{ name: 'users-id-profile', params: { id: Number(id) + 1 }, hash: '#next-user'}">次のユーザー</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"], 
  
};
</script>