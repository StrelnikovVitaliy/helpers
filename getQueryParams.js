//get params from location
export const getQueryParams = query => {
  return query
    ? (/^[?#]/.test(query) ? query.slice(1) : query)
      .split('&')
      .reduce((params, param) => {

          const indexOfSeparator = param.indexOf('=');
          const key = param.slice(0, indexOfSeparator);
          const value = param.slice(indexOfSeparator + 1);

          params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
          return params;
        }, {},
      )
    : {};
};

