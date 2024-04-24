<template>
  <q-page class="q-pa-md">
    <div class="q-gutter-md text-center">
      <div class="image-container">
        <img
          src="../assets/imagenIA.jpeg"
          alt="Logo de la universidad"
          class="ia-logo"
        />
      </div>
      <q-btn
        @click="registrarCliente"
        label="Registrar Vehiculo"
        color="primary"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  methods: {
    registrarCliente() {
      // Lógica para redirigir a la página de registro de cliente
      console.log('Redireccionando a la página de registro de cliente');
    },
    reporteDiario() {
      // Lógica para generar el reporte diario
      console.log('Generando reporte diario');
    },
    reporteMensual() {
      // Lógica para generar el reporte mensual
      console.log('Generando reporte mensual');
    },
  },
};
</script>

<style scoped>
/* Estilos opcionales para el diseño */
.q-btn {
  margin-top: 10px;
}
.image-container {
  text-align: center; /* Centra horizontalmente el contenido */
  margin-bottom: 45px;
}

.ia-logo {
  max-width: 30%; /* Establece el ancho máximo de la imagen al 100% del contenedor */
  height: auto; /* Hace que la altura se ajuste automáticamente según el ancho */
  margin: 0 auto; /* Centra horizontalmente la imagen */
}
</style>
