import { Hono } from "hono";

const app = new Hono();

const jobs = [
  {
    id: 1,
    title: "Senior React Developer",
    salary: 50000,
    location: "London, UK",
  },
  {
    id: 2,
    title: "Plumber",
    salary: 40000,
    location: "Bowser's Castle",
  },
  {
    id: 3,
    title: "Gym Leader",
    salary: 75000,
    location: "Kanto Region",
  },
  {
    id: 4,
    title: "Vue Developer",
    salary: 40000,
    location: "Liverpool, UK",
  },
  {
    id: 5,
    title: "Tutorial Maker",
    salary: 35000,
    location: "Manchester, UK",
  },
  {
    id: 6,
    title: "Website Manager",
    salary: 50000,
    location: "Berlin, Germany",
  },
  {
    id: 7,
    title: "Food Tester",
    salary: 30000,
    location: "London, UK",
  },
];

app.get("/", (c) => {
  return c.json(jobs);
});

export default app;
