import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, "dist")));

app.use(
  "/nooki",
  createProxyMiddleware({
    target: "https://api.nookipedia.com",
    changeOrigin: true,
    pathRewrite: {
      "^/nooki": "",
    },
  })
);

app.use(
  "/img",
  createProxyMiddleware({
    target: "https://dodo.ac",
    changeOrigin: true,
    pathRewrite: {
      "^/img": "",
    },
  })
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
