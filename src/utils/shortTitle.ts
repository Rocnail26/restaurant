export const shortTitle = (title: string, lenght: number) => {
  if (title.length < lenght) return title;
  return title.slice(0, 16) + "...";
};
