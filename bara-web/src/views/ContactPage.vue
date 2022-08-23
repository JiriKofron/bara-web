<template>
  <section class="contact">
    <div class="contact__details">
      <div class="contact__details__detail">
        <svg viewBox="0 0 200 150" class="contact__details__detail__circle">
          <circle r="50" cx="100" cy="75" fill="#e63946"></circle>
        </svg>
        <font-awesome-icon
          class="contact__details__detail__icon contact__details__detail__icon--phone"
          icon="fa-solid fa-mobile"
        ></font-awesome-icon>
        <div class="contact__details__detail__link">
          <a href="#">+420 728 252 002</a>
        </div>
      </div>
      <div class="contact__details__detail">
        <svg viewBox="0 0 200 150" class="contact__details__detail__circle">
          <circle r="50" cx="100" cy="75" fill="#e63946"></circle>
        </svg>
        <font-awesome-icon
          class="contact__details__detail__icon contact__details__detail__icon--email"
          icon="fa-solid fa-at"
        ></font-awesome-icon>
        <div class="contact__details__detail__link">
          <a href="mailto:b.psenicova@gmail.com">b.psenicova@gmail.com</a>
        </div>
      </div>
    </div>
    <form class="contact-form" ref="contact-form">
      <label for="name" class="form-label">Jméno:</label>
      <input
        type="email"
        id="name"
        class="form-control"
        v-model="contact.name"
      />
      <label for="email" class="form-label">Email:</label>
      <input
        type="email"
        id="email"
        class="form-control"
        v-model="contact.email"
      />
      <label for="mobile" class="form-label">Telefon: (nepovinné)</label>
      <input
        type="number"
        id="mobile"
        class="form-control"
        v-model="contact.mobile"
      />
      <label for="message" class="form-label">S čím vám mohu pomoci:</label>
      <textarea
        type="text"
        id="message"
        class="form-control"
        rows="5"
        v-model="contact.text"
      />
      <button
        class="btn contact-form__btn"
        type="submit"
        @click.prevent="sendForm"
        :disabled="isSending"
      >
        <span
          v-if="isSending"
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        <span v-else>Odeslat zprávu</span>
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
      isSending: false,
    };
  },
  methods: {
    sendForm() {
      this.isSending = true;

      let body = JSON.stringify({
        name: this.contact.name,
        email: this.contact.email,
        mobile: this.contact.mobile,
        message: this.contact.text,
      });

      axios({
        method: "POST",
        url: "https://qve84d0ly2.execute-api.eu-central-1.amazonaws.com/{proxy+}",
        data: body,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          this.isSending = false;
          this.$refs["contact-form"].reset();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  margin-top: 6rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @include md {
    flex-direction: row;
    justify-content: space-between;
  }

  &__details {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;

    &__detail {
      width: 100%;
      position: relative;
      max-width: 20rem;

      &__circle {
        max-width: 20rem;
      }

      &__icon {
        position: absolute;
        color: white;
        font-size: 5rem;
        top: calc(42% - 65px / 2);

        &--phone {
          left: calc(50% - 55px / 2);
        }

        &--email {
          left: calc(50% - 75px / 2);
        }
      }

      &__link {
        margin: 0;
        padding: 0;
        width: 100%;
        text-align: center;

        a {
          font-size: 1.5rem;
          font-family: $header-text;
          color: $contract-red;
          text-decoration: none;
        }
      }
    }
  }
}

.contact-form {
  width: 100%;
  max-width: 30rem;
  margin-top: 3rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba($contract-red, 0.9);

  @include md {
    margin-right: 2rem;
  }

  .form-label {
    color: white;
    font-size: 1.5rem;
    font-family: $header-text;
    padding: 0.3rem 0;
    margin-top: 1.5rem;
  }

  &__btn {
    background-color: $darkest-blue;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: $header-text;
    width: 100%;
    margin: 3rem auto;
    color: white;
  }
}
</style>
