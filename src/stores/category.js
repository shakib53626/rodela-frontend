import { defineStore } from "pinia";
import axios from "axios";

export const useCategory = defineStore("category", {
    state: () =>({
        categories : {},
        loading : false
    }),

        actions: {
            async getData(){
                try {
                    const response = await axios.get('/categories', {
                      params: {
                        limit: 10
                      }
                    })
                    this.categories = response.data.result
                  } catch (error) {
                    console.error(error)
                  } finally {
                    // isPreloader.value = false
                  }
            }
        }
})