export const formatDate = (date: string | Date, locale = 'en-IN'): string =>
  new Date(date).toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric' });

export const formatTime = (date: string | Date, locale = 'en-IN'): string =>
  new Date(date).toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });

export const calculateAge = (dob: string): number => {
  const today = new Date();
  const birth = new Date(dob);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
};

export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const truncate = (str: string, maxLen: number): string =>
  str.length > maxLen ? `${str.slice(0, maxLen)}…` : str;
