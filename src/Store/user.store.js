import { defineStore } from 'pinia';

export const userAccStore = defineStore('accountId', {
  state: () => ({
    user:{},
  }),
  
  persist: {
    enabled: true,
    strategies: [], 
  },
});
