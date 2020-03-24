export const setAuthToken = token => {
  localStorage.setItem('meup_token', token);
};

export const getAuthToken = () => {
  return localStorage.getItem('meup_token');
};

export const isAuthenticated = () => {
  return !!getAuthToken();
};
