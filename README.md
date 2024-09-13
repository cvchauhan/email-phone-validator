# email-phone-validator
A simple module to validate an e-mail address and phone


## Installation
Install via NPM:

```bash
npm install email-phone-validator

```


## Usage

#### javascript

```javascript
// Load the package 
const { isValidEmail, isValidPhoneNumber } = require('email-phone-validator');

// Example usage 
const email = 'test@example.com'; 
const phoneNumber = '+123-456-7890';

isValidEmail(email); // true
isValidPhoneNumber(phoneNumber); // true

```

#### TypeScript

```typescript

import { isValidEmail, isValidPhoneNumber } from 'email-phone-validator';

isValidEmail(email); // true
isValidPhoneNumber(phoneNumber); // true


```

## Contribute

Contributions welcome! Check the ``LICENSE`` file for more info.

## Meta

* chiragvchauhan93@gmail.com

Distributed under the unlicense public domain. See ``LICENSE`` for more information.

[https://github.com/cvchauhan/email-phone-validator](https://github.com/cvchauhan/email-phone-validator)
