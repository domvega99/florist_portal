export const API_CONFIG = {
  BASE_URL: "https://apii.florify.online/api/v1",
  IMAGE_BASE_URL: "https://dev-florists.flowershops.network/uploads",
  getToken: (): string | null => localStorage.getItem("login"),
};
