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
                <!-- Modal content -->
                <div class="modal-content">
                    <editProfileDataModalBody
                        v-if="modalType === 'edit-profile-data'"
                    />
                    <editProfilePictureModalBody
                        v-if="modalType === 'edit-profile-picture'"
                    />
                    <addNewWorkoutPlanModalBody
                        v-if="modalType === 'add-new-workout-plan'"
                    />
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import eventBus from "@/eventBus";

//modals
import editProfileDataModalBody from "@/components/modals/editProfileDataModalBody.vue";
import editProfilePictureModalBody from "@/components/modals/editProfilePictureModalBody.vue";
import addNewWorkoutPlanModalBody from "@/components/modals/addNewWorkoutPlanModalBody.vue";

export default {
    name: "mainModal",
    data() {
        return {
            modalType: "",
        };
    },
    props: {
        activeModal: {
            type: Boolean,
            required: true,
        },
    },
    components: {
        editProfileDataModalBody,
        editProfilePictureModalBody,
        addNewWorkoutPlanModalBody,
    },
    setup() {},
    created() {
        document.addEventListener("keydown", this.press);
        eventBus.on("openModal", (data) => {
            console.log("event OPEN");
            this.modalType = data.modalType;
        });
        eventBus.on("closeModal", () => {
            this.modalType = "";
        });
    },
    methods: {
        press(event) {
            if (event.keyCode === 27 && this.activeModal) {
                this.closeModal();
            }
        },
        closeModal() {
            const closeModalData = {
                closeModal: true,
            };
            eventBus.emit("closeModal", closeModalData);
        },
    },
};
</script>

<style>
.modal-outer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1c1c1c;
    z-index: 9999;
}

.modal-inner {
    position: relative;
    width: 90%;
    padding: 20px;
    height: 90%;
    overflow: auto;
}

.modal-content {
    border: none;
    background-color: #fff0;
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
