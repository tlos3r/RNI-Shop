<script>
import { Icon } from '@iconify/vue'
export default {
  components: {
    Icon
  },
  data() {
    return {
      logos: ['logos:visa', 'logos:mastercard', 'fontisto:american-express', 'fontisto:paypal']
    }
  }
}
</script>
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-3">
        <div class="footer-title">
          <h4 class="mb-3">Công Nghệ Điện Tử</h4>
          <p>
            Chia sẻ thông tin liên hệ, chi tiết cửa hàng và nội dung thương hiệu với khách hàng của
            bạn.
          </p>
          <h4>Cổng thanh toán an toán</h4>
          <div class="icon d-flex gap-4">
            <div v-for="logo in logos" :key="logo">
              <Icon :icon="logo" style="font-size: 20px" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-2">
        <h4 class="ml-4">My Accout</h4>
        <ul>
          <li><a href="">About us </a></li>
          <li><a href="">Contact us</a></li>
          <li><a href="">Faq's</a></li>
          <li><a href="">Privacy policy</a></li>
        </ul>
      </div>
      <div class="col-12 col-md-2">
        <h4 class="ml-4">Customer Service</h4>
        <ul>
          <li><a href="">Return & exchange</a></li>
          <li><a href="">Shipping policy</a></li>
          <li><a href="">Terms & condition</a></li>
          <li><a href="">Wishlist</a></li>
        </ul>
      </div>
      <div class="col-12 col-md-2">
        <h4 class="ml-4">Quick Links</h4>
        <ul>
          <li><a href="">About us </a></li>
          <li><a href="">Contact us</a></li>
          <li><a href="">Faq's</a></li>
          <li><a href="">Privacy policy</a></li>
        </ul>
      </div>
      <div class="col-12 col-md-3 bg-gradient">
        <h4 class="ml-4">Contact Info</h4>
        <div class="support">
          <button>
            <Icon icon="fluent:person-support-28-regular" />
            <p style="font-size: 18px">Đường dây nóng miễn phí 24/7: <b>+010123456789</b></p>
          </button>
        </div>
        <p><b>ADDRESS:</b> 1010 - White stress block, usa</p>
        <p><b>EMAIL:</b> admin@gmail.com</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
ul li {
  list-style: none;
  margin-top: 5px;
}
ul li a {
  text-decoration: none;
  color: black;
}
ul li a:hover {
  color: rgb(16, 38, 150);
}
ol,
ul {
  padding-left: 0;
}
.support {
  display: flex;
}
.support a {
  font-size: 20px;
}

img,
svg {
  float: left;
  font-size: 50px;
}
button {
  background-color: #fff;
  outline: none;
  border: none;
}
button:hover {
  color: #0d6e37;
}
</style>
