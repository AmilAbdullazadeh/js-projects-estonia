import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { Calculator } from "../components/Calculator";

// Basic test using `test` and `expect`
test("Result text should be In The Document", () => {
  render(<Calculator />);

  const element = screen.getByText(/Result:/i);
  expect(element).toBeInTheDocument();
});

// Using `describe` and `it` to organize tests
describe("Calculator", () => {
    it("check Multiply method", () => {
      render(<Calculator />);

      const element = screen.getByText(/Multiply 2 \* 3/i);
      fireEvent.click(element);
      expect(screen.getByText(/Result:/i)).toHaveTextContent("Result: 6");
    });

    it("check Divide method", () => {
        render(<Calculator />);
    
        const element = screen.getByText(/Divide 6 \/ 3/i);
        fireEvent.click(element);
        expect(screen.getByText(/Result:/i)).toHaveTextContent("Result: 2");
    });
        
});

// Introducing `getByRole`
describe("Calculator with selectors", () => {
    it("check Multiply method", () => {
        
        render(<Calculator />);

        const element = screen.getByRole("button", { name: /Multiply 2 \* 3/i });
        fireEvent.click(element);
        expect(screen.getByText(/Result:/i)).toHaveTextContent("Result: 6");
    }); 
});

// Introducing `findByTestId` and `data-testid`
describe("Calculator with selectors with data sets", () => {
    it("check Multiply method", async () => {
        render(<Calculator />);

        const element = screen.getByTestId("multiply");
        fireEvent.click(element);
        expect(await screen.findByTestId("result")).toHaveTextContent("Result: 6");
    }); 
});
