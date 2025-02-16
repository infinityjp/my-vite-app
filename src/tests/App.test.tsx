import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
  test("renders the app with correct heading", () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
  });

  test("renders Vite and React logos", () => {
    render(<App />);
    expect(screen.getByAltText(/Vite logo/i)).toBeInTheDocument();
    expect(screen.getByAltText(/React logo/i)).toBeInTheDocument();
  });

  test("button should increment the count on click", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /count is 0/i });

    // Click button and check if count updates
    fireEvent.click(button);
    expect(
      screen.getByRole("button", { name: /count is 1/i }),
    ).toBeInTheDocument();

    fireEvent.click(button);
    expect(
      screen.getByRole("button", { name: /count is 2/i }),
    ).toBeInTheDocument();
  });

  test("renders text for editing App.tsx", () => {
    render(<App />);
    expect(
      screen.getByText((content, element) => {
        return element?.textContent === "Edit src/App.tsx and save to test HMR";
      }),
    ).toBeInTheDocument();
  });

  test('renders the "Click on the Vite and React logos to learn more" text', () => {
    render(<App />);
    expect(
      screen.getByText(/Click on the Vite and React logos to learn more/i),
    ).toBeInTheDocument();
  });
});
