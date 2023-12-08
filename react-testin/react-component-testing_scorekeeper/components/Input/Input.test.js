import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders a label and an input with the correct attributes", () => {
  render(<Input />);
  const label = screen.getByTestId("label");
  expect(label).toBeInTheDocument();
});

test("calls callback on every user input", async () => {});
