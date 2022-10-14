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

export const imageUrlToBase64 = async (url : String, errorImageUrl : String = 'https://img.kpopmap.com/2018/07/mbc-rebel.jpg', callback : any) => {
  const axios = require('axios');
  await axios.get(url, {
      responseType: 'arraybuffer',
      headers: {
          'Access-Control-Allow-Origin': '*',
      },
  })
  .then((response:any) => {
      let raw = Buffer.from(response.data).toString('base64');
      let base64 = `data:${response.headers["content-type"]};base64,${raw}`;
      callback(base64);
  })
  .catch(() => callback(errorImageUrl));
}

export const passwordIsStrong = (password : String) => {
  var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
  return strongRegex.test(password.toString());
}

export const checkStrongPassword = (password : String) => {
  let array : Boolean[] = [];
  array[0] = password.match(/[A-Z]/) ? true : false;
  array[1] = password.match(/[a-z]/) ? true : false;
  array[2] = password.match(/\d/) ? true : false;
  array[3] = password.match(/[!_.-]/) ? true : false;

let sum = 0;
for (let i=0; i<array.length; i++) {
    sum += array[i] ? 1 : 0;
}

switch (sum) {
    case 0: return "weird";
    case 1: return "weak";
    case 2: return "ok";
    case 3: return "strong";
    case 4: return "awesome";
    default: return "weird";
}
}
