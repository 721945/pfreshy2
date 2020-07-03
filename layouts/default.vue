<template>
  <div>
    <client-only>
      <div class="Nav">
        <b-navbar variant="faded" type="light">
          <b-navbar-brand href="/">
            <img src="~assets/2.png" width="50px" heifgt="50px" alt="Kitten" />
            <a>PRE-FRESHY</a>
            <a>2020</a>
          </b-navbar-brand>
          <b-navbar-nav>
            <ul class="ulNav">
              <li>
                <nuxt-link to="/">หน้าแรก</nuxt-link>
              </li>
              <li v-if="users">
                <nuxt-link
                  :to="{ name: 'member-id', params: { id: users.uid } }"
                  v-if="(users.role == 'member')"
                >หน้าใช้งาน</nuxt-link>
                <nuxt-link
                  :to="{ name: 'staff-id', params: { id: users.uid } }"
                  v-if="(users.role == 'staff')"
                >หน้าใช้งาน</nuxt-link>
              </li>
            </ul>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <div class="navbar" v-if="users">
              <span style="padding: 10px;">สวัสดีคุณ {{ users.name }}</span>
              <!-- มีกล่องจดหมาย BET ด้วย -->
              <b-button variant="outline-danger" @click="signout">LOGOUT</b-button>
            </div>
            <div class="navbar" v-else>
              <nuxt-link to="/login">
                <b-button variant="outline-primary">LOGIN</b-button>
              </nuxt-link>
              <nuxt-link to="/signup">
                <b-button variant="outline-secondary">register</b-button>
              </nuxt-link>
            </div>
          </b-navbar-nav>
        </b-navbar>
      </div>
    </client-only>

    <Nuxt />
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: '',
    }
  },
  asyncData(context) {
    
    },
  computed: {
    users() {
      return this.$store.getters.getUser
    },
  },
  methods: {
    signout() {
      this.$store.dispatch('signout')
    },
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');

body {
  font-family: 'Montserrat', 'Kanit', sans-serif;
}
.ulNav {
  display: inline-block;
  list-style-type: none;
}
.ulNav li {
  float: left;
}
.ulNav li a {
  display: block;
  padding: 0 20px;
  color: black;
}
.ulNav li :hover a {
  background: lightgray;
  color: red;
}
.Nav {
  box-shadow: 6px 6px 7px rgba(0, 0, 0, 0.15);
}
</style>
