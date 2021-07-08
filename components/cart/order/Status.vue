<template>
  <tr>
    <td colspan="6" class="px-4">
      <ul class="my-2 order_status_ul">
        <li class="ul_li">
          <div class="order_status" :class="status_pending">1</div>
          <span class="status_title">Pending</span>
        </li>
        <li
          class="px-2 mx-2 border_between_status"
          :class="status_confirmed"
        ></li>
        <li class="ul_li">
          <div class="order_status" :class="status_confirmed">2</div>
          <span class="status_title">Confirmed</span>
        </li>
        <li
          class="px-2 mx-2 border_between_status"
          :class="status_processing"
        ></li>
        <li class="ul_li">
          <div class="order_status" :class="status_processing">3</div>
          <span class="status_title">Processing</span>
        </li>
        <li class="px-2 mx-2 border_between_status" :class="status_picked"></li>
        <li class="ul_li">
          <div class="order_status" :class="status_picked">4</div>
          <span class="status_title">Picked</span>
        </li>
        <li
          class="px-2 mx-2 border_between_status"
          :class="status_shipped"
        ></li>
        <li class="ul_li">
          <div class="order_status" :class="status_shipped">5</div>
          <span class="status_title">Shipped</span>
        </li>
        <li
          class="px-2 mx-2 border_between_status"
          :class="status_complete"
        ></li>
        <li class="ul_li">
          <div class="order_status" :class="status_complete">6</div>
          <span class="status_title">Complete</span>
        </li>
        <li
          class="px-2 mx-2 border_between_status"
          :class="status_failed"
          v-if="order.status == 'failed'"
        ></li>
        <li class="ul_li" v-if="order.status == 'failed'">
          <div class="order_status" :class="status_failed">Failed</div>
          <!-- <span class="status_title">Complete</span> -->
        </li>
      </ul>
    </td>
  </tr>
</template>
<script>
export default {
  data() {
    return {
      status_pending: {
        status_pending:
          this.order.status === "pending" ||
          this.order.status === "confirmed" ||
          this.order.status === "processing" ||
          this.order.status === "picked" ||
          this.order.status === "shipped" ||
          this.order.status === "complete",
      },
      status_confirmed: {
        status_confirmed:
          this.order.status === "confirmed" ||
          this.order.status === "processing" ||
          this.order.status === "picked" ||
          this.order.status === "shipped" ||
          this.order.status === "complete",
      },
      status_processing: {
        status_processing:
          this.order.status === "processing" ||
          this.order.status === "picked" ||
          this.order.status === "shipped" ||
          this.order.status === "complete",
      },
      status_picked: {
        status_picked:
          this.order.status === "picked" ||
          this.order.status === "shipped" ||
          this.order.status === "complete",
      },
      status_shipped: {
        status_shipped:
          this.order.status === "shipped" || this.order.status === "complete",
      },
      status_complete: {
        status_complete: this.order.status === "complete",
      },
      status_failed: {
        status_failed: this.order.status === "failed",
      },
    };
  },
  props: {
    order: {
      required: true,
      type: Object,
    },
  },
};
</script>
