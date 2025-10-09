export const getInstalledApps = () => {
  const data = localStorage.getItem('installedApps');
  return data ? JSON.parse(data) : [];
};

export const saveInstalledApps = apps => {
  localStorage.setItem('installedApps', JSON.stringify(apps));
};
