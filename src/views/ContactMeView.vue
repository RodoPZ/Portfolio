<script setup lang="ts">
import BannerComponent from "@/components/BannerComponent.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <div class="form">
    <BannerComponent :text="t('landing.contact_me.title')" />
    <p class="form__text">
      {{ t("landing.contact_me.description") }}
    </p>
    <div class="form__section">
      <label for="nameInput">
        {{ t("landing.contact_me.form.name") }}
      </label>
      <input
        class="form__input"
        type="text"
        :placeholder="t('landing.contact_me.form.name')"
        name="name"
        id="nameInput"
      />
    </div>
    <div class="form__section">
      <label for="emailInput">
        {{ t("landing.contact_me.form.email") }}
      </label>
      <input
        class="form__input"
        type="email"
        name="email"
        id="emailInput"
        :placeholder="t('landing.contact_me.form.email')"
      />
    </div>
    <div class="form__section">
      <label for="SubjectInput">
        {{ t("landing.contact_me.form.subject") }}
      </label>
      <input
        class="form__input"
        type="text"
        name="subject"
        id="SubjectInput"
        :placeholder="t('landing.contact_me.form.subject_placeholder')"
      />
    </div>
    <div class="form__section">
      <label for="textInput">
        {{ t("landing.contact_me.form.message") }}
      </label>
      <textarea
        class="form__textArea"
        name="text"
        :placeholder="t('landing.contact_me.form.message_placeholder')"
        id="textInput"
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <button class="form__button" type="submit">
      {{ t("landing.buttons.send") }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.form {
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  &__text {
    text-align: justify;
    margin: 0px;
  }
  &__section {
    display: flex;
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
