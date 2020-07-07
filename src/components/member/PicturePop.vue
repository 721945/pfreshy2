<template>
  <div>
    <!-- Using modifiers -->
    <!-- v-b-modal.my-modal -->
    <b-button variant="outline-secondary" class="Mybut" @click="onClick">ดูรูปภาพ สรุปเป็นรูปหรือภาพ</b-button>
    <!-- The modal -->

    <div id="myModal" class="modal" :style="{display : style.display}">
      <span class="close" @click="onClick">&times;</span>
      <img :src="pic" class="modal-content IMG" id="img01" />
      <span class="close-popup" @click="onClick"></span>
    </div>

    <!-- <b-modal id="my-modal" hide-footer centered style="align-items:center"></b-modal> -->
  </div>
</template>

<script>
export default {
  data(){
    return {
      pic:'',
      style:{
        display: 'none', 
      }
    }
  }, async mounted(){
    this.pic = await this.$store.getters.getPicture;
  },
  methods:{
    onClick(){
      this.style.display == 'none' ? this.style.display = 'block' : this.style.display = 'none'
    }
  }
}
</script>

<style scoped>
.Mybut {
  width: 100%;
}
.IMG {
  /* width: auto; */
  height: 500px;
}

#myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

#myImg:hover {
  opacity: 0.7;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* overflow: auto; Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
}

/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
  width: auto;
}

/* Caption of Modal Image */

@-webkit-keyframes zoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}
.close-popup {
  background: rgba(0, 0, 0, 0.7);
  cursor: default;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  visibility: hidden;
  /* "delay" the visibility transition */
  -webkit-transition: opacity 0.5s, visibility 0s linear 0.5s;
  transition: opacity 0.5s, visibility 0s linear 0.5s;
}
</style>
