---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: 'text-center'
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
css: unocss
---

# My Leadership Journey
A Global Perspective

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: two-cols
---

# Personal Snapshot

<v-clicks>

- 🌍 48 years of wisdom
- 👨‍👧‍👦 Proud parent of 5 children
- 🗣 4 languages spoken, 5 understood
- 🌎 Lived in 7 countries
- 🌏 Experience across 4 continents
- 👥 Leading a team of 18 (8 direct reports)

</v-clicks>

::right::

<div class="ml-4">
  <div class="mt-12">
    <img src="https://source.unsplash.com/random/800x600/?global" class="rounded-lg shadow-xl"/>
  </div>
</div>

---
layout: center
---

# Global Footprint
<div class="grid grid-cols-2 gap-4 mt-4">
<div class="text-left">
<v-clicks>

## Professional Reach
- 4 continents traversed
- 5 countries of operation
- Team of 18 professionals
- UNESCO global missions

## Cultural Immersion
- 7 countries called home
- 4 languages mastered
- 5 languages comprehended
- Rich cross-cultural experience

</v-clicks>
</div>
<div class="flex items-center justify-center">
<img src="https://source.unsplash.com/random/600x400/?world-map" class="rounded-lg shadow-xl"/>
</div>
</div>

---
layout: default
---

# Professional Timeline

<v-clicks>

<div class="timeline-container">
<div class="timeline">

- 🌟 2002: First contract with UNESCO (November)
- 🎯 2003: Joined UNESCO (April)
- 🌍 2014: Mali (July 2014 - January 2015)
- 🏔 2018: Kabul (May 2018 - June 2021)
- 🗼 2021: Paris (July 2021 - July 2022)
- 🌴 2022: Brasilia (August 2022 - July 2024)
- 🕌 2024: Baghdad (since August 2024)

</div>
</div>

</v-clicks>

<style>
.timeline-container {
  padding: 20px;
}
.timeline {
  border-left: 2px solid #3b82f6;
  padding-left: 20px;
}
.timeline li {
  margin: 20px 0;
  position: relative;
}
.timeline li::before {
  content: '';
  width: 12px;
  height: 12px;
  background: #3b82f6;
  border-radius: 50%;
  position: absolute;
  left: -27px;
  top: 5px;
}
</style>

---
layout: center
---

# Personal Interests

<div class="grid grid-cols-2 gap-8 mt-8">
<div v-click class="text-center p-4 bg-opacity-50 bg-white rounded-lg shadow">
  <div class="text-4xl mb-2">💻</div>
  <h3 class="text-xl font-bold">Coding Apps</h3>
  <p>Building digital solutions</p>
</div>

<div v-click class="text-center p-4 bg-opacity-50 bg-white rounded-lg shadow">
  <div class="text-4xl mb-2">🏃‍♂️</div>
  <h3 class="text-xl font-bold">Endurance Sports</h3>
  <p>Pushing boundaries</p>
</div>

<div v-click class="text-center p-4 bg-opacity-50 bg-white rounded-lg shadow">
  <div class="text-4xl mb-2">🧠</div>
  <h3 class="text-xl font-bold">Psychology</h3>
  <p>Understanding human behavior</p>
</div>

<div v-click class="text-center p-4 bg-opacity-50 bg-white rounded-lg shadow">
  <div class="text-4xl mb-2">🔬</div>
  <h3 class="text-xl font-bold">Science</h3>
  <p>Exploring discoveries</p>
</div>
</div>

---
layout: end
---

# Thank You

Journey continues...