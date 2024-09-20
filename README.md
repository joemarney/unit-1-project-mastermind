# Project 1: Mastermind Game

![mastermind browser game with a dark theme](../unit-1-project-mastermind/MVP.png)

> Mastermind was created in 1970 by Mordecai Meirowitz in Israel. It resembles an old pencil and paper game called Bulls and Cows which may date back a century.

# Game and Instructions

_-link to game-_

- The idea of the game is to correctly decipher a mystery code of 4 colours.
- You input your guess and then receive feedback on each turn:
  - Green dot means you have guessed the correct colour and it is also in the correct position.
  - Orange dot means you have guessed the correct colour but it is in the incorrect position.
  - Blank means the colour you guessed was not in the mystery code at all.
- You have 8 turns to guess the correct code.

# Accessing the Code

To check out my code you can go to my [GitHub repo][link].

[link]: https://github.com/joemarney/unit-1-project-mastermind

You can either use the inbuilt code viewer or you can download the zip to see it in your preferred code editor.

# Timeframe

We as a class had a week to complete this task. We have been mainly working independently. We have been helping each other when needed.

# Technologies Used

- Figma
- JavaScript
- HTML
- CSS
- Google Fonts
- VS Code
- GitHub
- Chrome Dev Tools

# Brief

# Planning

I planned my project using Figma. This allowed me to really visualise my project from day one. Once I had started the coding portion I had realised that my plan was fairly ambitious for my level of JS knowledge.

## User Stories

#### These are declarations that aid the design of the application by clearly stating what is required.

- **As a user,** I want the application to be aesthetically pleasing, clean and clear from an accessibility standpoint.
- **As a user,** I want to see a title screen when I arrive so I know I'm on the right page.
- **As a user,** I want the title screen to have clear and unambiguous buttons that can take me to play the game, show me how to play the game, and some options for the game.
- **As a user,** I want to be able to easily click on the buttons while playing and they should work as intended.
- **As a user,** I want to see a visual change on the page to show me that my selection has been understood.
- **As a user,** I want the feedback from each turn to be clear and concise.
- **As a user,** I want to be able to see when the game is over.
- **As a user,** I want the option to play again.

## Pseudocode

#### This is notation resembling a simplified programming language. It helps better understand how the application functions.

1. Define variables to track the state of the game:

   - Randomly generated code.
   - The player's choices.
   - The feedback for player's guesses.
   - The game's result.
   - The result message.

2. Cached elements

   - Home button.
   - Each guess.
   - Colour selector.
   - Check button.
   - Feedback.
   - Reset button.

3. Required constants:

   - Possible colours.
   - Amount of turns.
   - Length of secret code.

4. Generate a random colour code.

5. Handle the player clicking buttons.

6. Check if player has guessed correctly.

7. Render a win/loss message to the player.

# Stretch Goals

At the start of my project I set some stretch goals. I managed to complete 2 of them and implement them within the timeframe.
Along with the goals I did not reach I thought of some more while working:

- I would like to make different difficulties with less turns or more colours in the selection.
- I like to earn achievements in games that I play so I think achievements would be cool to add.
- I think it would be good to make the game mobile friendly too as that is where most people would play a game like this.

# Attributions

- Chat GPT
- Stack Overflow
- [PeriscopeFilm](https://www.youtube.com/@PeriscopeFilm)
