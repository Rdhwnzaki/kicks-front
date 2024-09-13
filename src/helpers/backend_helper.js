import { APIClient } from "./api_helper";

const api = new APIClient();
export const getLoggedInUser = () => {
    const user = sessionStorage.getItem("user");
    if (user) return JSON.parse(user);
    return null;
};

export const isUserAuthenticated = () => {
    return getLoggedInUser() !== null;
};


export const postRegister = (data) => api.post(`/auth/register`, data);
export const postLogin = (data) => api.post(`/auth/login`, data);

export const getOneProductApi = (id) => api.getOne("/products", id);
export const getProductApi = (data) => api.get("/products/all", data);
export const addNewProductApi = (data) => api.post("/products", data);
export const approveProductApi = (data) => api.put("/products", data);
export const updateProductApi = (data) => api.patch("/products", data);
export const deleteProductApi = (data) => api.delete("/products", data);

export const getOneCartApi = (id) => api.getOne("/cart/user", id);
export const getCartApi = (data) => api.get("/cart", data);
export const addNewCartApi = (data) => api.post("/cart/add", data);
export const approveCartApi = (data) => api.put("/cart", data);
export const updateCartApi = (data) => api.patch("/cart", data);
export const deleteCartApi = (data) => api.delete("/cart", data);
