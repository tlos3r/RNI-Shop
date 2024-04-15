<template>
  <div class="container">
    <div class="grid-container">
      <div class="grid-item item1">
        <img
          src="https://images.unsplash.com/photo-1712675003032-0b9352c77ca7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div class="grid-item item2">
        <img
          src="https://images.unsplash.com/photo-1711539924906-c26039c3f903?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div class="grid-item item3">
        <img
          src="https://plus.unsplash.com/premium_photo-1710849581742-f2151607c745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div class="grid-item item4">
        <img
          src="https://images.unsplash.com/photo-1712514496282-6f3a73aff338?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div class="grid-item item5">
        <img
          class="img-responsive"
          src="https://images.unsplash.com/photo-1712311770062-9fe4850333d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Mnx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.grid-container {
  display: grid;
  /* Thiết lập cột */
  grid-template-columns: 320px 320px 320px 300px;
  /* Thiết lập hàng */
  grid-template-rows: 250px 180px 200px 100px;
  gap: 5px;
}
.grid-item {
  cursor: pointer;
}
.item1 {
  grid-column: 1/3;
  grid-row: 1;
  border-radius: 25px;
}
.item2 {
  grid-column: 3/6;
  grid-row: 1/3;
  border-radius: 25px;
}
.item3 {
  grid-column: 1/2;
  grid-row: 2/5;
  border-radius: 25px;
}
.item4 {
  grid-column: 2/3;
  grid-row: 2/5;
  border-radius: 25px;
}
.item5 {
  grid-column: 3/6;
  grid-row: 3/5;
  border-radius: 25px;
  width: 100%;
}
.container .grid-container .grid-item.item1 img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 25px;
}
.container .grid-container .grid-item.item2 img {
  width: 100%;
  height: 435px;
  object-fit: cover;
  border-radius: 25px;
}
.container .grid-container .grid-item.item3 img {
  width: 100%;
  height: 490px;
  object-fit: cover;
  border-radius: 25px;
}
.container .grid-container .grid-item.item4 img {
  width: 100%;
  height: 490px;
  object-fit: cover;
  border-radius: 25px;
}
.container .grid-container .grid-item.item5 img {
  width: 100%;
  height: 303px;
  object-fit: cover;
  border-radius: 25px;
  object-position: 50% 50%;
}
img {
  display: block;
  transition: all 1s ease;
}
</style>
