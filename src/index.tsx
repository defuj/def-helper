export const slugify = (str : String) : String => str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const validateEmail = (email : String) => {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return email.match(validRegex);
}

export const validatePhone = (phone : String) : any => {
  var validRegex = /^[0-9]*$/; // without +
  var validRegex2 = /^\+[0-9]*$/; // with +
  return phone.match(validRegex) || phone.match(validRegex2);
}

export const getNumberInFirstString = (str : String) : String => {
  return str.replace(/(^\d+)(.+$)/i,'$1');
}

export const validateURL = (str : string) => {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}
