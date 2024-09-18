# StoryTime

StoryTime is a Node.js-based server-side rendered web application that allows users to create, view, and delete stories. It uses Express.js as the backend framework and EJS for templating.

## Features

- Create new stories
- View all existing stories
- Delete stories
- Server-side rendering with EJS
- MongoDB database integration using Mongoose

## Technologies Used

- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **EJS**: Template engine for server-side rendering
- **Mongoose**: MongoDB object modeling tool
- **Lodash**: Utility library
- **Morgan**: HTTP request logger
- **dotenv**: Environment variable management

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/storytime.git
   cd storytime
   ```

2. Install the required dependencies

   ```bash
     npm install
   ```

3. Set up environment variables

   - Create a `.env` file in the root of your project.
   - Add the following

     ```bash
     MONGODB_URI = your_mongodb_uri`
     ```

4. Start the application

   ```bash
   npm start
   ```

5. Access the application at `http://localhost:3000`

## Usage

Once the server is up and running, you can:

- Navigate to the home page to view all stories.
- Use the form to create a new story.
- Click story to view it and onece inside delete any story by clicking the delete button next to it.
