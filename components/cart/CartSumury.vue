<template>
  <fragment>
    <div class="col-md-12">
      <div class="overflow-scroll cart">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th class="text-center">Remove</th>
              <th class="text-center">Image</th>
              <th class="text-center">Name</th>
              <th class="text-center">Size</th>
              <th class="text-center">Quantity</th>
              <th class="text-center">Price (BDT)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <i class="fas fa-times"></i>
              </td>
              <td class="text-center">
                <img
                  src="//s.alicdn.com/@sc01/kf/Ub76f81c973bd4d43bf47a67d0f098cb8v.jpg"
                  alt=""
                  width="50px"
                />
              </td>
              <td class="text-center">
                <h6>
                  <a href="">This is about the product in detail</a>
                </h6>
              </td>

              <td class="text-center">
                <select >
                  <option value="">Select One</option>
                  <option value="">L</option>
                  <option value="">XL</option>
                  <option value="">M</option>
                </select>
              </td>
              <td class="text-center">
                <input type="number" value="2" />
              </td>
              <td class="text-center">500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-md-4 offset-md-8">
      <div
        class="my-2"
      >
        <table class="table table-bordered">
          <tbody>
            <tr>
              <td class="text-center">Sub Total</td>
              <td class="text-center">4000</td>
            </tr>
            <tr>
              <td class="text-center">Tax</td>
              <td class="text-center">4000</td>
            </tr>
            <tr>
              <td class="text-center">Grand Total</td>
              <td class="text-center">4000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </fragment>
</template>
