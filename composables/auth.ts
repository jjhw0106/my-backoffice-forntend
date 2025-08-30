const authToken = ref(null);

export const useAuthToken = () => {
    watchEffect(() => {
        if(authToken.value) {
            localStorage.setItem("authToken", authToken.value);
        } else {
            localStorage.removeItem("authToken");
        }
    })

    return {
        authToken,
        setAuthToken: (token: string) => {
            // authToken.value = token;
        },
        clearAuthToken: () => {
            authToken.value = null;
        }
    }
}

