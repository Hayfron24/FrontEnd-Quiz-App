# Frontend Quiz App

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Selecting a Quiz Subject](#selecting-a-quiz-subject)
  - [Answering Questions](#answering-questions)
  - [Receiving Feedback](#receiving-feedback)
  - [Completing the Quiz](#completing-the-quiz)
  - [Changing Themes](#changing-themes)
- [Project Structure](#project-structure)
- [Customization](#customization)
  - [Adding New Subjects](#adding-new-subjects)
  - [Modifying Styles](#modifying-styles)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Contact](#contact)


## Overview

This project is a frontend quiz application where users can select a quiz subject, answer multiple-choice questions, and receive feedback on their answers. The app supports light and dark themes and is fully responsive.

## Features

- Select a quiz subject
- Select a single answer from each question from a choice of four
- See an error message when trying to submit an answer without making a selection
- See if they have made a correct or incorrect choice when they submit an answer
- Move on to the next question after seeing the question result
- See a completed state with the score after the final question
- Play again to choose another subject
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Bonus: Change the app's theme between light and dark

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- Angular CLI

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Hayfron24/FrontEnd-Quiz-App.git
    cd frontend-quiz-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    ng serve
    ```

4. Open your browser and navigate to `http://localhost:4200`.

## Usage

### Selecting a Quiz Subject

- On the main page, you can see a list of available subjects. Click on a subject to start the quiz.

### Answering Questions

- For each question, select one of the four provided options.
- Click the "Submit" button to submit your answer.
- If you have not selected an answer, an error message will appear.

### Receiving Feedback

- After submitting an answer, you will see whether your choice was correct or incorrect.
- Click the "Next" button to proceed to the next question.

### Completing the Quiz

- After answering all questions, you will see your total score.
- Click the "Play Again" button to return to the subject selection page and choose another quiz.

### Changing Themes

- Use the theme toggle button in the header to switch between light and dark modes.


## Project Structure

- `src/app/`: Contains the main application files.
  - `header/`: Header component with theme toggle functionality.
  - `index-page/`: Main page component for subject selection.
  - `subjects/[params]`: Component for displaying and interacting with quiz questions depending on the catured route parameter.
  - `score-board/`: Component for displaying the score at the end of the quiz.
  - `data.service.ts`: Service for fetching quiz data and managing state.

## Customization

### Adding New Subjects

1. Update the `data.json` file with new subjects and questions.
2. Ensure each subject has a unique `id`, `title`, `icon`, `iconBg`, and a list of questions.

### Modifying Styles

- Customize the styles in the corresponding CSS files in each component directory.

## Technologies Used

- Angular
- TypeScript
- RxJS
- Tailwind CSS (for styling)

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## Contact

For any questions or feedback, please reach out to [isaachayfron24@gmail.com].
