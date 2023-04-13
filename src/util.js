export const mod = (x, y) => ((x % y) + y) % y;

export const makeContentUrl = (pathSuffix) => {
  const publicUrl = process.env.PUBLIC_URL;

  const pathPrefix = publicUrl ? publicUrl + "/content/" : "content/";

  return pathPrefix + pathSuffix;
};
