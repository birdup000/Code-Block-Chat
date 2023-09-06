# Code Block Chat

This project is a chat application built with React that allows users to input text or code snippets. Each message in the chat can be voted on with a thumbs up or a thumbs down. The vote status of each message is tracked and displayed, and the user can change their vote at any time.

## Project Structure

The project contains two main components: `App` and `Message`.

### App Component

The `App` component is the main component of the application. It contains the text area for entering messages, the "Send" button for sending the messages, and the chat output for displaying the messages. When a message is sent, it is added to the `messages` state as an object with a `text` property for the message text and a `vote` property for the vote status.

### Message Component

The `Message` component is used to render each message in the chat output. It takes in a `message`, `vote`, and `setVote` prop. The `message` prop is the text of the message, the `vote` prop is the current vote status, and the `setVote` prop is a function to change the vote status. The `Message` component also contains two buttons for voting thumbs up and down on the message.

## CodeBlock Component

The `CodeBlock` component is used to display code snippets in a syntax-highlighted format. It uses the `react-syntax-highlighter` library for syntax highlighting and the `clipboard-copy` library for copying the code to the clipboard. The `CodeBlock` component contains a "Copy" button that copies the code when clicked.

## Usage

To use the chat application, type a message or a code snippet into the text area and click the "Send" button to send the message. Once the message is sent, it will appear in the chat output, and you can vote on it with the thumbs up and thumbs down buttons.

## Installation

1. Clone the repository.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm start` to start the application.

Please note that you will need node and npm installed globally on your machine.
