<!-- components/Inicio.vue -->
<template>
  <div class="inicio-wrapper w-100 position-relative overflow-hidden">
    <!-- Resplandor ambiental de fondo -->
    <div class="ambient-glow"></div>

    <div class="container position-relative z-1">
      <div class="row align-items-center g-5">

        <!-- Columna Izquierda -->
        <div class="col-lg-7 text-center text-lg-start">
          <h1 class="display-3 fw-bold mb-2 text-white tracking-tight">
            Soy <span class="text-gradient">Brian Piguave</span>
          </h1>

          <h2 class="h4 fw-light mb-4 text-light-muted">
            Desarrollador de Aplicaciones Web (DAW)
          </h2>

          <p class="lead text-light-description mb-4 max-w-600 mx-auto mx-lg-0">
            Estudiante de último curso de Desarrollo de Aplicaciones Web con base en desarrollo frontend y backend. Me
            gusta cuidar los detalles, resolver problemas lógicos y seguir aprendiendo nuevas tecnologías cada día.
          </p>

          <!-- Redes Sociales -->
          <div class="d-flex justify-content-center justify-content-lg-start gap-3 mb-4">
            <a href="https://www.linkedin.com/in/brian-piguave-pilligua/" target="_blank" rel="noopener noreferrer"
              class="social-icon" title="LinkedIn">
              <i class="bi bi-linkedin fs-5"></i>
            </a>

            <a href="https://github.com/bpiguavep2526-sketch" target="_blank" rel="noopener noreferrer"
              class="social-icon" title="GitHub">
              <i class="bi bi-github fs-5"></i>
            </a>

            <a href="mailto:brian23pp@gmail.com?subject=Contacto%20desde%20tu%20Portafolio" class="social-icon"
              title="Enviar Correo">
              <i class="bi bi-envelope-fill fs-5"></i>
            </a>
          </div>

          <!-- Botones de Acción -->
          <div class="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
            <button class="btn btn-navy btn-lg px-4 py-2" @click="$emit('navigate', 'contacto')">
              Contáctame
            </button>

            <a href="/cv.pdf" download="CV_Brian_Piguave.pdf"
              class="btn btn-outline-custom btn-lg px-4 py-2 d-inline-flex align-items-center gap-2">
              <i class="bi bi-file-earmark-arrow-down"></i> Descargar CV
            </a>
          </div>
        </div>

        <!-- Columna Derecha: Composición Visual -->
        <div class="col-lg-5">
          <div class="position-relative d-flex justify-content-center align-items-center visual-stage mx-auto">

            <!-- Resplandor detrás de la tarjeta -->
            <div class="card-backlight"></div>

            <!-- Marco decorativo con la imagen de código -->
            <div class="code-frame rounded-4 overflow-hidden">
              <div class="frame-topbar px-3 py-2 d-flex align-items-center gap-2">
                <span class="frame-dot bg-danger"></span>
                <span class="frame-dot bg-warning"></span>
                <span class="frame-dot bg-success"></span>
              </div>
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
                alt="Código de programación" class="img-fluid decor-img" />
            </div>

            <!-- Tu Foto de Perfil (Asegúrate de guardar perfil.jpg en public/img/) -->
            <div class="position-absolute profile-wrapper">
              <div class="profile-ring">
                <img src="/img/perfil.png" alt="Brian Piguave Foto Perfil"
                  class="img-fluid rounded-circle profile-img" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['navigate'])
</script>

<style scoped>
.inicio-wrapper {
  background-color: #05070b;
  background-image:
    linear-gradient(rgba(59, 130, 246, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.04) 1px, transparent 1px);
  background-size: 42px 42px;
  padding-top: 110px;
  padding-bottom: 60px;
}

.ambient-glow {
  position: absolute;
  top: 10%;
  right: 5%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(37, 99, 235, 0.16) 0%, rgba(5, 7, 11, 0) 70%);
  pointer-events: none;
  z-index: 0;
}

.tracking-tight {
  letter-spacing: -0.02em;
}

/* Iconos Sociales */
.social-icon {
  color: #cbd5e1;
  background-color: rgba(15, 23, 42, 0.85);
  border: 1px solid #1e293b;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  text-decoration: none;
}

.social-icon:hover {
  color: #ffffff;
  background-color: #1d4ed8;
  border-color: #60a5fa;
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);
}

/* Botón Principal */
.btn-navy {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: #ffffff;
  border: 1px solid #3b82f6;
  border-radius: 12px;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
  transition: all 0.3s ease;
}

.btn-navy:hover {
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.5);
}

/* Botón Secundario */
.btn-outline-custom {
  background-color: rgba(15, 23, 42, 0.5);
  backdrop-filter: blur(8px);
  color: #ffffff;
  border: 1px solid #334155;
  border-radius: 12px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-outline-custom:hover {
  background-color: #ffffff;
  color: #0f172a;
  border-color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.15);
}

/* Escenario Visual (Columna Derecha) */
.visual-stage {
  max-width: 440px;
  padding: 20px;
}

.card-backlight {
  position: absolute;
  inset: 25px;
  background: linear-gradient(135deg, #2563eb, #38bdf8);
  border-radius: 24px;
  filter: blur(28px);
  opacity: 0.25;
  transition: opacity 0.4s ease;
}

.visual-stage:hover .card-backlight {
  opacity: 0.4;
}

.code-frame {
  width: 100%;
  background-color: #0b111e;
  border: 1px solid rgba(59, 130, 246, 0.3);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.75);
  transform: rotate(-2deg);
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s ease;
}

.visual-stage:hover .code-frame {
  transform: rotate(0deg) scale(1.01);
  border-color: rgba(59, 130, 246, 0.6);
}

.frame-topbar {
  background-color: #070b14;
  border-bottom: 1px solid #1e293b;
}

.frame-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.decor-img {
  width: 100%;
  height: 330px;
  object-fit: cover;
  opacity: 0.45;
  filter: contrast(1.15) saturate(1.1);
  transition: opacity 0.4s ease;
}

.visual-stage:hover .decor-img {
  opacity: 0.6;
}

.profile-wrapper {
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.visual-stage:hover .profile-wrapper {
  transform: scale(1.06);
}

.profile-ring {
  padding: 4px;
  border-radius: 50%;
  background: linear-gradient(135deg, #60a5fa, #1d4ed8, #38bdf8);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.8), 0 0 25px rgba(59, 130, 246, 0.45);
}

.profile-img {
  width: 175px;
  height: 175px;
  object-fit: cover;
  display: block;
  border: 4px solid #070b14;
}
</style>