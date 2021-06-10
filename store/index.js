export const state = () => ({
    selectedCategories: [],
    treeCategories: []
})
// Getters
export const getters = {
    selectedCategories(state) {
        return state.selectedCategories
    },
    treeCategories(state) {
        return state.treeCategories
    }
}
// Mutations 
export const mutations = {
    SET_SELECTEDCATEGORIES(state, selectedCategories) {
        state.selectedCategories = selectedCategories
    },
    SET_TREE_CATEGORIES(state, treeCategories) {
        state.treeCategories = treeCategories
    }
}
// Actions
export const actions = {
    async nuxtServerInit({ commit }, { app }) {
        let selectedCategoryResponse = await app.$axios.$get('category?selects=food')
        let treeCategoryResponse = await app.$axios.$get('category')

        commit('SET_SELECTEDCATEGORIES', selectedCategoryResponse.data)
        commit('SET_TREE_CATEGORIES', treeCategoryResponse.data)
        return selectedCategoryResponse
    }
}