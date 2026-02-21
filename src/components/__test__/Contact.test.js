import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

beforeEach(() => {
  render(<Contact />);
});

test("should render Contact component correctly", () => {
  //   render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should exist button in Contact component", () => {
  //   render(<Contact />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("should exist input in Contact component", () => {
  //   render(<Contact />);
  const input = screen.getByPlaceholderText("name");
  expect(input).toBeInTheDocument();
});

test("should load 2 input in Contact component", () => {
  //   render(<Contact />);
  const input = screen.getAllByRole("textbox");
  expect(input.length).toBe(2);
});
