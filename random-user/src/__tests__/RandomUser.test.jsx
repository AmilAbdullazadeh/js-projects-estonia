import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import RandomUser from "../components/RandomUser";
jest.mock("axios");

// getByText, getByAltText

export const mockUser = {
  results: [
    {
      name: {
        first: "John",
        last: "Doe",
      },
      email: "john.doe@example.com",
      picture: {
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
      },
    },
  ],
};

// describe Random User component
describe("Random User", () => {

    it("fetches and displays random user data", async () => {
    
        axios.get.mockResolvedValue(mockUser);

        render(<RandomUser />);

        await screen.findByText("Name: John Doe");

        expect(screen.getByText("Name: John Doe")).toBeInTheDocument();
        expect(
          screen.getByText("Email: john.doe@example.com")
        ).toBeInTheDocument();
        expect(screen.getByAltText("User thumbnail")).toBeInTheDocument();
    });

    it('displays an error message when the API call fails', async () => {
        axios.get.mockRejectedValue(new Error('API call failed'));

        render(<RandomUser />);

        await screen.findByText("An error occurred while fetching user data.");
        expect(
          screen.getByText("An error occurred while fetching user data.")
        ).toBeInTheDocument();
    })

    it(
        "displays an empty state message when the API returns an empty result array", async () => {
            axios.get.mockResolvedValue({})
            
            render(<RandomUser />);

            await screen.findByText(
              "No user data was found. Please try again."
            );

            expect(
              screen.getByText("No user data was found. Please try again.")
            ).toBeInTheDocument();
      }
    );

    it("displays an loading when the API call", async () => {
        axios.get.mockResolvedValue(mockUser);

        render(<RandomUser />);

        await screen.findByText("Loading...");

        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

})