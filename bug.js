```javascript
// pages/api/data.js
export default async function handler(req, res) {
  // Simulate an API call that might fail
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    // This is where the error handling happens
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
```