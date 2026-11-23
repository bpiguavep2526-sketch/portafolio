<!-- components/Inicio.vue -->
<template>
  <div class="inicio-wrapper w-100 py-5 position-relative overflow-hidden">
    <!-- Resplandor ambiental de fondo -->
    <div class="ambient-glow"></div>

    <div class="container position-relative z-1">
      <div class="row align-items-center g-5">
        
        <!-- Columna Izquierda: Mismo texto, subtítulo, párrafo, iconos SVG y botones -->
        <div class="col-lg-7 text-center text-lg-start">
          <h1 class="display-3 fw-bold mb-2 text-white tracking-tight">
            Soy <span class="text-gradient">Brian</span>
          </h1>
          
          <!-- Especialidad -->
          <h2 class="h4 fw-light mb-4 text-light-muted">
            Desarrollador Web Junior
          </h2>
          
          <!-- Breve párrafo -->
          <p class="lead text-light-description mb-4 max-w-600 mx-auto mx-lg-0">
            Disfruto mucho construir aplicaciones web desde cero y ver cómo el código cobra vida en la pantalla. Me gusta cuidar los detalles, resolver problemas lógicos y seguir aprendiendo nuevas tecnologías cada día.
          </p>
          
          <!-- Redes Sociales (Tus mismos SVG originales) -->
          <div class="d-flex justify-content-center justify-content-lg-start gap-3 mb-4">
            <!-- LinkedIn -->
            <a href="https://linkedin.com/in/tu-usuario" target="_blank" class="social-icon" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-linkedin"
                viewBox="0 0 16 16">
                <path
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>

            <!-- GitHub -->
            <a href="https://github.com/bpiguavep2526-sketch" target="_blank" class="social-icon" title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-github"
                viewBox="0 0 16 16">
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>

            <!-- Correo -->
            <a href="mailto:brian23pp@gmail.com?subject=Contacto%20desde%20tu%20Portafolio" class="social-icon" title="Enviar Correo">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                class="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path
                  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.756zm9.239-4.133-5.803 3.558L16 11.801V4.697z" />
              </svg>
            </a>
          </div>

          <!-- Botones de Acción -->
          <div class="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
            <button class="btn btn-navy btn-lg px-4 py-2" @click="$emit('navigate', 'contacto')">
              Contáctame
            </button>

            <a href="/tu-cv.pdf" download class="btn btn-outline-custom btn-lg px-4 py-2">
              Descargar CV
            </a>
          </div>
        </div>

        <!-- Columna Derecha: Composición con tus dos imágenes mejorada -->
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

            <!-- Tu Foto Perfil con anillo luminoso superpuesto -->
            <div class="position-absolute profile-wrapper">
              <div class="profile-ring">
                <img src="https://via.placeholder.com/180" alt="Brian Foto Perfil"
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
/* Fondo con malla sutil y degradado profundo */
.inicio-wrapper {
  background-color: #05070b;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.04) 1px, transparent 1px);
  background-size: 42px 42px;
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

.max-w-600 {
  max-width: 600px;
}

/* Degradado moderno en el nombre */
.text-gradient {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #38bdf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-light-muted {
  color: #94a3b8;
}

.text-light-description {
  color: #cbd5e1;
  line-height: 1.7;
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

/* Marco de la foto de código */
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

/* Foto de perfil con borde degradado luminoso */
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