<template>
  <transition name="modal-animation">
    <div v-show="activeModal" class="modal-outer">
      <span
        class="material-symbols-outlined exit-button-modal"
        @click="closeModal()"
      >
        close
      </span>
      <div class="modal-inner">
        <!-- Sadržaj modala, isto kao i EditProfile.vue -->
        <div class="input-signup">
          <h3 class="naziv">First Name</h3>
          <input type="text" v-model="firstName" class="input-field" required />
          <h3 class="naziv">Last Name</h3>
          <input type="text" v-model="lastName" class="input-field" required />

          <h3 class="naziv">Old Password</h3>
          <input
            type="password"
            v-model="oldPassword"
            class="input-field"
            required
          />
          <h3 class="naziv">New Password</h3>
          <input
            type="password"
            v-model="newPassword"
            class="input-field"
            required
          />

          <div class="submit">
            <button
              type="button"
              class="btn btn-success"
              :style="btnStyleGreen"
              @click="changePassword"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from "axios";

export default {
  name: "EditProfileModal",
  props: {
    activeModal: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      oldPassword: "",
      newPassword: "",
      btnStyleGreen: {
        borderRadius: "20px",
        width: "300px",
        marginTop: "10px",
        border: "none",
      },
    };
  },
  methods: {
    async changePassword() {
      try {
        const token = localStorage.getItem("token");
        const formData = {
          firstName: this.firstName,
          lastName: this.lastName,
          old_password: this.oldPassword,
          new_password: this.newPassword,
        };
        await axios.patch(`http://localhost:3000/user`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        this.$emit("closeModal");
      } catch (error) {
        console.error(error.response);
      }
    },
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style scoped>
@import "../stylesheet.css";

.modal-outer {
  position: fixed;
  top: 5%;
  left: 25%;
  width: 50%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1c1c1c;
  border: 2px solid white;
  z-index: 9999;
}

.modal-inner {
  position: relative;
  width: 90%;
  padding: 20px;
}

.modal-content {
  border: none;
  background-color: rgba(21, 21, 21, 0);
}

.exit-button-modal {
  position: absolute;
  top: 30px;
  right: 30px;
  width: 27px;
  scale: 1.7;
  color: #fff;
  cursor: pointer;
}
</style>
