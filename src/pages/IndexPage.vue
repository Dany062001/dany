<template>
  <q-page
    class="bg-light-white window-height window-width row justify-center items-center"
  >
    <div class="column q-gutter-md custom-background" style="margin: 20px">
      <q-card square bordered class="shadow-1" :class="{ animated: animated }">
        <q-card-section>
          <div class="image-container">
            <img
              src="../assets/logo-pucesi.jpg"
              alt="Logo de la universidad"
              class="university-logo"
            />
          </div>

          <q-form class="q-gutter-md">
            <q-input
              square
              filled
              clearable
              v-model="email"
              type="email"
              label="email"
              @keyup.enter="login"
            />
            <q-input
              square
              filled
              clearable
              v-model="password"
              type="password"
              label="password"
              @keyup.enter="login"
            />
          </q-form>
        </q-card-section>
        <q-card-actions class="q-px-md">
          <q-btn
            unelevated
            color="light-blue"
            size="lg"
            class="full-width"
            label="Login"
            @click="login"
          />
        </q-card-actions>
        <q-card-section class="text-center q-pa-none">
          <p class="text-grey-6">Not registered? Create an Account</p>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      email: '',
      password: '',
      animated: false,
    };
  },
  methods: {
    login() {
      // Simular una animación de entrada
      this.animated = true;
      setTimeout(() => {
        // Aquí iría tu lógica de autenticación
        // Redirigir a la página de inicio del menú (MenuInicio.vue)
        this.$router.push('/menu-inicio'); // Ajusta la ruta según tu configuración
      }, 500); // Cambia este valor para ajustar la duración de la animación
    },
  },
};
</script>

<style scoped>
.q-card {
  max-width: 360px;
  width: 100%;
  margin: auto;
}

.image-container {
  text-align: center; /* Centra horizontalmente el contenido */
  margin-bottom: 20px;
}

.university-logo {
  max-width: 50%; /* Establece el ancho máximo de la imagen al 100% del contenedor */
  height: auto; /* Hace que la altura se ajuste automáticamente según el ancho */
  margin: 0 auto; /* Centra horizontalmente la imagen */
}

.custom-background {
  background-color: #e6e6e6; /* Cambia este valor al color de fondo que prefieras */
}

.animated {
  animation: fadeIn 0.5s ease-in-out; /* Animación de entrada */
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
