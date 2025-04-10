import React from "react";
import { render } from "@testing-library/react";
import PhotoListItem from "../PhotoListItem";

test("renders photo details correctly", () => {
  const mockPhoto = {
    urls: { regular: "https://example.com/photo.jpg" },
    location: { city: "Toronto", country: "Canada" },
    user: { profile: "https://example.com/profile.jpg", name: "John Doe" },
  };

  const { getByAltText, getByText } = render(<PhotoListItem photo={mockPhoto} />);

  expect(getByAltText("Toronto")).toBeInTheDocument();
  expect(getByText("John Doe")).toBeInTheDocument();
  expect(getByText("Toronto, Canada")).toBeInTheDocument();
});