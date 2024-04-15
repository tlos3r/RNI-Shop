<template>
  <div class="container">
    <h1 class="title">Điền thông tin của bạn</h1>
    <p class="text">(Hãy điền chính xác thông tin của bạn)</p>
    <div class="nice-form-group">
      <label>Họ và tên</label>
      <input type="text" placeholder="Họ và tên" value="" />
    </div>
    <div class="nice-form-group">
      <label>Số điện thoại</label>
      <input type="tel" placeholder="Số điện thoại" value="" />
    </div>

    <div class="nice-form-group">
      <label>Địa chỉ</label>
      <input type="text" placeholder="Địa chỉ" value="" />
    </div>

    <button class="btn-button">XÁC NHẬN</button>
  </div>
</template>
<script></script>
<style scoped>
.container {
  max-width: 500px;
  border: 3px solid #d86304;
  padding: 10px;
  position: relative;
  top: 50px;
  border-radius: 10px;
}
.title {
  text-align: center;
}
.text {
  text-align: center;
}
.btn-button {
  height: 35px;
  width: 100%;
  font-weight: bold;
  background-color: #f9fafb;
  border: 1px solid;
  border-radius: 3px;
  margin-top: 40px;
}

.btn-button:hover {
  background-color: #d86304;
  transition: all 0.5s ease;
  color: white;
}
</style>
