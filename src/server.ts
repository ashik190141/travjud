import app from "./app";

const port = 3000;

async function main() {
  try {
    await app.listen({ port, host: "0.0.0.0" });
    console.log(`App is listening on port ${port}`);
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
    
  const exitHandler = async () => {
    console.info("Shutting down server...");
    try {
      await app.close(); 
      console.info("Server stopped");
      process.exit(0);
    } catch (error) {
      console.error("Error during shutdown:", error);
      process.exit(1);
    }
  };

  process.on("uncaughtException", (error) => {
    console.error("Uncaught Exception:", error);
    exitHandler();
  });
    
  process.on("unhandledRejection", (error) => {
    console.error("Unhandled Rejection:", error);
    exitHandler();
  });

  process.on("SIGINT", exitHandler);
  process.on("SIGTERM", exitHandler);
}

main();
