import React from "react";
import { render, screen } from "@testing-library/react";
import PhotoListItem from "../../components/PhotoListItem"; // Correct import path

describe("PhotoListItem", () => {
  it("renders photo details correctly", () => {
    const mockPhoto = {
      urls: { regular: "https://example.com/photo.jpg" },
      location: { city: "Toronto", country: "Canada" },
      user: { profile: "https://example.com/profile.jpg", name: "John Doe" },
    };

    render(<PhotoListItem photo={mockPhoto} />);

    expect(screen.getByAltText("Toronto")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Toronto, Canada")).toBeInTheDocument();
  });
});