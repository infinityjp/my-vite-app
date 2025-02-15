import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders the correct text", () => {
  render(<App />);
  expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
});
