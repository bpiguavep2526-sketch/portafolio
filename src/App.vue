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
      <Educacion id="educacion" class="section-container" />
      <Contacto id="contacto" class="section-container" />
    </main>
  </div>
</template>

<script setup>
import Inicio from './components/Inicio.vue'
import Habilidades from './components/Habilidades.vue'
import Proyectos from './components/Proyectos.vue'
import Educacion from './components/Educacion.vue'
import Contacto from './components/Contacto.vue'

const menuItems = [
  { id: 'inicio', nombre: 'Inicio' },
  { id: 'habilidades', nombre: 'Habilidades' },
  { id: 'proyectos', nombre: 'Proyectos' },
  { id: 'educacion', nombre: 'Educación' },
  { id: 'contacto', nombre: 'Contacto' }
]

const scrollTo = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>