<template>
    <div class="container">
        <div class="row bg-white py-3 mb-4">
            <h6 class="mt-2"><strong>Pay Now</strong></h6>
            <div class="col-md-6">
                <ul>
                    <li><strong>Order id #</strong> {{data.order_id}}</li>
                    <li><strong>Total amount #</strong> {{data.total}}</li>
                    <li>
                        <strong>Address #</strong>
                        <div>
                            <ul v-if="data.address">
                                <li>{{data.address.country}}</li>
                                <li>{{data.address.division}}</li>
                                <li>{{data.address.address}}</li>
                            </ul>
                        </div>
                    </li>
                    <li><strong>Quantity #</strong> 30 peice</li>
                </ul>
            </div>
             <div class="col-md-6">
                Pay with this
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            data:""
        }
    },
    async asyncData({ params, app, error }) {
      try {
        let response = await app.$axios.$get(
          `api/order/${encodeURI(params.slug)}`
        );
  
        return {
          data: response.data
        };
      } catch (e) {
        console.log(e.response.data.error)
        // error({
        //   statusCode: e.response.status
        // });
      }
    }
}
</script>