<script setup lang="ts">
import InputText from "@/components/heroSection/documentTitleComponent.vue";
import buttonComponent from "@/components/ButtonComponent.vue";
</script>

<template>
  <div class="hero">
    <div class="heroContainer heroContainer__left">
      <p class="Ps-M hero__tag">&lt;html lang=</p>
      <p class="Ps-M hero__tag langBtn">"en"</p>
      <p class="Ps-M hero__tag">></p>
    </div>
    <p class="Ps-M hero__tag" style="margin-left: 8px">&lt;head></p>
    <div class="heroContainer heroContainer__left">
      <p class="Ps-M hero__tag" style="margin-left: 16px">&lt;title></p>
      <InputText />
      <p class="Ps-M hero__tag">&lt;/title></p>
    </div>

    <p class="Ps-M hero__tag" style="margin-left: 8px">&lt;/head></p>
    <p class="Ps-M hero__tag" style="margin-left: 8px">&lt;body></p>
    <p class="Ps-M hero__tag" style="margin-left: 16px">&lt;H1></p>
    <div class="heroContainer">
      <h1 class="H1-M hero__title">Rodolfo Pinedo</h1>
      <p class="Ps-M hero__tag">&lt;/H1></p>
    </div>
    <p class="Ps-M hero__tag" style="margin-left: 16px">&lt;H2></p>
    <div class="heroContainer">
      <h2 class="H2-M hero__subtitle">Frontend Developer</h2>
      <p class="Ps-M hero__tag">&lt;/H2></p>
    </div>

    <p class="Ps-M hero__tag" style="margin-left: 16px">&lt;p></p>
    <div class="heroContainer">
      <p class="Ps-M hero__text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius harum
        doloribus explicabo ratione incidunt expedita veniam, modi voluptates
        fugit nemo nihil et sunt, sit pariatur dolores qui eveniet blanditiis
        voluptas.
      </p>
      <p class="Ps-M hero__tag">&lt;/p></p>
    </div>

    <p class="Ps-M hero__tag" style="margin-left: 16px">&lt;button></p>
    <buttonComponent />
    <p class="Ps-M hero__tag" style="margin-left: 16px">&lt;/button></p>
    <p class="Ps-M hero__tag" style="margin-left: 8px">&lt;/body></p>
    <p class="Ps-M hero__tag">&lt;/html></p>
  </div>
</template>

<style scoped lang="scss">
.hero {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 64px);
  &__tag {
    color: $html-closing-tag;
    margin: 0;
    font-size: 1rem;
  }
  &__title {
    text-align: center;
    color: $primary-dark;
    font-size: 38px;
    margin: 0;
  }
  &__subtitle {
    text-align: center;
    color: $secondary-dark;
    font-size: 30px;
    margin: 0;
  }
  &__text {
    text-align: justify;
    margin: 0;
  }
}
.heroContainer {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  &__left {
    justify-content: flex-start;
  }
}
.langBtn {
  color: $primary-dark;
}
.portfolioBtn {
  color: $background-light;
}
</style>
