import { app, connectDBOnce } from "./app.js";

const PORT = process.env.PORT || 5000;

connectDBOnce().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

