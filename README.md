# Next.js 15 API Route Error Handling

This repository demonstrates a common error in Next.js 15 API routes and provides a robust solution.

## The Problem

When fetching data within an API route, network errors or issues with the external API can cause the route to crash without proper error handling. This leads to a poor user experience and debugging challenges.

## The Solution

The solution uses `async/await` and `try...catch` blocks to gracefully handle potential errors during the data fetching process.  The API route will now return a user-friendly error message (500 status code) instead of crashing, providing better resilience and debugging information.

## How to Run

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd nextjs-api-error-handling
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Test the API route by making a request to `http://localhost:3000/api/data`.

## Files

- `pages/api/data.js`: Contains the API route with the initial error (bug.js). 
- `pages/api/dataSolution.js`: Contains the improved API route with the solution (bugSolution.js).
