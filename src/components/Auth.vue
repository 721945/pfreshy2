<template>
  <div>
    <div class="links">
      <b-form v-if="!isLoggedIn" v-model="formValid">
        <div class="TextTop">
          <a align="center">LOGIN</a>
        </div>
        <div class="formText">
          <label for="username">Username :</label>
          <b-input
            class="in"
            id="username"
            v-model="formData.email"
            placeholder="Username"
            type="text"
            autocomplete="username"
          ></b-input>
        </div>
        <div class="formPass">
          <label for="password">Password :</label>
          <b-input
            id="password"
            v-model="formData.password"
            placeholder="Password"
            type="password"
            autocomplete="current-password"
          ></b-input>
        </div>
        <div class="formButton">
          <b-button
            class="butt"
            :disabled="!formValid"
            block
            variant="outline-dark"
            @click="signInUser()"
          >LOGIN</b-button>
        </div>
      </b-form>
      <div v-else>
        <p>You are logged in with {{ authUser.name }}.</p>
        <b-button variant="outline-primary" @click="logout">Logout</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  computed: {
    authUser() {
      return this.$store.state.authUser
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
  },
  fetch() {
    // INFO -> this.$fireAuth user etc. are accessible
    // INFO -> this.$store.state.authUser is accessible even on server-side
  },
  data: () => ({
    formData: {
      email: '',
      password: '',
    },
    formValid: false,
  }),
  methods: {
    async signInUser() {
      try {
        await this.$fireAuth.signInWithEmailAndPassword(
          this.formData.email+'@pfreshy.com',
          this.formData.password
        ).then(() => {
          this.$router.push('/')
        })
      } catch (e) {
        alert('USERNAME / PASSWORD ไม่ถูกต้อง ')
      }
    },
    async logout() {
      try {
        await this.$fireAuth.signOut()
      } catch (e) {
        alert('เกิดข้อผิดพลาด')
      }
    },
  },
}
</script>
<style scoped>
.in {
  margin: 10px auto;
}
.links {
  margin-top: 20px;
}
.TextTop {
  font-size: 30px;
  align-content: center;
}
.butt {
  margin-top: 15px;
}
</style>
