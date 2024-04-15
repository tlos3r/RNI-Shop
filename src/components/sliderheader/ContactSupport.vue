<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="col-3" v-for="(texts, index) in texts" :key="index">
          <div class="icon"><Icon :icon="texts.icon" /></div>
          <div class="text-title">
            <h5>{{ texts.title }}</h5>
            <p>{{ texts.p }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from '@iconify/vue'
export default {
  components: {
    Icon
  },
  data() {
    return {
      texts: [
        {
          icon: 'gridicons:shipping',
          title: 'Free Shipping $ Return',
          p: 'Shop with confidence and have your favorite electionics delivered right to your doorstep without any additional cost.'
        },
        {
          icon: 'ri:service-line',
          title: 'Money Back Guarantee',
          p: 'We guarantee to rectufy any unstisfactory expenrience you may have with your purchase. No queries posed.'
        },
        {
          icon: 'fluent:person-support-16-regular',
          title: 'Online Support 24/7 ',
          p: 'Need help with your electrics? Get in touch with us anytime, anywhere and let get your tech sorted.'
        },
        {
          icon: 'solar:sale-linear',
          title: 'Regular Sales',
          p: 'Dont miss out on our amazing deals with regular sales on our top-of-the-line home decor furniture.'
        }
      ]
    }
  }
}
</script>
<style scoped>
.row > * {
}
.col-12 {
  display: flex;
  justify-content: space-between;
}
.col-3 {
  width: 24%;
}
.icon {
  font-size: 60px;
  margin-bottom: 15px;
}
</style>
