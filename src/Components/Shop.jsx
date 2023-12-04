function Shop () {
    return (
        <>
        <section className="container shop" id="shop">
          <h2>Shop</h2>
          <div class="row  row-cols-md-4 row-cols-xxs-2 g-4">
            <div class="col">
              <div class="card h-100">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top" alt="Skyscrapers"/>
                <div class="card-body">
              <h5 class="card-title">Beauty1 <i class="fas fa-heart"></i></h5>
              <p class="card-text">For beauty body <br /> <span>Price $40</span></p>
              </div>
                <div class="card-footer">
                  <a class="btn btn-primary" data-mdb-ripple-init>Buy Now <i class="fas fa-store"></i></a>
                  <a class="btn btn-primary" data-mdb-ripple-init>Add to Cart <i class="fas fa-cart-arrow-down"></i></a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top" alt="Los Angeles Skyscrapers"/>
                <div class="card-body">
              <h5 class="card-title">Beauty2 <i class="fas fa-heart"></i></h5>
              <p class="card-text">For beauty face <br /> <span>Price $40</span></p>
              </div>
                <div class="card-footer">
                  <a class="btn btn-primary" data-mdb-ripple-init>Buy Now <i class="fas fa-store"></i></a>
                  <a class="btn btn-primary" data-mdb-ripple-init>Add to Cart <i class="fas fa-cart-arrow-down"></i></a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top" alt="Palm Springs Road"/>
                <div class="card-body">
              <h5 class="card-title">Beauty3 <i class="fas fa-heart"></i></h5>
              <p class="card-text">For beauty legs <br /> <span>Price $40</span></p>
              </div>
                <div class="card-footer">
                  <a class="btn btn-primary" data-mdb-ripple-init>Buy Now <i class="fas fa-store"></i></a>
                  <a class="btn btn-primary" data-mdb-ripple-init>Add to Cart <i class="fas fa-cart-arrow-down"></i></a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top" alt="Palm Springs Road"/>
                <div class="card-body">
              <h5 class="card-title">Beauty4 <i class="fas fa-heart"></i></h5>
              <p class="card-text">For beauty arms <br /> <span>Price $40</span></p>
              </div>
                <div class="card-footer">
                  <a class="btn btn-primary" data-mdb-ripple-init>Buy Now <i class="fas fa-store"></i></a>
                  <a class="btn btn-primary" data-mdb-ripple-init>Add to Cart <i class="fas fa-cart-arrow-down"></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
}


export default Shop;