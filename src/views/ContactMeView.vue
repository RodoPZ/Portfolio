<script setup lang="ts"></script>

<template>
  <div class="form">
    <p class="form__text Pr-M">
      Hey there. Thanks for checking out my portfolio. If you have any
      questions, suggestions or want to get in touch, feel free to shoot me an
      email. I'd love to hear from you.
    </p>
    <div class="form__section">
      <label for="nameInput" class="Pr-M">Name</label>
      <input
        class="form__input Pr-M"
        type="text"
        placeholder="Juan Perez"
        name="name"
        id="nameInput"
      />
    </div>
    <div class="form__section">
      <label for="emailInput" class="Pr-M">Mail</label>
      <input
        class="form__input Pr-M"
        type="email"
        name="email"
        id="emailInput"
        placeholder="Juanito@gmail.com"
      />
    </div>
    <div class="form__section">
      <label for="SubjectInput" class="Pr-M">Subject</label>
      <input
        class="form__input Pr-M"
        type="text"
        name="subject"
        id="SubjectInput"
        placeholder="Subject here ...."
      />
    </div>
    <div class="form__section">
      <label for="textInput" class="Pr-M">Text</label>
      <textarea
        class="Pr-M form__textArea"
        name="text"
        placeholder="Your msg here....."
        id="textInput"
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <button class="form__button Pr-M" type="submit">Send</button>
  </div>
</template>

<style scoped lang="scss">
.form {
  display: grid;
  grid-template-rows: auto repeat(3, auto) 3fr 1fr;
  &__text {
    text-align: justify;
  }
  &__section {
    display: flex;
    margin-top: 12px;
    flex-direction: column;
    gap: 4px;
  }
  &__input {
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
  &__textArea {
    box-sizing: border-box;
    height: 32px;
    background: $background-black-1;
    border: 2px solid $background-light;
    border-radius: 4px;
    height: 100%;
    width: 100%;
    &::placeholder {
      color: $background-light-1;
    }
    &:focus {
      outline: 3px solid $primary-dark;
    }
  }
  &__button {
    background-color: transparent;
    margin: 24px auto;
    width: 100%;
    box-sizing: border-box;
    padding: 12px 8px;
    border: 2px solid $background-light;
    border-radius: 4px;
    &:focus {
      border: 2px solid $primary-dark;
      color: $primary-dark;
    }
    &:hover {
      border: 2px solid $primary-dark;
      color: $primary-dark;
    }
  }
}

textarea {
  font-family: inherit;
}
</style>
