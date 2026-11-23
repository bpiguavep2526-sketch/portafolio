<!-- components/Contacto.vue -->
<template>
  <div class="contacto-wrapper w-100 py-5 d-flex flex-column justify-content-between">
    <div class="container my-auto">

      <div class="text-center mb-5">
        <h2 class="display-4 fw-bold text-white">
          Ponte en <span class="text-accent">Contacto</span>
        </h2>
        <p class="text-light-muted max-w-600 mx-auto">
          Contáctame directamente
          por cualquiera de estos medios.
        </p>
      </div>

      <div class="row g-4 justify-content-center">

        <!-- Teléfono / WhatsApp -->
        <div class="col-md-6 col-lg-4">
          <div class="contact-card p-4 rounded-4 border border-navy h-100 d-flex align-items-center gap-3">
            <div class="icon-circle text-accent">
              <i class="bi bi-whatsapp fs-4"></i>
            </div>
            <div>
              <h3 class="h6 text-white fw-bold mb-1">Teléfono / WhatsApp</h3>
              <a href="https://wa.me/34632012345" target="_blank" rel="noopener noreferrer"
                class="text-light-muted text-decoration-none hover-white d-block">
                +34 632 01 23 45
              </a>
            </div>
          </div>
        </div>

        <!-- Correo con botón de copiar -->
        <div class="col-md-6 col-lg-4">
          <div
            class="contact-card p-4 rounded-4 border border-navy h-100 d-flex align-items-center justify-content-between gap-2">
            <div class="d-flex align-items-center gap-3 overflow-hidden">
              <div class="icon-circle text-accent">
                <i class="bi bi-envelope-fill fs-4"></i>
              </div>
              <div class="overflow-hidden">
                <h3 class="h6 text-white fw-bold mb-1">Correo Electrónico</h3>
                <a href="mailto:brian23pp@gmail.com?subject=Contacto%20desde%20tu%20Portafolio"
                  class="text-light-muted text-decoration-none hover-white d-block text-truncate">
                  brian23pp@gmail.com
                </a>
              </div>
            </div>

            <button @click="copiarCorreo" class="btn btn-copy btn-sm flex-shrink-0"
              :title="copiado ? '¡Copiado!' : 'Copiar correo'">
              <i :class="copiado ? 'bi bi-check-lg text-success' : 'bi bi-clipboard'"></i>
            </button>
          </div>
        </div>

        <!-- Ubicación -->
        <div class="col-md-12 col-lg-4">
          <div class="contact-card p-4 rounded-4 border border-navy h-100 d-flex align-items-center gap-3">
            <div class="icon-circle text-accent">
              <i class="bi bi-geo-alt-fill fs-4"></i>
            </div>
            <div>
              <h3 class="h6 text-white fw-bold mb-1">Ubicación</h3>
              <span class="text-light-muted small d-block">
                08025 Barcelona, España[cite: 7]
              </span>
            </div>
          </div>
        </div>

      </div>

      <!-- Botones de Acción -->
      <div class="d-flex flex-wrap justify-content-center gap-3 mt-5">
        <a href="mailto:brian23pp@gmail.com?subject=Contacto%20desde%20tu%20Portafolio"
          class="btn btn-navy px-4 py-3 fw-semibold d-inline-flex align-items-center gap-2">
          <i class="bi bi-send-fill"></i> Escribirme un correo
        </a>

        <a href="/cv.pdf" download="CV_Brian_Piguave.pdf"
          class="btn btn-outline-light px-4 py-3 fw-semibold d-inline-flex align-items-center gap-2 rounded-3">
          <i class="bi bi-file-earmark-arrow-down"></i> Descargar CV (PDF)
        </a>
      </div>

    </div>

    <!-- Footer -->
    <footer class="text-center pt-5 mt-5 border-top border-navy">
      <div class="d-flex justify-content-center gap-3 mb-3">
        <a href="https://www.linkedin.com/in/brian-piguave-pilligua/" target="_blank" rel="noopener noreferrer"
          class="text-light-muted hover-white fs-5" title="LinkedIn">
          <i class="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/bpiguavep2526-sketch" target="_blank" rel="noopener noreferrer"
          class="text-light-muted hover-white fs-5" title="GitHub">
          <i class="bi bi-github"></i>
        </a>
      </div>
      <p class="text-light-muted small mb-0">
        © {{ new Date().getFullYear() }} <span class="text-white fw-semibold">Brian Piguave</span>. Desarrollado con
        Vue.js & Bootstrap.
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const copiado = ref(false)

const copiarCorreo = () => {
  navigator.clipboard.writeText('brian23pp@gmail.com')
  copiado.value = true
  setTimeout(() => { copiado.value = false }, 2000)
}
</script>

<style scoped>
.contacto-wrapper {
  background: linear-gradient(180deg, #0d1b2a 0%, #07090e 100%);
}

.hover-white:hover {
  color: #ffffff !important;
}

.contact-card {
  background-color: #0b111e;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  border-color: #2563eb !important;
  box-shadow: 0 10px 25px rgba(37, 99, 235, 0.15);
}

.icon-circle {
  width: 50px;
  height: 50px;
  min-width: 50px;
  background-color: #111c33;
  border: 1px solid #1e3a8a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-copy {
  background-color: #111c33;
  color: #94a3b8;
  border: 1px solid #1e3a8a;
  border-radius: 8px;
  padding: 6px 10px;
  transition: all 0.2s ease;
}

.btn-copy:hover {
  background-color: #1e3a8a;
  color: #ffffff;
}

.btn-navy {
  background-color: #1e40af;
  color: #ffffff;
  border: 1px solid #2563eb;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.btn-navy:hover {
  background-color: #2563eb;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
}
</style>