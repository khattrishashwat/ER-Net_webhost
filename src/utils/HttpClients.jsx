// import axios from "axios";
// import { toast } from "react-toastify";
// import Swal from "sweetalert2";

// const httpClient = axios.create({
//   baseURL: "",
//   // timeout: 20000,
// });

// httpClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }

//     config.metadata = { startTime: new Date() };

//     return config;
//   },
//   (error) => {
//     console.error("Request error:", error);
//     return Promise.reject(error);
//   }
// );

// httpClient.interceptors.response.use(
//   (response) => {
//     const endTime = new Date();
//     const startTime = response.config.metadata.startTime;
//     const responseTime = endTime - startTime;

//     console.log(`API ${response.config.url} took ${responseTime}ms`);

//     if (response.data?.message) {
//       toast.success(response.data.message, {
//         autoClose: 3000,
//         position: "top-right",
//       });
//     }

//     return response;
//   },
//   (error) => {
//     const status = error?.response?.status;
//     const errorMessage = error?.response?.data?.message || "An error occurred";
//     const originalRequest = error.config;

//     console.error("API Error:", {
//       status,
//       message: errorMessage,
//       url: originalRequest?.url,
//       method: originalRequest?.method,
//     });

//     switch (status) {
//       case 401:
//         if (!originalRequest?._retry) {
//           originalRequest._retry = true;

//           Swal.fire({
//             title: "Session Expired",
//             text: "Your session has expired. Please log in again.",
//             icon: "warning",
//             confirmButtonText: "OK",
//             allowOutsideClick: false,
//           }).then(() => {
//             localStorage.clear();
//             window.location.href = "/authentication/login";
//           });
//         }
//         break;

//       case 403:
//         toast.error("Access Denied: " + errorMessage, {
//           autoClose: 5000,
//           position: "top-right",
//         });
//         break;

//       case 404:
//         toast.warn("Resource Not Found: " + errorMessage, {
//           position: "top-right",
//         });
//         break;

//       case 429:
//         toast.warn("Too Many Requests: Please wait before trying again", {
//           position: "top-right",
//         });
//         break;

//       case 500:
//         toast.error("Server Error: " + errorMessage, {
//           position: "top-right",
//         });
//         break;

//       default:
//         if (error.code === "ECONNABORTED") {
//           toast.error("Request timeout. Please try again.", {
//             position: "top-right",
//           });
//         } else if (error.message === "Network Error") {
//           toast.error("Network error. Please check your connection.", {
//             position: "top-right",
//           });
//         } else {
//           toast.error(errorMessage, {
//             position: "top-right",
//           });
//         }
//     }

//     return Promise.reject(error);
//   }
// );

// httpClient.defaults.onUploadProgress = (progressEvent) => {
//   const percentCompleted = Math.round(
//     (progressEvent.loaded * 100) / progressEvent.total
//   );
//   console.log(`Upload progress: ${percentCompleted}%`);
// };

// httpClient.CancelToken = axios.CancelToken;
// httpClient.isCancel = axios.isCancel;

// export default httpClient;
