# PLASMID_MAJOR_PROJECT



# Human Verification Form – PLASMID_MAJOR_PROJECT

## Overview

This project is a modern, interactive, and visually appealing **User Verification Form** designed to provide a delightful user experience while ensuring robust validation and human verification. The form is built using HTML, CSS (with Bootstrap), and JavaScript, and showcases several unique features that set it apart from standard registration forms.

---

## Features That Make This Project Unique

### 1. **Striking Diagonal Split Background**
- The form sits on a stylish diagonal background, split between white and black, giving a bold and modern look.

### 2. **Animated Welcome Banner**
- A single-line, glowing, coder-personalized welcome message stretches across the top of the page.
- The message uses a black glow effect on bold text, set on a white background, making it stand out and giving a friendly, personal touch.

### 3. **3D Interactive Form Box**
- The form box features a subtle 3D tilt animation that responds to mouse movement, creating a sense of depth and interactivity.

### 4. **Animated Progress Bar**
- A dynamic progress bar at the top of the form visually tracks the user’s progress as they fill out each field correctly.
- The bar animates smoothly, providing instant feedback and motivation to complete the form.

### 5. **Live Input Feedback and Animations**
- Input fields provide real-time validation feedback.
- Password and confirm password fields animate with color and border effects when they match, enhancing usability.

### 6. **Fun Human Verification Mini-Game**
- Instead of a traditional CAPTCHA, users complete a simple drag-and-drop mini-game (“Drag the circle into the box”) to prove they are human.
- This approach is more engaging and user-friendly than standard verification methods.

### 7. **Thank You Message**
- Upon successful registration, a celebratory “Thank you for registering!” message appears, providing positive feedback and closure.

---

## File Structure & Key Attributes

### `html_form.html`
- **Welcome Banner:** `<div class="welcome-triangle">` with a glowing message.
- **Progress Bar:** `<div id="formProgress" class="progress-bar">` animated via JS.
- **Form Fields:** Full Name, Email, Phone, Password, Confirm Password, each with real-time validation and error messages.
- **Mini-Game:** Drag-and-drop verification using `<div id="dragCircle">` and `<div id="dropBox">`.
- **Thank You Message:** `<div id="thankYouMsg">` shown after successful submission.

### `form_style.css`
- **Diagonal Background:** `.diagonal-bg` uses a linear gradient for the split effect.
- **Form Box:** `.form-box` styled with rounded corners, shadow, and 3D perspective.
- **Welcome Banner:** `.welcome-triangle` and `.welcome-msg` for the glowing, single-line message.
- **Input Animations:** `.input-fill-black`, `.input-normal`, and keyframe animations for interactive feedback.
- **Button Styling:** Custom dark buttons with hover effects.
- **Mini-Game Elements:** Styled for clarity and ease of use.

### `form_logic.js`
- **Progress Bar Logic:** Tracks and animates progress as fields are validated.
- **Mini-Game Logic:** Handles drag-and-drop verification and feedback.
- **Validation:** Real-time checks for all fields with user-friendly error messages.
- **3D Animation:** Adds tilt effect to the form box on mouse movement.
- **Thank You Message:** Displays and hides the thank you message after submission.

---

## What Makes This Project Special?

- **User-Centric Design:** Every element, from the welcome message to the thank you note, is crafted to make users feel valued and engaged.
- **Modern Visuals:** The diagonal background, glowing text, and 3D effects create a memorable first impression.
- **Interactive Verification:** The mini-game is both fun and effective, replacing boring CAPTCHAs.
- **Instant Feedback:** Users always know what’s required, thanks to live validation and progress tracking.
- **Personal Touch:** The coder’s signature and motivational message add authenticity and warmth.

---

## How to Use

1. Open `html_form.html` in your browser.
2. Fill out the form fields. Watch the progress bar animate as you complete each step.
3. Complete the drag-and-drop mini-game to verify you are human.
4. Submit the form and enjoy the thank you message!

---

## Credits

- **Coded with ❤️ by Dipanjan**
- Bootstrap 5 for base styling

---

> “May your code always compile and your bugs be few!”