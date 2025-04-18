export const API_CONFIG = {
  BASE_URL: "https://apii.florify.online/api/v1",
  getToken: (): string | null => localStorage.getItem("login"),
};
