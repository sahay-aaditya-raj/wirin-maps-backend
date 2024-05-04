const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.get('/api/text-directions', async (req, res) => {
  const { origin, destination, apiKey } = req.query;
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching directions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/my-location', async (req, res) => {
  const { apiKey } = req.query;
  const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${apiKey}`;
  try {
    response = await fetch(url,{method:'POST'})
    const data = await response.json()
    res.json(data)
  } catch (e) {
    console.log(e)
    res.status(500).json({error: 'Internal Server Error'})
  }
})
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
