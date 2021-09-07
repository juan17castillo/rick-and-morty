import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CharacterItem from "./CharacterItem";
import * as React from "react";

test("Renders card components", () => {
  const { getByText } = render(<CharacterItem />);
  expect(getByText(/See more.../i)).toBeInTheDocument();
});

test("Open Modal", () => {
  const { getByText } = render(<CharacterItem />);
  expect(getByText(/See more.../i)).toBeInTheDocument();
});
