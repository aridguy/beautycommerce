function Shop () {
    return (
        <>
        <section className="container shop" id="shop">
          <h2>Shop</h2>
          <div className="row  row-cols-md-4 row-cols-xxs-2 g-4">
            <div className="col">
              <div className="card h-100">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" className="card-img-top" alt="Skyscrapers"/>
                <div className="card-body">
              <h5 className="card-title">Beauty1 <i className="fas fa-heart"></i></h5>
              <p className="card-text">For beauty body <br /> <span>Price $40</span></p>
              </div>
                <div className="card-footer">
                  <a className="btn btn-primary" data-mdb-ripple-init>Buy Now <i className="fas fa-store"></i></a>
                  <a className="btn btn-primary" data-mdb-ripple-init>Add to Cart <i className="fas fa-cart-arrow-down"></i></a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" className="card-img-top" alt="Los Angeles Skyscrapers"/>
                <div className="card-body">
              <h5 className="card-title">Beauty2 <i className="fas fa-heart"></i></h5>
              <p className="card-text">For beauty face <br /> <span>Price $40</span></p>
              </div>
                <div className="card-footer">
                  <a className="btn btn-primary" data-mdb-ripple-init>Buy Now <i className="fas fa-store"></i></a>
                  <a className="btn btn-primary" data-mdb-ripple-init>Add to Cart <i className="fas fa-cart-arrow-down"></i></a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="card-img-top" alt="Palm Springs Road"/>
                <div className="card-body">
              <h5 className="card-title">Beauty3 <i className="fas fa-heart"></i></h5>
              <p className="card-text">For beauty legs <br /> <span>Price $40</span></p>
              </div>
                <div className="card-footer">
                  <a className="btn btn-primary" data-mdb-ripple-init>Buy Now <i className="fas fa-store"></i></a>
                  <a className="btn btn-primary" data-mdb-ripple-init>Add to Cart <i className="fas fa-cart-arrow-down"></i></a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="card-img-top" alt="Palm Springs Road"/>
                <div className="card-body">
              <h5 className="card-title">Beauty4 <i className="fas fa-heart"></i></h5>
              <p className="card-text">For beauty arms <br /> <span>Price $40</span></p>
              </div>
                <div className="card-footer">
                  <a className="btn btn-primary" data-mdb-ripple-init>Buy Now <i className="fas fa-store"></i></a>
                  <a className="btn btn-primary" data-mdb-ripple-init>Add to Cart <i className="fas fa-cart-arrow-down"></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
}


export default Shop;