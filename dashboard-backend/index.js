const express = require("express");
const cors = require("cors");
const fs = require("fs");
const csvParser = require("csv-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const downsampleData = (data, threshold) => {
  const downsampledData = [];
  const interval = Math.ceil(data.length / threshold);

  for (let i = 0; i < data.length; i += interval) {
    const chunk = data.slice(i, i + interval);
    const sum = chunk.reduce(
      (acc, entry) => acc + parseFloat(entry["Profit Percentage"]),
      0
    );
    const average = sum / chunk.length;

    const timestamp = chunk[0].Timestamp;
    const year = timestamp.split(" ")[0];
    downsampledData.push({ year, average });
  }

  return downsampledData;
};

app.get("/api/graph-data", (req, res) => {
  const downsampleThreshold = 200;

  const results = [];
  fs.createReadStream("dataset.csv")
    .pipe(csvParser())
    .on("data", (row) => {
      results.push(row);
    })
    .on("end", () => {
      const downsampledData = downsampleData(results, downsampleThreshold);
      res.json(downsampledData);
    });
});


// connecting server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
