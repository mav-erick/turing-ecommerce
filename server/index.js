import 'dotenv/config';
import app from './app';

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server ready on port ${PORT} 🚀`));

process.on("SIGTERM", function() {
  console.log(`Shutting down server on port ${PORT}`);
  process.exit(0);
});
