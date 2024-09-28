<template>
  <div class="page-background container mt-5">
    <div class="mb-4 d-flex justify-content-end">
     
    </div>

    <h1 class="animated-header mt-4 text-center">{{ $t('welcome_message') }}</h1>

    <!-- Ajouter un row Bootstrap -->
    <div class="row mt-5 justify-content-center">
      <!-- Colonne responsive pour la première carte -->
      <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
        <div class="card h-100">
          <img
            src="/src/assets/images/poulet-yassa.jpg"
            class="card-img-top"
            alt="Poulet Yassa"
            style="height: 12rem"
          />
          <div class="card-body">
            <h5 class="card-title">Poulet Yassa</h5>
            <p class="card-text">
              {{ $t('yassa.description') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Colonne responsive pour la deuxième carte -->
      <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
        <div class="card h-100">
          <img
            src="/src/assets/images/niébé.jpg"
            class="card-img-top"
            alt="Niébé"
            style="height: 12rem"
          />
          <div class="card-body">
            <h5 class="card-title">Niébé</h5>
            <p class="card-text">
              {{ $t('niebe.description') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Colonne responsive pour la troisième carte -->
      <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
        <div class="card h-100">
          <img
            src="/src/assets/images/Riz.jpg"
            class="card-img-top"
            alt="Riz au Poisson"
            style="height: 12rem"
          />
          <div class="card-body">
            <h5 class="card-title">Riz au Poisson</h5>
            <p class="card-text">
              {{ $t('rice.description') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.page-background {
  background-color: #f0f0f0;
  min-height: 100vh;
  color: #333;
  padding: 20px;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animated-header {
  animation: fadeInUp 1s ease-out;
}
</style>
