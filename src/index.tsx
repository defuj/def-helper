export const slugify = (str : String) : String =>
  str
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