const apiBaseUrl = `${window.location.protocol}//${window.location.hostname}:8000`;

const apiEndpoints = {
  postReport: `${apiBaseUrl}/report/form`,
  postImage: `${apiBaseUrl}/report/form/image`,
  postLink: `${apiBaseUrl}/report/link`,
  getDashboard: `${apiBaseUrl}/dashboard`,
  getDashboardLogout: `${apiBaseUrl}/dashboard/logout`,
  postLogin: `${apiBaseUrl}/dashboard/login`,
  downloadImage: `${apiBaseUrl}/dashboard/download`,
};

export default apiEndpoints;
