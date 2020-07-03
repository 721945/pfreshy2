<template>
  <div>
    <!-- <span class="font">รายชื่อเพื่อน</span> -->
    <b-card header="รายชื่อเพื่อนในทีม" class="text-center" header-bg-variant="warning">
      <div class="show" v-if="friendlists && users">
        <div class="list">
          <b-table hover :items="friendlists" :fields="fields" class="table"></b-table>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
  },
  async mounted() {
    await this.$store.dispatch('LoadFriendlist')
    this.friendlists = this.$store.getters.getTeamFriend
  },
  computed: {
    lists() {
      return this.$store.getters.getFriendlist
    },users(){
      return this.$store.getters.getUser
    }
  },
  methods: {
    query() {
      this.$store.dispatch('LoadFriendlist', 'a')
    },
  },
  beforeDestroy(){
    this.$store.commit('setFriendlist','')
  },
  data() {
    return {
      fields: [
        {
          key: 'sid',
          label: 'รหัสนักศึกษา',
          sortable: true,
        },
        {
          key: 'name',
          label: 'ชื่อเล่น',
          sortable: true,
        },
        {
          key: 'coin',
          label: 'Coin',
          sortable: true,
        },
      ],
      friendlists:[],
    }
  },
}
</script>

<style scoped>
.font {
  font-family: 'Kanit', sans-serif;
}
.list {
  height: 400px;
  width: 100%;
  overflow: auto;
}
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 40px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 40px;
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
