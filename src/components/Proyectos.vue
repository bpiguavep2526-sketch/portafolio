<!-- components/Proyectos.vue -->
<template>
  <div class="proyectos-wrapper w-100 py-5">
    <div class="container">
      <!-- Encabezado y Filtros -->
      <div class="text-center mb-5">
        <span class="text-accent font-monospace small text-uppercase tracking-wider">Portafolio</span>
        <h2 class="display-4 fw-bold text-white mt-1">
          Proyectos <span class="text-gradient">Destacados</span>
        </h2>
        <p class="text-light-muted max-w-600 mx-auto mt-2 mb-4">
          Una selección de aplicaciones web que he desarrollado para poner en práctica distintas tecnologías.
        </p>

        <div class="d-flex flex-wrap justify-content-center gap-2">
          <button v-for="filtro in filtros" :key="filtro" @click="filtroActivo = filtro"
            class="btn btn-filter px-3 py-1 rounded-pill small fw-medium"
            :class="{ 'active': filtroActivo === filtro }">
            {{ filtro }}
          </button>
        </div>
      </div>


      <!-- Grid de Cartas -->
      <div class="row g-4">
        <div v-for="proyecto in proyectosFiltrados" :key="proyecto.id" class="col-md-6">
          <article class="project-card rounded-4 overflow-hidden h-100 d-flex flex-column">

            <!-- Marco tipo navegador con ruta real del repo -->
            <div class="browser-bar px-3 py-2 d-flex align-items-center gap-2">
              <span class="b-dot"></span>
              <span class="b-dot"></span>
              <span class="b-dot"></span>
              <span class="ms-2 small text-light-muted font-monospace opacity-75 text-truncate">
                {{ proyecto.repoUrl.replace('https://', '').replace('.git', '') }}
              </span>
            </div>

            <!-- Imagen con overlay en hover -->
            <div class="img-wrapper position-relative overflow-hidden">
              <img :src="proyecto.imagen" :alt="proyecto.nombre" class="w-100 h-100 object-fit-cover project-img" />
              <div class="img-overlay d-flex align-items-center justify-content-center">
                <a :href="proyecto.repoUrl" target="_blank" rel="noopener noreferrer"
                  class="btn btn-light rounded-pill px-4 py-2 fw-semibold shadow">
                  <i class="bi bi-github me-2"></i>Explorar Repositorio
                </a>
              </div>
            </div>

            <!-- Cuerpo de la Carta -->
            <div class="p-4 d-flex flex-column flex-grow-1">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <h3 class="h4 fw-bold text-white mb-0">{{ proyecto.nombre }}</h3>
                <span class="badge-category small font-monospace">{{ proyecto.categoria }}</span>
              </div>

              <p class="text-light-description small mb-4 flex-grow-1">
                {{ proyecto.resumen }}
              </p>

              <div class="d-flex flex-wrap gap-2 pt-3 border-top border-navy">
                <div v-for="(tech, index) in proyecto.tecnologias" :key="index"
                  class="tech-pill px-2 py-1 rounded-2 d-inline-flex align-items-center gap-2">
                  <i :class="obtenerIcono(tech)" class="fs-6"></i>
                  <span class="small text-light-muted">{{ tech }}</span>
                </div>
              </div>
            </div>

          </article>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const filtroActivo = ref('Todos')
const filtros = ['Todos', 'Laravel', 'Vue.js', 'Node.js', 'Python']

const mapaIconos = {
  'laravel': 'devicon-laravel-plain colored',
  'php': 'devicon-php-plain colored',
  'sql server': 'devicon-microsoftsqlserver-plain colored',
  'bootstrap': 'devicon-bootstrap-plain colored',
  'javascript': 'devicon-javascript-plain colored',
  'python': 'devicon-python-plain colored',
  'vue.js': 'devicon-vuejs-plain colored',
  'docker': 'devicon-docker-plain colored',
  'nginx': 'devicon-nginx-original colored',
  'node.js': 'devicon-nodejs-plain colored',
  'mongodb': 'devicon-mongodb-plain colored',
  'express': 'devicon-express-original text-white',
  'superset': 'bi bi-bar-chart-line-fill text-info'
}

const obtenerIcono = (nombreTech) => mapaIconos[nombreTech.toLowerCase().trim()] || 'bi bi-code-slash text-accent'

const proyectosDB = [
  {
    id: 1,
    nombre: 'Kanblue',
    categoria: 'Gestión / Kanban',
    resumen: 'Aplicación web que permite crear proyectos con tareas adjuntas personalizables (asignación, título, descripción y estado) siguiendo la metodología KANBAN.',
    imagen: '/img/kanblue.png',
    tecnologias: ['Laravel', 'PHP', 'SQL Server', 'Bootstrap', 'JavaScript'],
    repoUrl: 'https://github.com/bpiguavep2526-sketch/Kanblue.git'
  },
  {
    id: 2,
    nombre: 'ZERO GAME',
    categoria: 'EdTech / Gaming',
    resumen: 'Juego de ámbito educativo que permite a los jugadores aprender mientras se divierten, con niveles progresivos y desafíos interactivos.',
    imagen: '/img/zero.png',
    tecnologias: ['Laravel', 'PHP', 'Python', 'JavaScript', 'SQL Server', 'Bootstrap'],
    repoUrl: 'https://github.com/EricPeralta1/zero_game.git'
  },
  {
    id: 3,
    nombre: 'Amli',
    categoria: 'Logística & BI',
    resumen: 'Plataforma para el control y gestión de rutas marítimas y mercancías, integrando reglas Incoterms para determinar responsabilidades y costos.',
    imagen: '/img/amli.png',
    tecnologias: ['Laravel', 'PHP', 'Vue.js', 'Docker', 'Nginx', 'Superset', 'JavaScript'],
    repoUrl: 'https://github.com/EricPeralta1/fluxo.git'
  },
  {
    id: 4,
    nombre: 'Kaminos',
    categoria: 'Mapas & Rutas',
    resumen: 'Plataforma colaborativa para crear, compartir y visualizar rutas geográficas, con exportación compatible con servicios GPS como Google My Maps.',
    imagen: '/img/kaminos.png',
    tecnologias: ['Vue.js', 'Node.js', 'JavaScript', 'MongoDB', 'Express'],
    repoUrl: 'https://github.com/bpiguavep2526-sketch/kaminos.git'
  }
]

const proyectosFiltrados = computed(() => {
  if (filtroActivo.value === 'Todos') return proyectosDB
  return proyectosDB.filter(p =>
    p.tecnologias.some(t => t.toLowerCase() === filtroActivo.value.toLowerCase())
  )
})
</script>

<style scoped>
.proyectos-wrapper {
  background: linear-gradient(180deg, #05070b 0%, #0a1120 100%);
}

.btn-filter {
  background-color: #0b111e;
  color: #94a3b8;
  border: 1px solid #1e293b;
  transition: all 0.25s ease;
}

.btn-filter:hover {
  border-color: #3b82f6;
  color: #ffffff;
}

.btn-filter.active {
  background-color: #2563eb;
  border-color: #3b82f6;
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.35);
}

.project-card {
  background-color: #0b111e;
  border: 1px solid #1e293b;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: rgba(59, 130, 246, 0.6);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7), 0 0 25px rgba(37, 99, 235, 0.2);
}

.browser-bar {
  background-color: #070b14;
  border-bottom: 1px solid #1e293b;
}

.b-dot {
  width: 9px;
  height: 9px;
  min-width: 9px;
  border-radius: 50%;
  background-color: #334155;
}

.img-wrapper {
  height: 230px;
  background-color: #07090e;
}

.project-img {
  transition: transform 0.6s ease;
}

.img-overlay {
  position: absolute;
  inset: 0;
  background: rgba(5, 7, 11, 0.7);
  backdrop-filter: blur(3px);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .img-overlay {
  opacity: 1;
}

.project-card:hover .project-img {
  transform: scale(1.06);
}

.badge-category {
  color: #60a5fa;
  background-color: rgba(37, 99, 235, 0.12);
  border: 1px solid rgba(59, 130, 246, 0.25);
  padding: 2px 10px;
  border-radius: 6px;
}

.tech-pill {
  background-color: #0f172a;
  border: 1px solid #1e293b;
  transition: border-color 0.2s ease;
}

.tech-pill:hover {
  border-color: #3b82f6;
}
</style>