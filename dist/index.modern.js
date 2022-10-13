var slugify = function slugify(str) {
  return str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
};
var validateEmail = function validateEmail(email) {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return email.match(validRegex);
};
var validatePhone = function validatePhone(phone) {
  var validRegex = /^[0-9]*$/;
  var validRegex2 = /^\+[0-9]*$/;
  return phone.match(validRegex) || phone.match(validRegex2);
};

export { slugify, validateEmail, validatePhone };
//# sourceMappingURL=index.modern.js.map
