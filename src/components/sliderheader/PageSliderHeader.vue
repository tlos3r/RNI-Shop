<script>
export default {
  data() {
    return {
      data() {
        return {}
      }
    }
  }
}
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-8">
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active c-item">
              <img
                src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpq1cayik1uc1b"
                class="w-100 c-img"
              />
            </div>
            <div class="carousel-item c-item">
              <img
                src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lky13tp1ayfxcb"
                class="w-100 c-img"
              />
            </div>
            <div class="carousel-item c-item">
              <img
                src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpq1cayjez0913"
                class="w-100 c-img"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="col-3">
        <div class="btn-1">
          <button class="btn-item"></button>
          <button class="btn-item"></button>
          <button class="btn-item"></button>
        </div>
        <div class="btn-2">
          <button class="btn-item"></button>
          <button class="btn-item"></button>
          <button class="btn-item"></button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container-fluid .row {
  margin: 0 auto;
}
.col-8 {
  /* background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOq5YG2kmr1PjhAPGeS1JSyGltHQM_aFwuZJC9lSoo0VTD-VdNdPN90hPPdc9B4f8aP_0&usqp=CAU'); */
  height: 500px;
  text-align: center;
  border-radius: 10px;
  position: relative;
  left: 35px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.col-3 {
  text-align: center;
  display: flex;
  align-content: center;
  justify-content: center;
  position: relative;
  border: 1px solid rgb(232, 193, 193);
  border-radius: 10px;
  left: 77px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  /* background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOq5YG2kmr1PjhAPGeS1JSyGltHQM_aFwuZJC9lSoo0VTD-VdNdPN90hPPdc9B4f8aP_0&usqp=CAU'); */
}
.btn-1 {
  display: grid;
  place-items: center;
}
.btn-2 {
  display: grid;
  margin-left: 10px;
  place-items: center;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-item {
  width: 140px;
  height: 140px;
  border: 3px solid gray;
  border-radius: 10px;
}
.btn-item:hover {
  background-color: #0d55a7;
  transition: 0.5s;
}
.c-item {
  height: 500px;
  border-radius: 10px;
}
.c-img {
  height: 100%;
  object-fit: fill;
  border-radius: 10px;
}
.carousel-control-prev {
  width: 8%;
}
.carousel-control-next {
  width: 8%;
}
</style>
