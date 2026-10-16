# Assignment #4. Forms and Validation

**Name:** Sailau Ramazan
**Group:** SE - 2539

**Project files:**
- `index.html` – the website with all tasks (one below another)
- `style.css` – my own styles
- `script.js` – validation code 

**How to run:** open `index.html` in a browser (internet is needed for the Bootstrap CDN).

---

## Part 1. Basic HTML Forms

### Task 0. Simple Contact Form
Create a basic contact form with Name (text), Email (email), Message (textarea) and a Submit button. All fields must have `<label>` elements.

I used `<label for="...">` connected with the `id` of every input.

<img width="1065" height="613" alt="image" src="https://github.com/user-attachments/assets/18424e30-db2f-4781-8751-9840978ff61a" />


### Task 1. Form with HTML5 Validation
Add built-in validation attributes (`required`, `type`, `maxlength`, etc.) and test how the browser enforces them.

I added `required`, `type="email"`, `minlength` and `maxlength`. Tests:

| Test | Result |
|------|--------|
| Empty fields | "Please fill out this field" |
| Email `abc` | "Please include an '@' in the email address" |
| Name with 1 letter | "Please lengthen this text to 2 characters or more" |
| Message longer than 200 chars | Browser does not allow more text |

<img width="1345" height="583" alt="image" src="https://github.com/user-attachments/assets/4e34bf73-c596-4bb8-94df-908b2da2a047" />


---

## Part 2. Bootstrap Forms

### Task 2. Bootstrap Form Styling
Recreate the contact form with Bootstrap form classes, use the grid system, add placeholders and helper text.

I used `form-label`, `form-control`, `form-text`, and `row` / `col-md-6` for the grid.

<img width="1677" height="617" alt="image" src="https://github.com/user-attachments/assets/80a9d938-efc5-442d-8540-6c27387b0445" />


### Task 3. Bootstrap Validation Styles
Apply `is-valid` / `is-invalid`, show feedback messages under inputs, test with valid and invalid data.

I used `valid-feedback` and `invalid-feedback` blocks. JavaScript checks every field with `checkValidity()` and adds the classes.

Invalid data:

<img width="1113" height="545" alt="image" src="https://github.com/user-attachments/assets/88ecddd5-08b3-469f-b52c-c0ef8d3bec2f" />


Valid data:

<img width="1117" height="408" alt="image" src="https://github.com/user-attachments/assets/ea1bfd3c-165e-434f-aa00-68e7b9567dc6" />


---

## Part 3. Advanced Form Project

### Task 4. Registration Form
Registration form with First Name, Last Name, Email, Password + Confirm Password, Gender (radio), Hobbies (checkboxes), Country (select), Submit and Reset. Bootstrap grid, HTML5 validation and Bootstrap feedback.

- Grid: `row` and `col-md-6` (fields go in one column on phones).
- HTML5 validation: `required`, `minlength="8"` for password, `type="email"`.
- Confirm password is checked with `setCustomValidity()`.
- Gender is checked with JavaScript (one radio must be selected).
- Reset button removes green/red borders.

Errors:

<img width="1087" height="612" alt="image" src="https://github.com/user-attachments/assets/7a6c2dff-5f6f-4e85-baa0-f17429430607" />


Success:

<img width="1090" height="638" alt="image" src="https://github.com/user-attachments/assets/60e4bde4-51f6-4a49-92d0-7f9055288f61" />


Mobile view:

<img width="325" height="547" alt="image" src="https://github.com/user-attachments/assets/c9a20935-4a33-46fb-8a15-e3ca9c7e4ab1" />


---

## Summary of my work
First I read the assignment and made the basic HTML forms with labels. Then I added HTML5 validation attributes and tested them in the browser. After that I connected Bootstrap and rebuilt the form with the grid, placeholders and helper text. Then I added Bootstrap validation classes with JavaScript. At the end I made the registration form with all required fields and checked it on desktop and phone sizes. Difficult part: checking password match and radio buttons, I solved it with `setCustomValidity()` and a small JavaScript function.
