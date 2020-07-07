<template>
  <div>
    <client-only>
      <div class="Nav">
        <b-navbar variant="faded" type="light" class="t">
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
                  >หน้าใช้งาน</nuxt-link
                >
                <div class="st" v-if="(users.role == 'staff')">
                  <nuxt-link
                    :to="{ name: 'staff-id', params: { id: users.uid } }"
                    >หน้าใช้งาน</nuxt-link
                  >
                </div>
              </li>
              <li v-if="users">
                <nuxt-link to="/password">เปลี่ยนรหัสผ่าน</nuxt-link>
              </li>
            </ul>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <div class="navbar" v-if="users">
              <span style="padding: 10px; margin: 0 10px;"
                >สวัสดีคุณ {{ ' ' + users.name }}</span
              >
              <span
                v-if="users.role == 'member'"
                style="padding: 10px; margin: 0 10px;"
                >{{ ' มี ' + users.coin + ' coin' }}</span
              >
              <!-- มีกล่องจดหมาย BET ด้วย -->
              <b-button variant="outline-danger" @click="signout"
                >LOGOUT</b-button
              >
            </div>
            <div class="navbar" v-else>
              <nuxt-link to="/login">
                <b-button variant="outline-primary" class="login"
                  >LOGIN</b-button
                >
              </nuxt-link>
            </div>
          </b-navbar-nav>
        </b-navbar>
      </div>

      <div class="Nav1">
        <b-navbar variant="light" type="light" class="t" toggleable>
          <b-navbar-brand href="/">
            <img src="~assets/2.png" width="50px" heifgt="50px" alt="Kitten" />
            <a>PRE-FRESHY</a>
            <a>2020</a>
          </b-navbar-brand>
          <div class="navbar" v-if="users">
            <div class="ttt">
              <span style="padding: 5px; margin: 0 5px;"
                >สวัสดีคุณ {{ ' ' + users.name }}</span
              >
              <span
                v-if="users.role == 'member'"
                style="padding: 5px; margin: 0 5px;"
                >{{ ' มี ' + users.coin + ' coin' }}</span
              >
            </div>
          </div>
          <b-navbar-toggle target="navbar-toggle-collapse">
            <template v-slot:default="{ expanded }">
              <font-awesome-icon :icon="['fas', 'caret-up']" v-if="expanded" />
              <font-awesome-icon :icon="['fas', 'caret-down']" v-else />
            </template>
          </b-navbar-toggle>

          <b-collapse id="navbar-toggle-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item class="HOVER">
                <nuxt-link to="/" class="textDec">หน้าแรก</nuxt-link>
              </b-nav-item>
              <div v-if="users">
                <b-nav-item>
                  <nuxt-link
                    class="textDec"
                    :to="{ name: 'member-id', params: { id: users.uid } }"
                    v-if="(users.role == 'member')"
                    >หน้าใช้งาน</nuxt-link
                  >
                  <div class="st" v-if="(users.role == 'staff')">
                    <nuxt-link
                      class="textDec"
                      :to="{ name: 'staff-id', params: { id: users.uid } }"
                      >หน้าใช้งาน</nuxt-link
                    >
                  </div></b-nav-item
                >
                <b-nav-item>
                  <div>
                    <nuxt-link to="/password" class="textDec"
                      >เปลี่ยนรหัสผ่าน</nuxt-link
                    >
                  </div>
                </b-nav-item>
                <b-nav-item>
                  <a @click="signout" style="color: red;">
                    LOGOUT
                  </a>
                </b-nav-item>
              </div>
              <div v-else>
                <b-nav-item>
                  <nuxt-link to="/login" class="textDec">
                    LOGIN
                  </nuxt-link>
                </b-nav-item>
              </div>
            </b-navbar-nav>
          </b-collapse>
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
      window: {
        width: 0,
        height: 0,
      },
    }
  },
  asyncData(context) {},
  created() {
    // this.window.addEventListener('resize', this.handleResize);
    //     this.handleResize();
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
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');

body {
  font-family: 'Montserrat', 'Kanit', sans-serif;
  background: #e4f1fe;
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
.textDec {
  color: black;
}
/* .ulNav li :hover a {
  background: lightgray;
  color: red;
} */
.login {
  margin: 0 10px;
  width: 100px;
}
.t {
  overflow: hidden;
}
.Nav {
  background: white;
  box-shadow: 6px 6px 7px rgba(0, 0, 0, 0.15);
}
.Nav1 {
  display: none;
  background: white;
  box-shadow: 6px 6px 7px rgba(0, 0, 0, 0.15);
}
.HOVER:hover {
  background: #000;
}

@media only screen and (max-width: 1050px) {
  /* .ulNav {
    display: block;
  } */
  .Nav {
    display: none;
  }
  .Nav1 {
    display: block;
  }
}
</style>
