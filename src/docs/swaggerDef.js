const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Kasir API",
      version: "1.0.0",
      description: "Dokumentasi API untuk sistem kasir",
    },
    servers: [
      {
        url: "http://localhost:4001",
        description: "Local server",
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
  },
//   apis: ["./src/module/**/*.routes.js"],
  apis: ["./src/docs/swagger/*.yaml"]
};

const specs = swaggerJsdoc(options);

module.exports = specs;
