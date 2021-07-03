<template>
  <fragment>
    <div class="toggle_option">
      <ul>
        <li
          class="px-4 py-1 mr-2 text-center"
          @click.prevent="ShowOption('description')"
          :class="{
            toggle_option_li: option == 'description',
          }"
        >
          <a href="">Description</a>
        </li>
        <li
          class="px-4 py-1 mr-2 text-center"
          @click.prevent="ShowOption('comment')"
          :class="{
            toggle_option_li: option == 'comment',
          }"
        >
          <a href="">Comment</a>
        </li>
        <li
          class="px-4 py-1 mr-2 text-center"
          @click.prevent="ShowOption('certificket')"
          :class="{
            toggle_option_li: option == 'certificket',
          }"
        >
          <a href="">Certificket</a>
        </li>
      </ul>
    </div>

    <div v-if="option == 'description'" class="mt-2 mb-2">
      <table border="1px solid black">
        <thead>
          <tr>
            <th class="border">
              <h6 class="p-1 text-center"><strong>Description</strong></h6>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border">
              <p class="p-2 text-customcolor-400">
                {{ data.description }}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else-if="option == 'comment'" class="mt-2 comment">
      <div class="py-2">
        <h5>Leave a Commnet</h5>
      </div>
      <div>
        <label for="" class="text-base">Rating</label>
        <div>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
      </div>
      <div class="mt-2 mb-2">
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          class="form-control"
          placeholder="Type Your Comment Here"
        ></textarea>
      </div>
      <div class="p-2 mb-2 user_comment">
        <ul>
          <li v-for="n in 3" :key="n">
            <a href="">
              <img
                src="//s.alicdn.com/@sc01/kf/Ub76f81c973bd4d43bf47a67d0f098cb8v.jpg"
                style="border-radius: 50%"
                width="10%"
                alt=""
              />
              <span class="text-base font-bold">Shakil Sarder</span>
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              earum ipsum officiis voluptas architecto, modi quaerat eos sed
              quos dignissimos dolorem delectus ad dolores, repellendus eaque
              aliquid harum molestiae cumque
            </p>
            <ul class="mt-2 reply">
              <li>
                <a href="">
                  <img
                    src="//s.alicdn.com/@sc01/kf/Ub76f81c973bd4d43bf47a67d0f098cb8v.jpg"
                    style="border-radius: 50%"
                    width="10%"
                    alt=""
                  />
                  <span class="text-base font-bold">Shakil Sarder</span>
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam earum ipsum officiis voluptas architecto, modi quaerat
                  eos sed quos dignissimos dolorem delectus ad dolores,
                  repellendus eaque aliquid harum molestiae cumque
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div v-else class="mt-2 mb-2">
      <div class="certificket">
        <img
          v-for="n in 4"
          :key="n"
          src="https://picsum.photos/id/1/200/300"
          alt=""
          width="25%"
        />
      </div>
    </div>
  </fragment>
</template>
<script>
export default {
  data() {
    return {
      option: "comment",
    };
  },
  props: {
    data: {
      required: true,
      type: Object,
    },
  },
  methods: {
    ShowOption(arg) {
      this.option = arg;
    },
  },
};
</script>
