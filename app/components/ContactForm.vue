<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue"
import { Mail, MapPin, Send, ShieldCheck } from "lucide-vue-next"
import { useContactForm } from "~/composables/useContactForm"

const { form, errors, loading, success, submit } = useContactForm()
const config = useRuntimeConfig()

const widgetId = ref<string | null>(null)

declare global {
  interface Window {
    turnstile?: {
      render: (selector: string, options: { sitekey: string; callback: (token: string) => void }) => string
      remove: (widgetId: string) => void
    }
  }
}

onMounted(() => {
  const state = useState<string | null>("turnstile")

  const renderWidget = () => {
    if (window.turnstile && !widgetId.value) {
      try {
        widgetId.value = window.turnstile.render("#cf-turnstile-container", {
          sitekey: config.public.turnstileSiteKey,
          callback: (token: string) => {
            state.value = token
          },
        })
      } catch (e) {
        console.error("Erreur rendu Turnstile:", e)
      }
    }
  }

  // Attendre que Turnstile soit chargé
  if (window.turnstile) {
    renderWidget()
  } else {
    const interval = setInterval(() => {
      if (window.turnstile) {
        clearInterval(interval)
        renderWidget()
      }
    }, 100)

    setTimeout(() => clearInterval(interval), 5000)
  }
})

onBeforeUnmount(() => {
  if (widgetId.value && window.turnstile) {
    try {
      window.turnstile.remove(widgetId.value)
    } catch {
      // Ignorer les erreurs de nettoyage
    }
  }
})
</script>


<template>
  <section
    class="w-full bg-gradient-to-b from-white to-slate-50/50 dark:from-[#0F172B] dark:to-[#0F172B] py-20"
    aria-label="Formulaire de contact"
  >
    <div class="w-full max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid md:grid-cols-2 gap-8 md:gap-12">
        <!-- Colonne gauche : Informations -->
        <div class="space-y-8">
          <div class="space-y-4">
            <div
              class="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
            >
              Contact
            </div>
            <h1
              class="text-4xl sm:text-5xl font-bold text-foreground dark:text-white leading-tight"
            >
              Discutons de votre projet
            </h1>
            <p
              class="text-lg text-foreground/70 dark:text-white/70 leading-relaxed"
            >
              Envie de collaborer ? N'hésitez pas à me contacter pour échanger
              sur vos besoins.
            </p>
          </div>

          <div class="space-y-4">
            <div
              class="flex items-center gap-4 p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-foreground/10 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div class="p-3 rounded-lg bg-primary/10">
                <Mail :size="22" class="text-primary" />
              </div>
              <div>
                <p
                  class="text-xs font-medium text-foreground/50 dark:text-white/50 uppercase tracking-wide mb-1"
                >
                  Email
                </p>
                <a
                  href="mailto:nicolasdeza@hotmail.be"
                  class="text-foreground dark:text-white font-medium hover:text-primary transition"
                >
                  nicolasdeza@hotmail.be
                </a>
              </div>
            </div>

            <div
              class="flex items-center gap-4 p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-foreground/10 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div class="p-3 rounded-lg bg-primary/10">
                <MapPin :size="22" class="text-primary" />
              </div>
              <div>
                <p
                  class="text-xs font-medium text-foreground/50 dark:text-white/50 uppercase tracking-wide mb-1"
                >
                  Localisation
                </p>
                <p class="text-foreground dark:text-white font-medium">
                  Belgique
                </p>
              </div>
            </div>

            <div class="pt-2">
              <p
                class="text-sm font-medium text-foreground/50 dark:text-white/50 mb-3"
              >
                Retrouvez-moi sur
              </p>
              <div class="flex flex-wrap gap-2">
                <a
                  href="https://www.linkedin.com/in/nicolas-deza-411711330/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-4 py-2 rounded-lg bg-foreground/5 dark:bg-white/5 text-foreground dark:text-white hover:bg-primary dark:hover:bg-primary hover:text-white text-sm font-medium transition"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/NicolasDeza"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-4 py-2 rounded-lg bg-foreground/5 dark:bg-white/5 text-foreground dark:text-white hover:bg-primary dark:hover:bg-primary hover:text-white text-sm font-medium transition"
                >
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/nicolas__deza/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-4 py-2 rounded-lg bg-foreground/5 dark:bg-white/5 text-foreground dark:text-white hover:bg-primary dark:hover:bg-primary hover:text-white text-sm font-medium transition"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Colonne droite : Formulaire -->
        <form
          class="p-8 rounded-2xl bg-white dark:bg-slate-900/50 border border-foreground/10 dark:border-white/10 shadow-xl space-y-6"
          @submit.prevent="submit"
        >
          <div
            v-if="errors.global"
            role="alert"
            aria-live="polite"
            class="p-4 rounded-lg bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-sm"
          >
            {{ errors.global }}
          </div>

          <div class="space-y-2">
            <label
              for="name"
              class="block text-sm font-semibold text-foreground dark:text-white"
            >
              Nom complet
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="John Doe"
              required
              :aria-invalid="!!errors.name"
              :aria-describedby="errors.name ? 'name-error' : undefined"
              class="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border-2 transition-colors text-foreground dark:text-white placeholder:text-foreground/50 dark:placeholder:text-white/50 outline-none focus-visible:border-primary"
              :class="
                errors.name
                  ? 'border-red-500'
                  : 'border-transparent focus-visible:border-primary'
              "
            >
            <p
              v-if="errors.name"
              id="name-error"
              class="text-xs text-red-500"
              role="alert"
            >
              {{ errors.name }}
            </p>
          </div>

          <div class="space-y-2">
            <label
              for="email"
              class="block text-sm font-semibold text-foreground dark:text-white"
            >
              Email
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="john@exemple.com"
              required
              :aria-invalid="!!errors.email"
              :aria-describedby="errors.email ? 'email-error' : undefined"
              class="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border-2 transition-colors text-foreground dark:text-white placeholder:text-foreground/50 dark:placeholder:text-white/50 outline-none focus-visible:border-primary"
              :class="
                errors.email
                  ? 'border-red-500'
                  : 'border-transparent focus-visible:border-primary'
              "
            >
            <p
              v-if="errors.email"
              id="email-error"
              class="text-xs text-red-500"
              role="alert"
            >
              {{ errors.email }}
            </p>
          </div>

          <div class="space-y-2">
            <label
              for="message"
              class="block text-sm font-semibold text-foreground dark:text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              placeholder="Décrivez votre projet..."
              required
              :aria-invalid="!!errors.message"
              :aria-describedby="errors.message ? 'message-error' : undefined"
              class="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border-2 resize-none transition-colors text-foreground dark:text-white placeholder:text-foreground/50 dark:placeholder:text-white/50 outline-none focus-visible:border-primary"
              :class="
                errors.message
                  ? 'border-red-500'
                  : 'border-transparent focus-visible:border-primary'
              "
            />
            <p
              v-if="errors.message"
              id="message-error"
              class="text-xs text-red-500"
              role="alert"
            >
              {{ errors.message }}
            </p>
          </div>

          <!-- Turnstile widget (rendu forcé manuellement) -->
          <div id="cf-turnstile-container" class="mb-4" />

          <div
            class="flex items-center justify-center gap-2 text-xs text-foreground/50 dark:text-white/50 mb-2"
          >
            <ShieldCheck :size="14" class="text-primary" />
            <span>Formulaire protégé contre le spam</span>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full px-6 py-3.5 rounded-lg bg-primary hover:bg-primary-hover text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
          >
            <span>
              {{ loading ? "Envoi en cours..." : "Envoyer le message" }}
            </span>
            <Send v-if="!loading" :size="18" />
          </button>

          <p
            v-if="success"
            role="status"
            aria-live="polite"
            class="p-4 rounded-lg bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-green-600 dark:text-green-400 text-sm text-center font-medium"
          >
            ✓ Message envoyé avec succès !
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
