import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import morgan from "morgan";
const app = express();
const basePort = 8000;

const options8002 = {
  target: `http://localhost:${basePort + 2}`,
  changeOrigin: true,
};

const options8003 = {
  target: `http://localhost:${basePort + 3}`,
  changeOrigin: true,
};

const options8005 = {
  target: `http://localhost:${basePort + 5}`,
  changeOrigin: true,
};

const PORT = 9000;

// Morgan Middleware for logging
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json(`common gate way run at port ${PORT}`);
});

// Proxy paths based on some criteria, e.g., path starts with /api1 goes to port 3000
app.use("/hoabl-admin", createProxyMiddleware(options8002));
app.use(
  "/hoabl-customer",
  (req, res, next) => {
    // console.log(req.headers);
    next();
  },
  createProxyMiddleware(options8003),
);
app.use("/hoabl-payment", createProxyMiddleware(options8005));

// Start the proxy server on port 5000

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
