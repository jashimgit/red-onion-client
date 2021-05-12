
const Food = () => {
    
    return(
        <div class="container pt-5">
        {/* <!-- food-time --> */}
        <div class="row gx-0">
          <div class="col-md-12 menu-list">
            <ul>
              <li><a href="">Breakfast</a></li>
              <li><a href="">Lunch</a></li>
              <li><a href="">Dinner</a></li>
            </ul>
          </div>
        </div>
  
        {/* <!-- food-menu --> */}
        <div class="row row-cols-1 row-cols-md-3 g-4 menu text-center gx-0">
          <div class="col">
            <div class="card">
              <img src="images/lunch1.png" class="card-img-top align-self-center" alt="...">
              <div class="card-body">
                <h5 class="card-title">Fried Chicken Bento</h5>
                <p class="card-text text-secondary">How we dream about our future</p>
                <h4>$10.50</h4>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="images/lunch2.png" class="card-img-top align-self-center" alt="...">
              <div class="card-body">
                <h5 class="card-title">Fried Chicken Bento</h5>
                <p class="card-text text-secondary">How we dream about our future</p>
                <h4>$10.50</h3>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="images/lunch3.png" class="card-img-top align-self-center" alt="...">
              <div class="card-body">
                <h5 class="card-title">Fried Chicken Bento</h5>
                <p class="card-text text-secondary">How we dream about our future</p>
                <h4>$10.50</h3>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="images/lunch4.png" class="card-img-top align-self-center" alt="...">
              <div class="card-body">
                <h5 class="card-title">Fried Chicken Bento</h5>
                <p class="card-text text-secondary">How we dream about our future</p>
                <h4>$10.50</h3>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="images/lunch5.png" class="card-img-top align-self-center" alt="...">
              <div class="card-body">
                <h5 class="card-title">Fried Chicken Bento</h5>
                <p class="card-text text-secondary">How we dream about our future</p>
                <h4>$10.50</h3>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="images/lunch6.png" class="card-img-top align-self-center" alt="...">
              <div class="card-body">
                <h5 class="card-title">Fried Chicken Bento</h5>
                <p class="card-text text-secondary">How we dream about our future</p>
                <h4>$10.50</h3>
              </div>
            </div>
          </div>
        </div>
  
        {/* <!-- Checkout --> */}
        <div class="checkout text-center pt-4 mt-4">
          <button>Checkout Your Food</button>
        </div>
      </div>
    )
}

export default Food;