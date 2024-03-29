import { screen, fireEvent, render, waitFor } from "@testing-library/react";
import App from "../Pages/PageColor";

beforeEach(() => render(<App />));

describe("Testing application", () => {
  test("Application default", () => {
    const fieldPink = screen.getByDisplayValue("93");
    const fieldGreen = screen.getByDisplayValue("121");
    const fieldBlue = screen.getByDisplayValue("184");
    const containerText = screen.getByText(/rgba\(93, 121, 184\)/i);

    [fieldPink, fieldGreen, fieldBlue, containerText].forEach((element) =>
      expect(element).toBeInTheDocument()
    );
  });

  test("Event field application", () => {
    const fieldPink = screen.getByDisplayValue("93");
    const fieldGreen = screen.getByDisplayValue("121");
    const fieldBlue = screen.getByDisplayValue("184");

    [
      {
        nameField: fieldPink,
        valueFielde: "93",
      },
      {
        nameField: fieldGreen,
        valueFielde: "93",
      },
      {
        nameField: fieldBlue,
        valueFielde: "93",
      },
    ].forEach((element) =>
      fireEvent.change(element.nameField, {
        target: {
          value: element.valueFielde,
        },
      })
    );

    const containerText = screen.getByText(/rgba\(93, 93, 93\)/i);
    expect(containerText).toBeInTheDocument();
  });
});
