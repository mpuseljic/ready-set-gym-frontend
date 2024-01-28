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
                    <h1>TEST</h1>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import eventBus from "@/eventBus";

export default {
    name: "exerciseModalBody",
    data() {
        return {};
    },
    props: {
        activeModal: {
            type: Boolean,
            required: true,
        },
    },
    components: {},
    created() {
        eventBus.on("test", (id) => {
            console.log("ID", id);
            console.log(this.activeModal);
        });
    },
    methods: {
        closeModal() {
            // dodati logiku samo za modal bodyje sa formom
            const closeModal = true;
            const clearForm = true;

            const closeModalData = {
                closeModal: closeModal,
                clearForm: clearForm,
            };
            eventBus.emit("closeModal", closeModalData);
        },
    },
};
</script>
<style>
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
