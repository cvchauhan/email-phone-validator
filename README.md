Email and Phone Validator
A simple NPM package for validating email addresses and phone numbers. This package provides straightforward functions to check if a given email or phone number adheres to common validation rules.

Installation
To install the package, use npm:

**npm install email-phone-validator**

Usage 
Email Validation:
import { isValidEmail } from 'email-phone-validator';
const email = 'test@example.com';
console.log(isValidEmail(email)); // true or false

Phone Number Validation

import { isValidPhoneNumber } from 'email-phone-validator';

const phoneNumber = '+123-456-7890';
console.log(isValidPhoneNumber(phoneNumber)); // true or false
isValidEmail(email: string): boolean
Validates if the provided string is a valid email address.

Parameters:

email (string): The email address to validate.
Returns:

boolean: true if the email is valid, otherwise false.
isValidPhoneNumber(phoneNumber: string): boolean
Validates if the provided string is a valid phone number.

Parameters:

phoneNumber (string): The phone number to validate.
Returns:

boolean: true if the phone number is valid, otherwise false.
Running Tests

To run tests, make sure you have Jest installed and run:
**npm test**
Contributing
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Inspired by various open-source projects and validation libraries.
Feel free to customize this template with additional information specific to your package or project. This README.md will help users understand how to use your package and contribute to it effectively.
