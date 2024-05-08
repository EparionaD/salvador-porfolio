export const fetchArticulos = async () => {
  const response = await fetch(
    'https://strapi-production-36d2.up.railway.app/api/articulos?populate=*'
  );

  return response.json();
};

export const fetchArticulo = async (url: string) => {
  const response = await fetch(
    `https://strapi-production-36d2.up.railway.app/api/articulos?filters[slug][$eq]=${url}&populate=*`
  );

  return response.json();
};

export const convertToDate = (data: string) => {
  const dateSubString = data.substring(0, 10);
  const splitDate = dateSubString.split('-');
  const finalDate = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
  return finalDate;
};

export const convertToHour = (hour: string) => {
  const hourSubstring = hour.substring(11, 16);
  const finalHour = `${hourSubstring}h`;
  return finalHour;
};
