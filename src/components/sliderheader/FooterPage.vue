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
  <div class="container-fluid mt-5">
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
        <h4 class="ml-4">Tài khoản</h4>
        <ul>
          <li><a href="">Về chúng tôi </a></li>
          <li><a href="">Liên hệ ngay</a></li>
          <li><a href="">FAQ</a></li>
          <li><a href="">Chính sách bảo mật</a></li>
        </ul>
      </div>
      <div class="col-12 col-md-2">
        <h4 class="ml-4">Dịch vụ khách hàng</h4>
        <ul>
          <li><a href="">Hoàn trả và thanh toán</a></li>
          <li><a href="">Chính sách giao hàng</a></li>
          <li><a href="">Terms & condition</a></li>
          <li><a href="">Wishlist</a></li>
        </ul>
      </div>
      <div class="col-12 col-md-2">
        <h4 class="ml-4">Về chúng tôi</h4>
        <ul>
          <li><a href="">Leader </a></li>
          <li><a href="">CEO</a></li>
          <li><a href="">Intern</a></li>
          <li><a href="">Fresher</a></li>
        </ul>
      </div>
      <div class="col-12 col-md-3 bg-gradient">
        <h4 class="ml-4">Thông tin liên lạc</h4>
        <div class="support">
          <button>
            <Icon icon="fluent:person-support-28-regular" />
            <p style="font-size: 18px">Đường dây nóng miễn phí 24/7: <b>+010123456789</b></p>
          </button>
        </div>
        <p><b>ĐỊA CHỈ :</b> 125 Nguyễn Chí Thanh</p>
        <p><b>EMAIL :</b> admin@gmail.com</p>
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
