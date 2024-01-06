import swaggerAutogen from "swagger-autogen";
import mongooseToSwagger from "mongoose-to-swagger";
import TypeOfUser from "../src/mongodb/TypeOfUser";

const outputFile = "./dist/swagger/swagger_output.json";
const endPointsFiles = ["./dist/src/routes.js", "./dist/src/routes/typeOfUser.js"];


const swaggerOptions = {
  info: {
    version: "1.0.0",
    title: "API MyPersonal",
    description: "Doc API MyPersonal",
  },
  host: "http://localhost:4000",
  basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  components: {
    schemas: {
      TypeOfUser: mongooseToSwagger(TypeOfUser),
    },
  },
};

swaggerAutogen(swaggerOptions)(outputFile, endPointsFiles).then(async () => {
  console.log(`Swagger doc generates in ${outputFile}`);
  await import("../index.js");
});