import qs from 'query-string';

export default {
  
  isBrowser: () => {
    return !(typeof document === "undefined" || typeof window === "undefined");
  },

  buildURI: (base, params) => {
    return `${base}?${qs.stringify(params)}`;
  }

};