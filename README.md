# workshop-registration-form
Community Digital Skills Workshop registration form with JavaScript fee calculation, discount rules and input validation (HTML, CSS, JS).

# Community Digital Skills Workshop Registration

A small registration page for a community centre in Kampala. Participants enter their name, age and a workshop, and JavaScript shows the registration fee on the page without reloading it.

Coursework: BDA2202 / DDA2206, CAT 1, Question 1
Student number: 244-012 (last digit 2, so a 10% discount applies to participants aged 18 and above)

## Features

- Registration form with labelled name and age fields, a workshop selector and a submit button
- Fee calculated in the browser with vanilla JavaScript, with no page reload
- Validation for a missing name, an invalid age and an unrecognised workshop code
- Clear on-page success and error messages (no `alert()` boxes)

## Workshops and fees

| Code | Workshop | Base fee (UGX) |
|------|----------|----------------|
| WEB | Web Design | 40,000 |
| DIG | Digital Literacy | 25,000 |

## Discount rule

- Participants aged 18 or above get a 10% discount.
- Participants under 18 pay the full fee.
- An unrecognised workshop code shows an error and never produces a zero-fee registration.

## Project structure

workshop-registration/
├── index.html   # form markup
├── style.css    # .registration-card layout and result/error styles
├── script.js    # validation and fee calculation
└── README.md


## Test cases

| Test | Inputs | Expected result |
|------|--------|-----------------|
| Valid, discounted | Age 20, WEB | UGX 36,000 (10% discount applied) |
| Valid, discounted | Age 20, DIG | UGX 22,500 (10% discount applied) |
| Under 18 | Age 1, WEB | UGX 40,000 (no discount) |
| Missing name | Empty name, age 20, DIG | Error: please enter the participant's name |
| Invalid workshop | Age 25, no valid code | Error: unrecognised workshop code |

## Technologies

HTML5, CSS3 and vanilla JavaScript.
