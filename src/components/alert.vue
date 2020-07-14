<template>
  <div class="cont">
    <div class="alertBox" @click="setRead">
      <a style="color:lightblue">
        <font-awesome-icon :icon="['fas', 'envelope']" size="2x" />
      </a>
      <div class="alert">
        <span class="dot" v-if="unread>0">{{unread}}</span>
      </div>
    </div>
    <div class="alertMessage" :style="style" v-if="alertUnread.length>0 || alertRead.length>0">
      <b-list-group>
        <b-list-group-item
          class="flex-column align-items-start"
          v-for="(item,index) in alertUnread.slice().reverse()"
          :key="index"
        >
          <div class="d-flex w-100 justify-content-between">
            <p class="mb-1">{{item.title}}</p>
          </div>

          <small>{{item.data}}</small>
        </b-list-group-item>
        <b-list-group-item
          class="flex-column align-items-start"
          v-for="(item,index) in alertRead.slice().reverse()"
          :key="index+99"
        >
          <div class="d-flex w-100 justify-content-between">
            <p class="mb-1">{{item.title}}</p>
          </div>

          <small>{{item.data}}</small>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        
        return {
            unread:0,
            style:'display:none',
            alertUnread:[],
            alertRead:[]
        }
    },
    async mounted(){
        if(this.alertUnread.length == 0 || this.alertRead.length == 0){
            await this.$store.dispatch('LoadAlert')
            this.alertUnread = this.$store.getters.getUnread
            this.unread = this.alertUnread.length
            this.alertRead = this.$store.getters.getRead
        }
        
    },
     methods:{
        //  
         async setRead(){
             if(this.style == 'display:none')
                this.style = 'display:block;'
            else
                this.style = 'display:none'
            this.unread = 0
            this.$store.dispatch('setRead')
         }
     }
}
</script>

<style scoped>
.alertBox {
  padding-top: 10px;
  width: 50px;
  height: 50px;
}
.alertMessage {
  /* display: none; */
  position: absolute;
  right: 150px;
  top: 50px;
  width: 500px;
  z-index: 2;
  max-height: 350px;
  overflow: auto;
}

.alert {
  margin-top: -55px;
  z-index: 1;
}
button {
  border: none;
}
.dot {
  font-size: 15px;
  height: 20px;
  width: 20px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
  padding-left: 5px;
}
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
@media only screen and (max-width: 1050px) {
  .alertMessage {
    /* display: none; */
    position: absolute;
    right: 0px;
    top: 75px;
    width: 300px;
    z-index: 2;
    max-height: 350px;
    overflow: auto;
  }

  /* .ulNav {
    display: block;
  } */
}
</style>