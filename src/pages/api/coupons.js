// pages/api/coupons.js
import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'coupons.json');
  
  // Reading the coupons data from JSON file
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading data' });
    }
    
    // Send the JSON response to the client
    res.status(200).json(JSON.parse(data));
  });
}
