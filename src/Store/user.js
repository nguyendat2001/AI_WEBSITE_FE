import { defineStore } from 'pinia'

import AuthService from "@/services/auth.service";

export const useUserStore = defineStore(
    "user", {
        state: () => ({
            user: {},
        }),

        actions: {
            async signUp(data) {
                const res = await AuthService.signup(data);
                console.log(res.json())
                    // this.user = user;
            },
            async signIn(username, password) {
                const res = await AuthService.signin({ username, password });
                this.user = await res;
                await localStorage.setItem("user", JSON.stringify(res));
                // console.log("login info!!");
                // console.log(res);
                // this.$router.push({
                //     name: "Dashboard",
                // });
            },
        },
    });