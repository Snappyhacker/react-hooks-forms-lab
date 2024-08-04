import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter"; // Update this path based on your directory structure

test("uses a prop of 'search' to display the search term in the input field", () => {
  render(<Filter searchText="testing" onSearchChange={() => {}} />);
  expect(screen.getByPlaceholderText(/Search.../).value).toBe("testing");
});

test("calls the onSearchChange callback prop when the input is changed", () => {
  const onSearchChange = jest.fn();
  render(<Filter searchText="" onSearchChange={onSearchChange} />);

  fireEvent.change(screen.getByPlaceholderText(/Search.../), {
    target: { value: "test" },
  });

  expect(onSearchChange).toHaveBeenCalled();
  expect(onSearchChange).toHaveBeenCalledTimes(1);
});
