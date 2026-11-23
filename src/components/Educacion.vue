<!-- components/Educacion.vue -->
<template>
    <div class="educacion-wrapper w-100 py-5 position-relative overflow-hidden">
        <div class="ambient-glow"></div>

        <div class="container position-relative z-1">

            <div class="text-center mb-5">
                <span class="text-accent font-monospace small text-uppercase tracking-wider">Trayectoria</span>
                <h2 class="display-4 fw-bold text-white mt-1">
                    Formación <span class="text-gradient">Académica</span>
                </h2>
                <p class="text-light-muted max-w-600 mx-auto mt-2">
                    Base técnica y estudios especializados en desarrollo de software y aplicaciones web.
                </p>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-9">
                    <div class="timeline-container position-relative ps-4 ps-md-5">

                        <div class="timeline-line"></div>

                        <div v-for="(item, index) in formacionDB" :key="index"
                            class="timeline-item position-relative mb-4">
                            <div class="timeline-dot" :class="{ 'dot-active': item.actual }">
                                <span v-if="item.actual" class="pulse-ring"></span>
                            </div>

                            <div class="edu-card p-4 rounded-4">
                                <div
                                    class="d-flex flex-column flex-md-row justify-content-between align-items-md-start gap-2 mb-3">
                                    <div class="d-flex align-items-start gap-3">
                                        <div class="edu-icon-box flex-shrink-0 mt-1">
                                            <i :class="item.icono" class="text-accent fs-5"></i>
                                        </div>
                                        <div>
                                            <h3 class="h5 text-white fw-bold mb-1">{{ item.titulo }}</h3>
                                            <div
                                                class="d-flex flex-wrap align-items-center gap-2 text-light-muted small">
                                                <span class="fw-medium text-light-description">
                                                    <i class="bi bi-building me-1 text-accent"></i>{{ item.centro }}
                                                </span>
                                                <span>•</span>
                                                <span>
                                                    <i class="bi bi-geo-alt me-1"></i>{{ item.ubicacion }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-center gap-2 flex-shrink-0 ms-5 ms-md-0">
                                        <span class="date-badge font-monospace small px-3 py-1 rounded-pill"
                                            :class="item.actual ? 'badge-current' : 'badge-completed'">
                                            <i
                                                :class="item.actual ? 'bi bi-clock-history me-1' : 'bi bi-check-circle me-1'"></i>
                                            {{ item.periodo }}
                                        </span>
                                    </div>
                                </div>

                                <p class="text-light-description small mb-3">
                                    {{ item.descripcion }}
                                </p>

                                <div v-if="item.etiquetas?.length"
                                    class="d-flex flex-wrap gap-2 pt-3 border-top border-navy">
                                    <span v-for="(tag, idx) in item.etiquetas" :key="idx"
                                        class="edu-pill px-2 py-1 rounded-2 small text-light-muted">
                                        {{ tag }}
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
const formacionDB = [
    {
        titulo: 'CFGS en Desarrollo de Aplicaciones Web (DAW)',
        centro: "Centre d'Estudis Politècnics",
        ubicacion: 'Barcelona',
        periodo: 'Sept. 2025 - Actualidad',
        actual: true,
        icono: 'bi bi-code-square',
        descripcion: 'Especialización en arquitectura web full-stack, despliegue de aplicaciones, diseño de interfaces modernas y desarrollo backend. Actualmente cursando el módulo de formación en centros de trabajo (prácticas).',
        etiquetas: ['Desarrollo Frontend & Backend', 'APIs REST', 'Despliegue Web', 'Módulo de Prácticas']
    },
    {
        titulo: 'CFGS en Desarrollo de Aplicaciones Multiplataforma (DAM)',
        centro: 'Prat Educació',
        ubicacion: 'Barcelona',
        periodo: '2022 - 2024',
        actual: false,
        icono: 'bi bi-laptop',
        descripcion: 'Formación integral en programación orientada a objetos, gestión de bases de datos relacionales y no relacionales, y desarrollo multiplataforma. Incluye 3 meses de prácticas desarrollando, manteniendo y documentando sitios web.',
        etiquetas: ['POO (Java / Python)', 'Bases de Datos SQL & NoSQL', 'Desarrollo Móvil', 'Prácticas Formativas (3 meses)']
    },
    {
        titulo: 'Bachillerato',
        centro: 'Educación Secundaria',
        ubicacion: 'Ecuador',
        periodo: 'Finalizado',
        actual: false,
        icono: 'bi bi-mortarboard-fill',
        descripcion: 'Formación académica general con base en ciencias, matemáticas y resolución lógica de problemas.',
        etiquetas: ['Formación General', 'Base Lógica y Matemática']
    }
]
</script>

<style scoped>
.educacion-wrapper {
    background: linear-gradient(180deg, #0a1120 0%, #0d1b2a 100%);
}

.ambient-glow {
    position: absolute;
    top: 40%;
    left: 15%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, rgba(10, 17, 32, 0) 70%);
    pointer-events: none;
    z-index: 0;
}

.timeline-line {
    position: absolute;
    left: 11px;
    top: 12px;
    bottom: 12px;
    width: 2px;
    background: linear-gradient(180deg, #3b82f6 0%, #1e293b 85%, transparent 100%);
}

.timeline-dot {
    position: absolute;
    left: -32px;
    top: 24px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #0b111e;
    border: 3px solid #334155;
    z-index: 2;
    transition: all 0.3s ease;
}

@media (min-width: 768px) {
    .timeline-dot {
        left: -44px;
    }
}

.timeline-dot.dot-active {
    border-color: #38bdf8;
    background-color: #2563eb;
    box-shadow: 0 0 12px rgba(56, 189, 248, 0.7);
}

.timeline-item:hover .timeline-dot {
    border-color: #60a5fa;
    transform: scale(1.2);
}

.pulse-ring {
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    border: 2px solid #38bdf8;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(0.8);
        opacity: 0.8;
    }

    100% {
        transform: scale(1.8);
        opacity: 0;
    }
}

.edu-card {
    background-color: rgba(11, 17, 30, 0.85);
    backdrop-filter: blur(12px);
    border: 1px solid #1e293b;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s ease, box-shadow 0.3s ease;
}

.edu-card:hover {
    transform: translateY(-5px);
    border-color: rgba(59, 130, 246, 0.55);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(37, 99, 235, 0.15);
}

.edu-icon-box {
    width: 42px;
    height: 42px;
    border-radius: 10px;
    background-color: rgba(37, 99, 235, 0.12);
    border: 1px solid rgba(59, 130, 246, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
}

.badge-current {
    color: #38bdf8;
    background-color: rgba(14, 165, 233, 0.12);
    border: 1px solid rgba(56, 189, 248, 0.35);
}

.badge-completed {
    color: #94a3b8;
    background-color: #070b14;
    border: 1px solid #1e293b;
}

.edu-pill {
    background-color: #070b14;
    border: 1px solid #151e31;
}
</style>