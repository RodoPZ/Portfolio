<script setup lang="ts">
defineProps(["title", "placeholder", "name", "onchange"]);
</script>

<template>
  <div class="form__section">
    <label for="nameInput"> {{ title }} </label>
    <input
      class="form__input"
      type="text"
      :placeholder="placeholder"
      :name="name"
      @input="onchange"
      id="nameInput"
    />
  </div>
</template>

<style scoped lang="scss">
.form {
  &__section {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  &__input {
    color: $body-color;
    box-sizing: border-box;
    height: 36px;
    background: $background-black-1;
    border: 2px solid $background-light;
    border-radius: 4px;
    width: 100%;
    &::placeholder {
      color: $background-light-1;
    }
    &:focus {
      outline: 3px solid $primary-dark;
    }
  }
}
</style>
