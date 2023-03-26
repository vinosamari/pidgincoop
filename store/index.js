export const state = () => ({
  translations: [],
});

export const getters = {
  getRandomUnansweredQuestion(state) {
    if (state.translations.length === 0) {
      return null; // or whatever value you want to return in case of an empty array
    }

    let unanswered = state.translations.filter((trans) => {
      return trans.answer == "";
    });
    let randomIndex = Math.floor(Math.random() * unanswered.length);
    return unanswered[randomIndex]["question"];
  },
};

export const mutations = {
  ADD_TRANSLATION_TO_STATE: (state, translation) => {
    state.translations.push(translation);
  },
  SET_TRANSLATIONS_LIST: (state, list) => {
    state.translations = list;
  },
};
export const actions = {
  async getDbTranslations(ctx) {
    let url =
      "https://eastus2.azure.data.mongodb-api.com/app/pidginhole-dgvxm/endpoint/get_questions";
    let resp = await $nuxt.$axios(url);
    let resList = resp.data;
    resList.forEach((item) => {
      addToLocalStorage("localStorageTranslations", item);
      ctx.commit("ADD_TRANSLATION_TO_STATE", item);
    });
  },
};
function addToLocalStorage(arr, item) {
  // Get existing array from localStorage or create a new empty array
  const existingArray = JSON.parse(localStorage.getItem(arr)) || [];
  console.log(existingArray);
  // Push new item to the array
  existingArray.push(item);

  // Set updated array back to localStorage
  localStorage.setItem(arr, JSON.stringify(existingArray));
}
