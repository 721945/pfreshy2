<template>
  <div>
    <div class="container">
      <div class="textHeader">
        <h1 class="home-title">
          <span>PREFRESHY</span>
          <span>2020</span>
        </h1>
      </div>
    </div>
    <teamcoin />
  </div>
</template>

<script>
import teamcoin from '@/components/teamcoin'
export default {
  components: {
    teamcoin,
  },
}
</script>

<style scoped>
.container {
  margin: 30px auto;
  /* min-height: 80vh; */
  min-width: 100vw;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
}
.textHeader {
  padding: 50px;
  border: 1px solid rgba(0, 0, 0, 0.25);
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
}

h1 {
  font-size: 3em;
  font-weight: normal;
}

/* title styles */
.home-title span {
  position: relative;
  overflow: hidden;
  display: block;
  line-height: 1.2;
}

.home-title span::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: white;
  animation: a-ltr-after 2s cubic-bezier(0.77, 0, 0.18, 1) forwards;
  transform: translateX(-101%);
}

.home-title span::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--bg-color);
  animation: a-ltr-before 2s cubic-bezier(0.77, 0, 0.18, 1) forwards;
  transform: translateX(0);
}

.home-title span:nth-of-type(1)::before,
.home-title span:nth-of-type(1)::after {
  animation-delay: 1s;
}

.home-title span:nth-of-type(2)::before,
.home-title span:nth-of-type(2)::after {
  animation-delay: 1.5s;
}

@keyframes a-ltr-after {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(101%);
  }
}

@keyframes a-ltr-before {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(200%);
  }
}
</style>
