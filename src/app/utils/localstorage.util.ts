export function getApiReport() {
  return localStorage.getItem('apiUrl-report');
}

export function setApieport(api: string) {
  localStorage.setItem('apiUrl-report', api);
}
