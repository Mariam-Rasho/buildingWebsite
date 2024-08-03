<script setup>
  import { onMounted } from 'vue';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap';
onMounted(() => {
   var myCarousel = document.querySelector('#carouselExampleFade');
   var carousel = new bootstrap.Carousel(myCarousel, {
     interval: 2000,
     wrap: true,
     cycle: true
   });
   myCarousel.addEventListener('mouseenter', function () {
       carousel.pause();
   });
   myCarousel.addEventListener('mouseleave', function () {
       carousel.cycle();
   });
});

</script>

<template>
  <div class="container-fluid w-100 p-0 m-0">
  <div class="row p-0 m-0">
    <div class="col-3">col-3</div>
    <div class="col-9 m-0 p-0"><div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner ">
    <div class="carousel-item active ">
      <img src="/public/Mask Group 3.jpg"  alt="...">
    </div> 
    <div class="carousel-item">
      <img src="/public/Mask Group 7.jpg"  alt="...">
    </div>
    <div class="carousel-item">
      <img src="/public/Mask Group 8.jpg"  alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
</div></div>
  </div>
</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
