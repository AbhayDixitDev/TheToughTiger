function Carousel(){
    document.getElementById("carouselDarkVariant").innerHTML = `
    <!-- Indicators -->
  <div class="carousel-indicators" >
    <button
      data-mdb-target="#carouselDarkVariant"
      data-mdb-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      data-mdb-target="#carouselDarkVariant"
      data-mdb-slide-to="1"
      aria-label="Slide 1"
    ></button>
    <button
      data-mdb-target="#carouselDarkVariant"
      data-mdb-slide-to="2"
      aria-label="Slide 1"
    ></button>
  </div>

  <!-- Inner -->
  <div class="carousel-inner" >
    <!-- Single item -->
    <div class="carousel-item active" >
      <img src="./img/slider1.jpg" class="d-block w-100 mx-auto" alt="Motorbike Smoke"/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style="color: white;">For the toughest cloths like tough tiger</h5>
        <p style="color: white;">Visit our store to get the best cloths for you</p>
      </div>
    </div>

    <!-- Single item -->
    <div class="carousel-item">
      <img src="./img/slider2.jpg" class="d-block w-100 mx-auto" alt="Mountaintop"/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style="color: white;">For the toughest cloths like tough tiger</h5>
        <p style="color: white;">Visit our store to get the best cloths for you</p>
      </div>
    </div>

    <!-- Single item -->
    <div class="carousel-item">
      <img src="./img/slider3.webp" class="d-block w-100 mx-auto" alt="Woman Reading a Book" />
      <div class="carousel-caption d-none d-md-block">
        <h5 style="color: white;">For the toughest cloths like tough tiger</h5>
        <p style="color: white;">Visit our store to get the best cloths for you</p>
      </div>
    </div>
  </div>
  <!-- Inner -->



    `
}

