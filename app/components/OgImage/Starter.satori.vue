<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    description?: string;
    eyebrow?: string;
    domain?: string;
  }>(),
  {
    title: "Nuxt Starter Vitrine",
    description: "Starter Nuxt moderne pour creer un site vitrine propre, rapide et SEO-ready.",
    eyebrow: "Nuxt Starter Vitrine",
    domain: "nuxt-starter-vitrine.vercel.app",
  },
);
</script>

<template>
  <div
    style="
      width: 100%;
      height: 100%;
      display: flex;
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, #04111d 0%, #0b1727 55%, #10233b 100%);
      color: #f8fafc;
      padding: 56px;
      font-family: Inter, Arial, sans-serif;
    "
  >
    <div
      style="
        position: absolute;
        top: -140px;
        left: -120px;
        width: 420px;
        height: 420px;
        border-radius: 9999px;
        background: rgba(0, 220, 130, 0.18);
      "
    />
    <div
      style="
        position: absolute;
        right: -80px;
        bottom: -120px;
        width: 380px;
        height: 380px;
        border-radius: 9999px;
        background: rgba(52, 211, 153, 0.12);
      "
    />

    <div
      style="
        position: relative;
        z-index: 1;
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
      "
    >
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
        "
      >
        <div
          style="
            display: flex;
            align-items: center;
            gap: 16px;
          "
        >
          <div
            style="
              display: flex;
              width: 64px;
              height: 64px;
              align-items: center;
              justify-content: center;
              border-radius: 18px;
              background: rgba(0, 220, 130, 0.12);
              border: 1px solid rgba(110, 231, 183, 0.25);
              color: #00dc82;
              font-size: 28px;
              font-weight: 800;
            "
          >
            N
          </div>
          <div
            style="
              display: flex;
              flex-direction: column;
              gap: 6px;
            "
          >
            <span
              style="
                font-size: 20px;
                font-weight: 700;
                letter-spacing: 0.06em;
                text-transform: uppercase;
                color: #86efac;
              "
            >
              {{ eyebrow }}
            </span>
            <span
              style="
                font-size: 22px;
                color: rgba(248, 250, 252, 0.72);
              "
            >
              {{ domain }}
            </span>
          </div>
        </div>

        <div
          style="
            display: flex;
            align-items: center;
            gap: 10px;
            border-radius: 9999px;
            border: 1px solid rgba(148, 163, 184, 0.22);
            background: rgba(15, 23, 42, 0.35);
            padding: 12px 18px;
            font-size: 18px;
            color: rgba(248, 250, 252, 0.82);
          "
        >
          <span style="color: #00dc82;">SEO</span>
          <span>Tailwind</span>
          <span>Nuxt 4</span>
        </div>
      </div>

      <div
        style="
          display: flex;
          max-width: 900px;
          flex-direction: column;
          gap: 24px;
        "
      >
        <h1
          style="
            margin: 0;
            font-size: 76px;
            font-weight: 800;
            line-height: 1.02;
            letter-spacing: -0.04em;
          "
        >
          {{ title }}
        </h1>

        <p
          v-if="description"
          style="
            margin: 0;
            max-width: 820px;
            font-size: 30px;
            line-height: 1.35;
            color: rgba(226, 232, 240, 0.82);
          "
        >
          {{ description }}
        </p>
      </div>

      <div
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          border-top: 1px solid rgba(148, 163, 184, 0.2);
          padding-top: 24px;
        "
      >
        <span
          style="
            font-size: 22px;
            color: rgba(226, 232, 240, 0.82);
          "
        >
          Base moderne pour sites vitrines performants
        </span>
        <span
          style="
            font-size: 20px;
            font-weight: 700;
            color: #00dc82;
          "
        >
          nuxt-og-image
        </span>
      </div>
    </div>
  </div>
</template>
