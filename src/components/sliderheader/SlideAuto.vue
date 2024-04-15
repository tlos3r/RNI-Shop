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
          title: 'Điện Máy Xanh',
          text: 'Price 25$ Titanium',
          src: 'https://e-techno-electronic.myshopify.com/cdn/shop/files/L01-offer-02_8cfd4436-0a68-48bc-8b2e-7bde627cfada.png?v=1710130140&width=1920'
        },
        {
          title: 'Điện Máy Xanh',
          text: 'Price 25$ Titanium',
          src: 'https://e-techno-electronic.myshopify.com/cdn/shop/files/L01-offer-02_8cfd4436-0a68-48bc-8b2e-7bde627cfada.png?v=1710130140&width=1920'
        },
        {
          title: 'Điện Máy Xanh',
          text: 'Price 25$ Titanium',
          src: 'https://e-techno-electronic.myshopify.com/cdn/shop/files/L01-offer-02_8cfd4436-0a68-48bc-8b2e-7bde627cfada.png?v=1710130140&width=1920'
        },
        {
          title: 'Điện Máy Xanh',
          text: 'Price 25$ Titanium',
          src: 'https://e-techno-electronic.myshopify.com/cdn/shop/files/L01-offer-02_8cfd4436-0a68-48bc-8b2e-7bde627cfada.png?v=1710130140&width=1920'
        },
        {
          title: 'Điện Máy Xanh',
          text: 'Price 25$ Titanium',
          src: 'https://e-techno-electronic.myshopify.com/cdn/shop/files/L01-offer-02_8cfd4436-0a68-48bc-8b2e-7bde627cfada.png?v=1710130140&width=1920'
        }
      ]
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
