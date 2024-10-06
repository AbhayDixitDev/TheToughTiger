function Footer(){
    document.getElementById("footer").innerHTML = `
    
      <footer class="text-white text-center text-lg-start bg-dark " style="background-image:url(./img/footerbg.jpg) !important;background-size: cover !important; ">
        <!-- Grid container -->
        <div class="container p-4">
          <!--Grid row-->
          <div class="row mt-4">
            <!--Grid column-->
            <div class="col-lg-4 col-md-12 mb-4 mb-md-0" style="font-family:poppins">
              <h5 class="text-uppercase mb-4">About company</h5>
    
              <p>
                <span style="color: red;font-size: large;font-family:poppins">The Tough Tiger</span> is a leading manufacturer of high-quality fabrics and apparel. Our mission is to provide comfortable, durable, and stylish clothing to people of all ages. We strive to build long-term relationships with our customers, suppliers, and partners through our commitment to excellence, innovation, and sustainability.
              </p>
    
              <div class="mt-4">
                <!-- Facebook -->
                <a type="button" class="btn btn-floating btn-light btn-lg"><i class="fab fa-facebook-f"></i></a>
                <!-- Dribbble -->
                <a type="button" class="btn btn-floating btn-light btn-lg"><i class="fab fa-dribbble"></i></a>
                <!-- Twitter -->
                <a type="button" class="btn btn-floating btn-light btn-lg"><i class="fab fa-twitter"></i></a>
                <!-- Google + -->
                <a type="button" class="btn btn-floating btn-light btn-lg"><i class="fab fa-google-plus-g"></i></a>
                <!-- Linkedin -->
              </div>
            </div>
            <!--Grid column-->
    
            <!--Grid column-->
            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-4 pb-1">Contact Us</h5>
    
             
    
              <ul class="fa-ul" style="margin-left: 1.65em;">
                <li class="mb-3">
                  <span class="fa-li"><i class="fas fa-home"></i></span><span class="ms-2">INTA RORI, H NO 345, NEAR MASJID, SATHA DEVI
                    MANDIR KE SAAMNE, BULANDSHAHR, Bulandshahar, Uttar
                    Pradesh, 203001</span>
                </li>
                <li class="mb-3">
                  <span class="fa-li"><i class="fas fa-envelope"></i></span><span class="ms-2">contact@example.com</span>
                </li>
                <li class="mb-3">
                  <span class="fa-li"><i class="fas fa-phone"></i></span><span class="ms-2">+ 48 234 567 88</span>
                </li>
              </ul>
            </div>
            <!--Grid column-->
    
            <!--Grid column-->
            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-4">Opening hours</h5>
    
              <table class="table text-center text-white">
                <tbody class="fw-normal">
                  <tr>
                    <td>Mon - Thu:</td>
                    <td>8am - 9pm</td>
                  </tr>
                  <tr>
                    <td>Fri - Sat:</td>
                    <td>8am - 1am</td>
                  </tr>
                  <tr>
                    <td>Sunday:</td>
                    <td>9am - 10pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--Grid column-->
          </div>
          <!--Grid row-->
        </div>
        <!-- Grid container -->
    
        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
          © 2024 Copyright:
          <a class="text-white" href="https://mdbootstrap.com/">TheToughTiger.com</a>
        </div>
        <!-- Copyright -->
      </footer>
    `;
}  