const apiBaseUrl = "http://localhost:8000";
// const apiBaseUrl = "141.45.146.238"; // either localhost or server IP

const apiEndpoints = {
  postReport: `${apiBaseUrl}/report/form`,
  postImage: `${apiBaseUrl}/report/form/image`,
  postLink: `${apiBaseUrl}/report/link`,
  getDashboard: `${apiBaseUrl}/dashboard`,
  getDashboardLogout: `${apiBaseUrl}/dashboard/logout`,
  postLogin: `${apiBaseUrl}/dashboard/login`,
};

export default apiEndpoints;
