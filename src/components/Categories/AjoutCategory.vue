<template>
  <div class="container">
    <div class="mb-4 d-flex justify-content-end">
      <button @click="changeLanguage('en')" class="btn btn-primary me-2">{{ $t('buttons.english') }}</button>
      <button @click="changeLanguage('fr')" class="btn btn-primary">{{ $t('buttons.french') }}</button>
    </div>
    <form
      @submit.prevent="addCategory"
      class="formulaire form mb-5 shadow p-3 mb-5 bg-body rounded"
    >
      <div class="mb-3">
        <label for="name" class="form-label">{{ $t('form.name') }} :</label>
        <input
          type="text"
          class="form-control"
          v-model="name"
          id="name"
          required
        />
      </div>
      <button type="submit" class="clr btn text-white mt-3 mb-4 me-3">
        {{ $t('buttons.add') }}
      </button>
      <button class="btn btn-danger mt-3 mb-4" @click="cancelAction">
        {{ $t('buttons.cancel') }}
      </button>
    </form>
  </div>
</template>


<script setup>
import { useGestionStore } from "@/stores/gestion";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { getCurrentInstance } from 'vue';
const router = useRouter();
const store = useGestionStore();
const name = ref("");

const addCategory = async () => {
  try {
    await store.addCategory(name.value);
    name.value = "";
    router.push("/list-category");
  } catch (error) {
    console.log(error.response.data);
  }
};

const cancelAction = () => {
  router.push("/list-category");
};
const { proxy } = getCurrentInstance();

const changeLanguage = (locale) => {
  proxy.$i18n.locale = locale;
};
</script> 

<style scoped>
.clr {
  background-color: #343a40;
}
.clr:hover {
  background-color: #24272a;
}
.formulaire {
  width: 50%;
  border-radius: 10px;
  padding: 20px;
  margin: auto;
  margin-top: 16vh;
}
textarea {
  resize: none;
}
</style>
