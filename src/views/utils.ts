import i18n from "@/plugins/i18n";
import { LANGUAGES } from "@/models/languages.model";

export function downloadResume() {
  // if  i18n.global.locale.value === "es" then go to the spanish resume
  // else go to the english resume
  const Esp = "1aFqOlkZd7NWRdQxCVgBmezFkiHt43AH2";
  const Eng = "1rDCtdbiSRMxAAeqGSDDnPjE14nsiudEu";
  let usedLanguage = Esp;

  if (i18n.global.locale.value === LANGUAGES.EN) {
    usedLanguage = Eng;
  } else {
    usedLanguage = Esp;
  }

  // on click go to another web page
  window.location.href = `https://drive.google.com/file/d/${usedLanguage}/view?usp=sharing`;
}
