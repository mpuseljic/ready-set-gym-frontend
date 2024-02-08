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
                <h1 :style="{ color: '#d29433', 'text-align': 'center' }">
                    Upload new profile picture
                </h1>
                <div class="input-signup">
                    <input
                        type="file"
                        @change="handleImageUpload"
                        class="form-control"
                        accept="image/*"
                    />
                    <div class="submit">
                        <button
                            type="button"
                            class="btn btn-success"
                            :style="btnStyleGreen"
                            @click="uploadImage"
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
import firebase from "firebase/compat/app";
import eventBus from "@/eventBus";
import axios from "axios";
export default {
    name: "EditProfilePictureModal",
    props: {
        activeModal: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            file: null,
            btnStyleGreen: {
                borderRadius: "20px",
                width: "300px",
                marginTop: "10px",
                border: "none",
            },
        };
    },
    methods: {
        handleImageUpload(event) {
            this.file = event.target.files[0];
        },
        uploadImage() {
            if (this.file) {
                this.uploadToStorage();
            } else {
                console.error("No file selected");
            }
        },

        uploadToStorage() {
            const storageRef = firebase.storage().ref();
            const imageRef = storageRef.child(
                "profileImages/" + this.file.name
            );

            imageRef
                .put(this.file)
                .then((snapshot) => {
                    // Upload completed successfully
                    snapshot.ref.getDownloadURL().then((imageUrl) => {
                        console.log("Image URL:", imageUrl);
                        // Save the image path to the user database
                        this.saveImagePathToUserDB(imageUrl);
                    });
                })
                .catch((error) => {
                    console.error("Error during upload:", error);
                });
        },
        async saveImagePathToUserDB(imagePath) {
            const token = localStorage.getItem("token");
            const email = localStorage.getItem("userEmail");
            const formData = {
                email: email,
                imagePath: imagePath,
            };
            await axios.patch(`http://localhost:3000/user`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            eventBus.emit("newUserData");
            this.$emit("closeModal");
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
.user-profile-img {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
