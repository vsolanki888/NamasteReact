import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

beforeEach(() => {
  render(<Contact />);
});

test("should render Contact component correctly", () => {
  // query by role
  const heading = screen.getByRole("heading");
  // assertion
  expect(heading).toBeInTheDocument();
});

test("should exist button in Contact component", () => {
  // query by role
  const button = screen.getByRole("button");
  // assertion
  expect(button).toBeInTheDocument();
});

test("should exist input in Contact component", () => {
  // query by placeholder text
  const input = screen.getByPlaceholderText("name");
  // assertion
  expect(input).toBeInTheDocument();
});

test("should load 2 input in Contact component", () => {
  // query by role
  const input = screen.getAllByRole("textbox");
  // assertion
  expect(input.length).toBe(2);
});
