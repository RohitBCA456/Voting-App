import { app } from "./app.js";
import { dbConnection } from "./db/db.js";

dbConnection().then(() => {
  app.on("error", (error) => {
    console.log(`Error: ${error.message}`);
  });
  app.listen(process.env.PORT, () => {
      console.log(`Server is running on port {${process.env.PORT}}`);
    })
})
.catch((error) => console.log(error.message));
