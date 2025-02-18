```javascript
// pages/api/dataSolution.js
export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      // Handle non-2xx responses appropriately
      const errorData = await response.json(); // Attempt to parse error response
      const errorMessage = errorData.message || `API request failed with status ${response.status}`;
      res.status(response.status).json({ error: errorMessage });
      return;
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    //Consider more informative error messages for production
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
}
```