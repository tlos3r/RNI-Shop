<template>
  <div class="container-fluid">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="card-wrapper">
            <div
              class="card"
              style="width: 16rem"
              v-for="(product, index) in products"
              :key="index"
            >
              <img :src="product.src" class="card-img-top" alt="..." />
              <div class="card-body">
                <h3>{{ product.title }}</h3>
                <p class="card-text">
                  {{ product.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card-wrapper">
            <div
              class="card"
              style="width: 16rem"
              v-for="(product, index) in products"
              :key="index"
            >
              <img :src="product.src" class="card-img-top" alt="..." />
              <div class="card-body">
                <h3>{{ product.title }}</h3>
                <p class="card-text">
                  {{ product.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card-wrapper">
            <div
              class="card"
              style="width: 16rem"
              v-for="(product, index) in products"
              :key="index"
            >
              <div class="card-body">
                <h3>{{ product.title }}</h3>
                <p class="card-text">
                  {{ product.text }}
                </p>
              </div>
              <img :src="product.src" class="card-img-top" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [
        {
          title: 'Nước Xả Vải Blue Hàn Quốc ',
          text: '145000 VND',
          src: 'https://firebasestorage.googleapis.com/v0/b/morcell-product-shop.appspot.com/o/images%2F1714117308091vn-11134207-7qukw-lf80ekkp9fnud1.jpg?alt=media&token=77f536c1-02e1-43d5-a6b3-96a53eb2da25'
        },
        {
          title: 'Bột Tẩy Lồng Máy Giặt Hàn Quốc',
          text: '100000 VND',
          src: 'https://firebasestorage.googleapis.com/v0/b/morcell-product-shop.appspot.com/o/images%2F1714117092529vn-11134207-7r98o-ls2vpupqhkn801.jpg?alt=media&token=79ff54da-26b6-4b51-ba0f-ad676fbc5786'
        },
        {
          title: 'Nước Giặt Be Clean 3600ML',
          text: '98 VND',
          src: 'https://firebasestorage.googleapis.com/v0/b/morcell-product-shop.appspot.com/o/images%2F1714117429256vn-11134207-7qukw-lkhxt600sn1k39.jpg?alt=media&token=b1594cd2-02d9-4a2d-a78a-a73fc1c21ece'
        },
        {
          title: 'Nước giặt Hàn Quốc',
          text: '100000 VNĐ',
          src: 'https://firebasestorage.googleapis.com/v0/b/morcell-product-shop.appspot.com/o/images%2F1715532678498ncgiat3600.jpg?alt=media&token=368138ab-7c94-419d-97d2-b048dfcfdde9'
        },
        {
          title: 'Viên Giặt Xả Muối Hồng Himalaya Chính hãng',
          text: '149000 VND',
          src: 'https://firebasestorage.googleapis.com/v0/b/morcell-product-shop.appspot.com/o/images%2F1714118002486vn-11134201-23020-464pdd280wnv59.jpg?alt=media&token=526ff143-8dc2-4e0b-9032-f45acf4df4fe'
        }
      ]
    }
  },
  methods: {
    redirecTo(path) {
      this.$router.push(path)
    }
  }
}
</script>
<style scoped>
.container-fluid {
  position: relative;
  top: 20px;
  padding: 10px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.card-wrapper {
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 10px;
}
.carousel-item {
  padding: 20px;
}
.card {
  text-align: center;
  padding: 10px;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;
  transition: all 0.5s;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  border-radius: 10px;
}
.card:hover {
  transform: scale(1.05);
}
.card:active {
  transform: scale(0.95) rotateZ(0deg);
}
img {
  border-radius: 10px;
}
.carousel-control-prev {
  width: 8%;
}
.carousel-control-next {
  width: 8%;
}
.carousel-control-prev-icon {
  opacity: 1;
  border-radius: 50%;
}
</style>
