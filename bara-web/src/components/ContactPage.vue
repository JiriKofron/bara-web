<template>
  <section class="mt-6">
    <div>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle r="50" fill="red"></circle>
      </svg>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle r="50" fill="red"></circle>
      </svg>
    </div>
    <form>
      <input type="email" class="form-control" v-model="contact.email" />
      <input type="number" class="form-control" v-model="contact.mobile" />
      <input type="text" class="form-control" v-model="contact.text" />
      <button class="btn btn-success" type="submit" @click.prevent="sendForm">
        Odeslat zprávu
      </button>
    </form>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "ContactPage",
  data() {
    return {
      contact: {
        email: "",
        mobile: "",
        text: "",
      },
    };
  },
  methods: {
    sendForm() {
      let data = {
        email: this.contact.email,
        mobile: this.contact.mobile,
        text: this.contact.text,
      };
      console.log(data);
      axios.post(
        "https://hmo48x2i2k.execute-api.eu-central-1.amazonaws.com/default/sendEmail",
        data
      );
      console.log(this.contact);
    },
  },
};
</script>

<style scoped></style>
