<template>
  <div class="container-fluid my-5">
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
          title: 'Miễn phí đưa hàng và trả hàng',
          p: 'Khách hàng không tốn 1 tý phí nào liên quan đến giao hàng và trả lại hàng.'
        },
        {
          icon: 'ri:service-line',
          title: 'Hoàn trả không phí',
          p: 'Hoàn trả liên tục với khoảng cách điều chỉnh, điều chỉnh và điều chỉnh.'
        },
        {
          icon: 'fluent:person-support-16-regular',
          title: 'Hỗ trợ 24/7 ',
          p: 'Cần hỗ trợ phải không ? Chúng tôi luôn hỗ trợ bạn 24/7'
        },
        {
          icon: 'solar:sale-linear',
          title: 'Luôn luôn có chính sách giảm giá',
          p: 'Đừng quên luôn luôn có những đợt giảm giá liên tục trên RNI Shop.'
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
