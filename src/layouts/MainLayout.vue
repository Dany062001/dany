<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Garage Docentes y Administrativos PUCE-I
        </q-toolbar-title>

        <!-- Botón para cerrar sesión -->
        <q-btn
          flat
          dense
          round
          icon="exit_to_app"
          aria-label="Cerrar sesión"
          class="q-ml-auto"
          @click="logout"
        >
          Cerrar sesión
        </q-btn>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/IndedxPage" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  methods: {
    logout() {
      // Lógica para cerrar sesión
      this.$router.push('/');
    },
  },
};
</script>
