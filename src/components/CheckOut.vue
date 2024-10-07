<template>
    <div class="container my-5">
      <div class="row">
        <!-- Left side: Delivery Address Section -->
        <div class="col-lg-7 mb-4">
          <div class="card p-3">
            <h2>Delivery address</h2>
            <div class="map-container mb-3">
              <!-- Replace with Google Maps API or actual map -->
              <img src="../assets/images/Screenshot 2024-10-07 151047.png" alt="Map" class="img-fluid rounded">
            </div>
            <p class="address">
              <strong>Haris Boys Hostel Haji Muhammad Ali Road</strong>
              <br />
              Lahore
            </p>
            <a href="#" class="text-primary">Edit</a>
  
            <!-- Suburb Input -->
            <div class="missing-suburb mt-4">
              <h4>We’re missing your suburb</h4>
              <input type="text" class="form-control mt-2" placeholder="Enter your suburb" value="Near karachi naseeb biryani" />
            </div>
  
            <!-- Floor Input -->
            <div class="mt-3">
              <input type="text" class="form-control" placeholder="Floor" />
            </div>
  
            <!-- Note to rider -->
            <div class="mt-3">
              <textarea class="form-control" rows="3" placeholder="Note to rider - e.g., building, landmark"></textarea>
            </div>
  
            <!-- Labels Section -->
            <div class="mt-4">
              <h5>Add a Label</h5>
              <div class="btn-group" role="group">
                <button type="button" class="btn btn-outline-secondary">
                  <i class="fas fa-home"></i> Home
                </button>
                <button type="button" class="btn btn-outline-secondary">
                  <i class="fas fa-briefcase"></i> Work
                </button>
                <button type="button" class="btn btn-outline-secondary">
                  <i class="fas fa-heart"></i> Partner
                </button>
                  <button type="button" class="btn btn-outline-secondary">
                <i class="fas fa-plus"></i> Other
                </button>
              </div>
            </div>

  
            <!-- Save and Continue Button -->
            <div class="mt-4">
              <button class="btn btn-pink w-100">Save and continue</button>
            </div>

            <hr>
            <p>
                Contactless delivery
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
            </p>
          </div>
        </div>
  
        <!-- Right side: Order Summary Section -->
        <div class="col-lg-5">
          <div class="card p-3">
            <h3>Your order from</h3>
            <p class="restaurant-name fw-bold">Sam's Kitchen</p>
  
            <div class="order-item d-flex justify-content-between my-3">
              <p>1 × Classic Chicken Momos</p>
              <span>Rs. 400</span>
            </div>
  
            <div class="price-breakdown">
              <p class="d-flex justify-content-between">Subtotal <span>Rs. 400</span></p>
              <p class="d-flex justify-content-between">Standard delivery <span>Free</span></p>
              <p class="d-flex justify-content-between">Service fee <span>Rs. 9.99</span></p>
              <p class="d-flex justify-content-between">VAT <span>Rs. 0</span></p>
            </div>
  
            <hr />
  
            <div class="total d-flex justify-content-between fw-bold">
              <p>Total (Incl. VAT)</p>
              <span>Rs. 409.99</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CheckOut",
  };
  </script>
  
  <style scoped>

/* The switch - the container */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide the default checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #5f606c;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

/* When the checkbox is checked */
input:checked + .slider {
  background-color: #2196F3;
}

/* Move the slider to the right */
input:checked + .slider:before {
  transform: translateX(16px);
}

/* Rounded slider (optional) */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}








  /* Map container styles */
  .map-container img {
    width: 100%;
    height: auto;
  }
  
  .total {
    font-size: 1.2rem;
  }
  
  .btn-pink {
    background-color: #e60073;
    color: #fff;
  }
  
  .btn-pink:hover {
    background-color: #c90065;
  }
  
  .btn-group .btn {
    margin-right: 10px;
  }
  
  .btn-group .btn:last-child {
    margin-right: 0;
  }

  



  .btn-group .btn {
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-group .btn i {
  margin-right: 5px;
}

.btn-group .btn:last-child {
  margin-right: 0;
}


  </style>
  