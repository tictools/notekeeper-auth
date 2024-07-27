import express, { type Express } from "express";
import supertest from "supertest";

interface MockRepository {
  [key: string]: any;
}

type RouteIoC = (app: Express, mockRepository: MockRepository) => void;

const testServer = (routeIoC: RouteIoC, mockRepository = {}) => {
  const app = express();

  app.use(express.json());

  routeIoC(app, mockRepository);

  return supertest(app);
};

export default testServer;
