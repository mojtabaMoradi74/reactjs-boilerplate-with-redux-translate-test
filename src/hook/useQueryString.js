import { useLocation, useParams, useHistory } from "react-router-dom";

function isNumeric(value) {
  return /^-?\d+$/.test(value);
}

const useQueryString = (props) => {
  // const location = window.location;
  let queryStrings = {};
  if (props?.default) queryStrings = { ...queryStrings, ...props.default }
  const location = useLocation();
  function decode(s) {
    let pl = /\+/g;
    return decodeURIComponent(s.replace(pl, " "));
  }
  (window.onpopstate = function () {
    let search = /([^&=]+)=?([^&]*)/g,
      match,
      query = location.search.substring(1);
    queryStrings = { ...queryStrings };
    while ((match = search.exec(query))) {
      // console.log({ query, match });
      // exec: search.exec(query),
      queryStrings[decode(match[1])] = decode(match[2]);
    }
  })();

  // console.log({ queryStrings });

  return { ...queryStrings };
};

export default useQueryString;
