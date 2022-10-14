# def-helper

> A collection of functions and methods to make it easier for you to create applications.

[![NPM](https://img.shields.io/npm/v/def-helper.svg)](https://www.npmjs.com/package/def-helper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save def-helper
```

## Usage

```tsx
import {
  slugify,
  validateEmail,
  validatePhone,
  getNumberInFirstString,
  validateURL,
  imageUrlToBase64
} from 'def-helper'

const slug = slugify('Hello World')
// result will be "hello-world"

const email = validateEmail('user@mail.com')
// result will be true

const phone = validatePhone('08123456789')
// result will be true

const number = getNumberInFirstString('17676-Hello 123 World')
// result will be 17676

const url = validateURL('https://google.com')
// result will be true

// imageUrlToBase64([url image -> convert to base64],[url image if url image target is error], (result base64) => {
//
// })
const base64 = imageUrlToBase64(
  'https://google.com/logo.png',
  'https://img.kpopmap.com/2018/07/mbc-rebel.jpg',
  (base64) => {
    // result will be base64 string
  }
)
```

## License

MIT © [defuj](https://github.com/defuj)

## Contributor

Thanks to all amazing contributors
<br>
<br>
<a href="https://github.com/defuj/def-helper/graphs/contributors">
<img src="https://contrib.rocks/image?repo=defuj/def-helper" />
</a>
