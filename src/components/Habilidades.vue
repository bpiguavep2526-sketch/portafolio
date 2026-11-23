<!-- components/Habilidades.vue -->
<template>
  <div class="habilidades-wrapper w-100 py-5 position-relative overflow-hidden">
    <div class="ambient-glow"></div>

    <div class="container position-relative z-1">
      <div class="text-center mb-5">
        <span class="text-accent font-monospace small text-uppercase tracking-wider">Stack Técnico</span>
        <h2 class="display-4 fw-bold text-white mt-1">
          Habilidades & <span class="text-gradient">Tecnologías</span>
        </h2>
        <p class="text-light-muted max-w-600 mx-auto mt-2">
          Herramientas, lenguajes y entornos con los que construyo aplicaciones de principio a fin.
        </p>
      </div>

      <div class="row g-4">
        <div v-for="categoria in categorias" :key="categoria.titulo" class="col-lg-6">
          <div class="bento-card p-4 rounded-4 h-100 d-flex flex-column">
            
            <div class="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom border-navy">
              <div class="d-flex align-items-center gap-3">
                <div class="cat-icon-box">
                  <i :class="categoria.icono" class="text-accent fs-5"></i>
                </div>
                <div>
                  <h3 class="h5 text-white fw-bold mb-0">{{ categoria.titulo }}</h3>
                  <span class="small text-light-muted">{{ categoria.subtitulo }}</span>
                </div>
              </div>
            </div>

            <div class="row g-3 my-auto">
              <div v-for="skill in categoria.skills" :key="skill.nombre" class="col-6 col-sm-4">
                <div class="tech-item p-3 rounded-3 text-center h-100 position-relative d-flex flex-column align-items-center justify-content-center">
                  
                  <span v-if="skill.basic" class="basic-tag" title="Conocimientos básicos / En aprendizaje">
                    Básico
                  </span>

                  <div class="icon-wrapper mb-2">
                    <svg v-if="skill.customSvg === 'n8n'" class="tech-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="4.5" cy="12" r="2.5" stroke="#FF6D5A" stroke-width="2"/>
                      <circle cx="12" cy="12" r="2.5" stroke="#FF6D5A" stroke-width="2"/>
                      <circle cx="19.5" cy="6.5" r="2.5" stroke="#FF6D5A" stroke-width="2"/>
                      <circle cx="19.5" cy="17.5" r="2.5" stroke="#FF6D5A" stroke-width="2"/>
                      <path d="M7 12H9.5M14.2 10.8L17.3 7.8M14.2 13.2L17.3 16.2" stroke="#FF6D5A" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <i v-else :class="skill.icono" class="tech-icon"></i>
                  </div>

                  <span class="small text-white fw-medium text-truncate w-100">
                    {{ skill.nombre }}
                  </span>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const categorias = ref([
  {
    titulo: 'Frontend',
    subtitulo: 'Maquetación e interactividad',
    icono: 'bi bi-layout-wysiwyg',
    skills: [
      { nombre: 'HTML5', icono: 'devicon-html5-plain colored' },
      { nombre: 'CSS3', icono: 'devicon-css3-plain colored' },
      { nombre: 'JavaScript', icono: 'devicon-javascript-plain colored' },
      { nombre: 'Bootstrap', icono: 'devicon-bootstrap-plain colored' }
    ]
  },
  {
    titulo: 'Frameworks & Librerías',
    subtitulo: 'Ecosistemas modernos',
    icono: 'bi bi-box-seam',
    skills: [
      { nombre: 'Vue.js', icono: 'devicon-vuejs-plain colored' },
      { nombre: 'React', icono: 'devicon-react-original colored' },
      { nombre: 'Laravel', icono: 'devicon-laravel-plain colored' },
      { nombre: 'Express', icono: 'devicon-express-original text-white' }
    ]
  },
  {
    titulo: 'Backend & Datos',
    subtitulo: 'Lógica de servidor y persistencia',
    icono: 'bi bi-database',
    skills: [
      { nombre: 'PHP', icono: 'devicon-php-plain colored' },
      { nombre: 'Node.js', icono: 'devicon-nodejs-plain colored' },
      { nombre: 'Python', icono: 'devicon-python-plain colored' },
      { nombre: 'SQL Server', icono: 'devicon-microsoftsqlserver-plain colored' },
      { nombre: 'MongoDB', icono: 'devicon-mongodb-plain colored' }
    ]
  },
  {
    titulo: 'DevOps & Herramientas',
    subtitulo: 'Despliegue y automatización',
    icono: 'bi bi-tools',
    skills: [
      { nombre: 'Docker', icono: 'devicon-docker-plain colored' },
      { nombre: 'VS Code', icono: 'devicon-vscode-plain colored' },
      { nombre: 'Nginx', icono: 'devicon-nginx-original colored', basic: true },
      { nombre: 'n8n', customSvg: 'n8n', basic: true }
    ]
  }
])
</script>

<style scoped>
.habilidades-wrapper {
  background: linear-gradient(180deg, #0a1120 0%, #05070b 100%);
}

.ambient-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, rgba(5, 7, 11, 0) 70%);
  pointer-events: none;
  z-index: 0;
}

.max-w-600 { max-width: 600px; }
.text-accent { color: #3b82f6; }
.text-light-muted { color: #94a3b8; }
.border-navy { border-color: #1e293b !important; }

.text-gradient {
  background: linear-gradient(135deg, #60a5fa 0%, #38bdf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bento-card {
  background-color: rgba(11, 17, 30, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid #1e293b;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

.bento-card:hover {
  border-color: rgba(59, 130, 246, 0.45);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(37, 99, 235, 0.12);
}

.cat-icon-box {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background-color: rgba(37, 99, 235, 0.12);
  border: 1px solid rgba(59, 130, 246, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
}

.count-badge {
  color: #60a5fa;
  background-color: #070b14;
  border: 1px solid #1e293b;
  padding: 4px 10px;
  border-radius: 8px;
}

.tech-item {
  background-color: #070b14;
  border: 1px solid #151e31;
  transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
  cursor: default;
}

.tech-item:hover {
  transform: translateY(-4px);
  background-color: #0f172a;
  border-color: #3b82f6;
  box-shadow: 0 8px 18px rgba(37, 99, 235, 0.2);
}

.icon-wrapper {
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-icon {
  font-size: 2.1rem;
  transition: transform 0.25s ease, filter 0.25s ease;
}

.tech-svg {
  width: 36px;
  height: 36px;
  transition: transform 0.25s ease, filter 0.25s ease;
}

.tech-item:hover .tech-icon,
.tech-item:hover .tech-svg {
  transform: scale(1.15);
  filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.4));
}

.basic-tag {
  position: absolute;
  top: 6px;
  right: 6px;
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #38bdf8;
  background-color: rgba(14, 165, 233, 0.12);
  border: 1px solid rgba(56, 189, 248, 0.3);
  padding: 1px 6px;
  border-radius: 4px;
  text-transform: uppercase;
}
</style>