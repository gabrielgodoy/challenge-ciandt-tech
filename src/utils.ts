export const capitalize = (name?: string) => {
  if (!name) {
    return null;
  }
  return name.charAt(0).toUpperCase() + name.slice(1);
};
