<template>
  <div class="container">
    <div class="grid-container">
      <div class="grid-item item1">
        <img
          src="https://down-bs-vn.img.susercontent.com/81c6d4428c6ed6afcebbb3b6bb79b7a6.webp"
          alt=""
        />
      </div>
      <div class="grid-item item2">
        <img
          src="https://down-bs-vn.img.susercontent.com/fb689a61894f0655832fa318d647f43c.webp"
          alt=""
        />
      </div>
      <div class="grid-item item3">
        <img
          src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lky13tp1drkt95"
          alt=""
        />
      </div>
      <div class="grid-item item4">
        <img
          src="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljdqfzmqyl1oa3"
          alt=""
        />
      </div>
      <div class="grid-item item5">
        <img
          class="img-responsive"
          src="https://down-bs-vn.img.susercontent.com/23825381bf545710c595546a45eb9d55.webp"
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
