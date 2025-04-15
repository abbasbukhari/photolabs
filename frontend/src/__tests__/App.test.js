import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders the App component with mock data", () => {
    const mockPhotos = [
      {
        urls: { regular: "https://example.com/photo.jpg" },
        location: { city: "Toronto", country: "Canada" },
        user: { profile: "https://example.com/profile.jpg", name: "John Doe" },
      },
    ];

    render(<App photos={mockPhotos} />);

    expect(screen.getByText(/PhotoLabs/i)).toBeInTheDocument();
    expect(screen.getByAltText("Toronto")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Toronto, Canada")).toBeInTheDocument();
  });
});
