<!-- components/Contacto.vue -->
<template>
  <div class="contacto-wrapper w-100 py-5 d-flex flex-column justify-content-between">
    <div class="container my-auto">
      
      <!-- Encabezado de la sección -->
      <div class="text-center mb-5">
        <h2 class="display-4 fw-bold text-white">
          Ponte en <span class="text-accent">Contacto</span>
        </h2>
        <p class="text-light-muted max-w-600 mx-auto">
          Contáctame directamente por cualquiera de estos medios.
        </p>
      </div>

      <!-- Fila de 3 Tarjetas Simétricas -->
      <div class="row g-4 justify-content-center">

        <!-- Tarjeta Teléfono / WhatsApp -->
        <div class="col-md-6 col-lg-4">
          <div class="contact-card p-4 rounded-4 border border-navy h-100 d-flex align-items-center gap-3">
            <div class="icon-circle text-accent">
              <i class="bi bi-telephone-fill fs-4"></i>
            </div>
            <div>
              <h3 class="h6 text-white fw-bold mb-1">Teléfono / WhatsApp</h3>
              <a href="tel:+34632012345"
                class="text-light-muted text-decoration-none hover-white d-block">
                +34 632 012 345
              </a>
            </div>
          </div>
        </div>

        <!-- Tarjeta Correo con botón de copiar -->
        <div class="col-md-6 col-lg-4">
          <div class="contact-card p-4 rounded-4 border border-navy h-100 d-flex align-items-center justify-content-between gap-2">
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

            <!-- Botón rápido para copiar el correo -->
            <button 
              @click="copiarCorreo" 
              class="btn btn-copy btn-sm flex-shrink-0" 
              :title="copiado ? '¡Copiado!' : 'Copiar correo'"
            >
              <i :class="copiado ? 'bi bi-check-lg text-success' : 'bi bi-clipboard'"></i>
            </button>
          </div>
        </div>

        <!-- Tarjeta Ubicación -->
        <div class="col-md-12 col-lg-4">
          <div class="contact-card p-4 rounded-4 border border-navy h-100 d-flex align-items-center gap-3">
            <div class="icon-circle text-accent">
              <i class="bi bi-geo-alt-fill fs-4"></i>
            </div>
            <div>
              <h3 class="h6 text-white fw-bold mb-1">Ubicación</h3>
              <span class="text-light-muted small d-block">
                Barcelona, España (Disponible para remoto)
              </span>
            </div>
          </div>
        </div>

      </div>

      <!-- Botón Principal de Llamada a la Acción -->
      <div class="text-center mt-5">
        <a 
          href="mailto:brian23pp@gmail.com?subject=Contacto%20desde%20tu%20Portafolio" 
          class="btn btn-navy px-5 py-3 fw-semibold d-inline-flex align-items-center gap-2"
        >
          <i class="bi bi-send-fill"></i> Escribirme un correo ahora
        </a>
      </div>

    </div>

    <!-- Footer / Pie de página sencillo -->
    <footer class="text-center pt-5 mt-5 border-top border-navy">
      <p class="text-light-muted small mb-0">
        © {{ new Date().getFullYear() }} <span class="text-white fw-semibold">Brian</span>. Desarrollado con
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
  setTimeout(() => {
    copiado.value = false
  }, 2000)
}
</script>

<style scoped>
/* PALETA DE COLORES: NEGRO, AZUL MARINO Y BLANCO */
.contacto-wrapper {
  background: linear-gradient(180deg, #0d1b2a 0%, #07090e 100%);
}

.max-w-600 {
  max-width: 600px;
}

.text-accent {
  color: #3b82f6;
}

.text-light-muted {
  color: #94a3b8;
}

.hover-white:hover {
  color: #ffffff !important;
}

.border-navy {
  border-color: #1e293b !important;
}

/* TARJETAS DE INFORMACIÓN */
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

/* BOTÓN DE ACCIÓN */
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