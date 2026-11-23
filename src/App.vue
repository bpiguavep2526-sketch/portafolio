<!-- App.vue -->
<template>
  <div>
    <!-- Navbar Fijo Superior con efecto cristal oscuro -->
    <nav class="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top shadow">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-4" href="#" @click.prevent="scrollTo('inicio')">
          Brian
        </a>

        <button class="navbar-toggler border-navy" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Menú renderizado dinámicamente con v-for -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav ms-auto gap-2">
            <button v-for="item in menuItems" :key="item.id" class="nav-link btn-nav" @click="scrollTo(item.id)">
              {{ item.nombre }}
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Contenido de las Secciones -->
    <main>
      <Inicio id="inicio" class="section-container" @navigate="scrollTo" />
      <Habilidades id="habilidades" class="section-container" />
      <Proyectos id="proyectos" class="section-container" />
      <Contacto id="contacto" class="section-container" />
    </main>
  </div>
</template>

<script setup>
import Inicio from './components/Inicio.vue'
import Habilidades from './components/Habilidades.vue'
import Proyectos from './components/Proyectos.vue'
import Contacto from './components/Contacto.vue'

const menuItems = [
  { id: 'inicio', nombre: 'Inicio' },
  { id: 'habilidades', nombre: 'Habilidades' },
  { id: 'proyectos', nombre: 'Proyectos' },
  { id: 'contacto', nombre: 'Contacto' }
]

const scrollTo = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.custom-navbar {
  background-color: rgba(7, 9, 14, 0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #1e293b;
}

.border-navy {
  border-color: #1e293b !important;
}

.btn-nav {
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: color 0.2s ease-in-out;
}

.btn-nav:hover {
  color: #3b82f6 !important;
}

/* Aplicado a la etiqueta raíz de cada componente hijo */
:deep(.section-container) {
  width: 100%;
  min-height: 100vh;
  scroll-margin-top: 70px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>