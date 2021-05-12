const Footer = () => {

    return (
        <footer>
      <div class="row gx-0">
        <!-- footer img -->
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-4 offset-md-1 p-5">
              <img src="images/logo.png" alt="">
            </div>
            <div class="col-md-7"></div>
          </div>
        </div>

        <!-- footer text -->
        <div class="col-md-6 pt-5">
          <div class="row gx-0">
            <div class="col-md-6">
              <ul>
                <li><a href="">About Online Food</a></li>
                <li><a href="">Read our Blog</a></li>
                <li><a href="">About Online Food</a></li>
                <li><a href="">Read our Blog</a></li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul>
                <li><a href="">Get help</a></li>
                <li><a href="">Read FAQs</a></li>
                <li><a href="">View all cities</a></li>
                <li><a href="">Restaurants near me</a></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- footer policy -->
        <div class="row copyright py-5">
          <div class="col-md-5 offset-md-1 px-5 mx-5">
            <a class="text-secondary" href="">Copyright @ 2021 Online food</a>
          </div>
          <div class="col-md-5 offset-md-1 ">
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    );
};