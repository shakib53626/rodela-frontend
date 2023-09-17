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
                    axios.get("http://127.0.0.1:8000/api/categories").then(res=>{
                        // console.log(res.data.result);
                        let cate = res.data.result
                        cate.map((cat)=>{
                            this.categories = cat;
                        })
                    });
                    
                } catch (error) {
                   
                }
            }
        }
})