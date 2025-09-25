# Angular Tic-Tac-Toe with an Unbeatable AI

This project is a fully-featured Tic-Tac-Toe game built from the ground up with Angular. It was developed as a step-by-step, practical learning project to explore core and advanced Angular concepts. The game features a sleek, responsive, neon-themed user interface and two distinct game modes: a classic Player vs. Player and a challenging Player vs. AI mode, which uses the MiniMax algorithm to ensure the AI is unbeatable.
---

## Features

*   **Dual Game Modes:** Choose between a classic 2-player mode or challenge the intelligent AI.
*   **Unbeatable AI Opponent:** The Player vs. AI mode implements the **MiniMax algorithm**, a recursive strategy that guarantees the AI will never lose (it will always win or force a draw).
*   **Sleek Neon UI:** A modern, dark-themed user interface with glowing text and board elements, creating an engaging player experience.
*   **Smooth Animations & Transitions:** Hover effects and status updates are animated to make the UI feel alive and responsive.
*   **Fully Mobile Responsive:** The layout and elements dynamically resize to provide a seamless experience on any device, from a large desktop monitor to a small mobile phone.
*   **Dynamic Game Status:** The UI clearly indicates the current player's turn, the winner, or if the game is a draw.

---

## Tech Stack

*   **Framework:** [Angular](https://angular.io/) (v14+)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** CSS3 (utilizing Flexbox, CSS Grid, Custom Properties, and Media Queries)
*   **Core Tooling:** [Angular CLI](https://angular.io/cli)

---

## Key Concepts Implemented

This project was built to serve as a practical guide and demonstrates a wide range of essential web development concepts.

#### **Angular Core Concepts:**
*   **Angular CLI Usage:** Project scaffolding, component generation, and serving the application.
*   **Standalone Components:** Building the application with modern, self-contained, and reusable components.
*   **Data Binding:**
    *   **Interpolation `{{ }}`:** To display game state (X's and O's) in the template.
    *   **Event Binding `(click)`:** To handle user interactions with the board and buttons.
    *   **Property Binding `[class.active]`:** To dynamically change UI styles based on the game mode.
*   **Structural Directives:**
    *   **`*ngFor`:** To dynamically generate the 9 squares of the game board from an array.
    *   **`*ngIf`:** To conditionally display elements, such as the current player's turn or the winner's message.
*   **Services & Dependency Injection (DI):**
    *   Separation of concerns by moving all game logic and state management from the component into an injectable `GameService`. This makes the code cleaner, more organized, and easier to maintain.

#### **Programming & Algorithmic Concepts:**
*   **The MiniMax Algorithm:** A recursive, backtracking algorithm was implemented from scratch to create the unbeatable AI. This involved exploring a tree of all possible future game states to find the optimal move.
*   **Pure Functions:** Refactoring logic into pure functions (`checkWinner`) to support the AI's need to evaluate hypothetical board states without side effects.

#### **Advanced CSS & Design Concepts:**
*   **Responsive Web Design:** Using **Media Queries** to create a flexible layout that adapts to different screen sizes.
*   **CSS Custom Properties (Variables):** To create a maintainable and easily customizable neon theme.
*   **Advanced Styling:** Using `text-shadow` and `box-shadow` to create glow effects.
*   **CSS Animations:** Implementing `@keyframes` to add a subtle "flicker" effect to the status text, enhancing the neon theme.

---

## Project Setup and Installation

### Prerequisites
*   Node.js (v20.x or v22.12+)
*   Angular CLI installed globally: `npm install -g @angular/cli`

### Installation Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/abdkhaleel/tic-tac-toe-wth-ai.git
    ```2.  **Navigate to the project directory:**
    ```bash
    cd tic-tac-toe-wth-ai
    ```
3.  **Install the necessary dependencies:**
    ```bash
    npm install
    ```

### Running the Application

1.  **Serve the application:**
    ```bash
    ng serve
    ```
2.  **Open your browser:**
    Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.