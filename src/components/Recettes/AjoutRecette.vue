<template>
  
  <div class="container">
    <!-- Boutons de changement de localeue -->
    <div class="mb-4 d-flex justify-content-end">
      <button @click="changelocaleuage('en')" class="btn btn-primary me-2">English</button>
      <button @click="changelocaleuage('fr')" class="btn btn-primary">Français</button>
    </div>

    <form
      @submit.prevent="addRecette"
      class="formulaire form mb-5 shadow p-3 mb-5 bg-body rounded"
    >
      <h1>{{ $t('size_is', { size }) }}</h1>

      <div class="mb-3">
        <label for="title" class="form-label">{{ $t('title') }} :</label>
        <input
          type="text"
          class="form-control"
          v-model="title"
          id="title"
          required
        />
      </div>
      <div class="mb-3">
        <label for="ingredient" class="form-label">{{ $t('ingredients') }} :</label>
        <textarea
          class="form-control"
          v-model="ingredient"
          id="ingredient"
          required
        ></textarea>
      </div>

      <div class="mb-3">
        <label for="type" class="form-label">{{ $t('type') }} :</label>
        <select class="input form-select" v-model="type" id="type" required>
          <option value="Entrée">{{ $t('entry') }}</option>
          <option value="Plat">{{ $t('main_course') }}</option>
          <option value="Dessert">{{ $t('dessert') }}</option>
        </select>
      </div>
      <button class="clr btn text-white mt-3 mb-4 me-3">{{ $t('add') }}</button>
      <RouterLink
        class="list text-decoration-none text-white me-5 fw-bold"
        to="/listrecette"
      >
        <button class="btn btn-danger mt-3 mb-4">{{ $t('cancel') }}</button>
      </RouterLink>
    </form>
  </div>
</template>

<script setup>
import { useGestionStore } from "@/stores/gestion";
import { useRouter } from "vue-router";
import { ref, getCurrentInstance } from "vue";

const router = useRouter();
const store = useGestionStore();
const title = ref("");
const ingredient = ref("");
const type = ref("");
const size = ref(0);

const addRecette = async () => {
  try {
    await store.addRecete({
      title: title.value,
      ingredient: ingredient.value,
      type: type.value,
    });

    title.value = "";
    ingredient.value = "";
    type.value = "";
    router.push("/listrecette");
  } catch (error) {
    console.log(error);
  }
};


const { proxy } = getCurrentInstance();


const changelocaleuage = (locale) => {
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
