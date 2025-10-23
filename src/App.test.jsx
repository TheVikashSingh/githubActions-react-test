import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import App from "./App";
import { describe, it, expect } from "vitest";

describe("Looking for a word", () => {
    it("Looking for welcome text", () => {
        render(<App />);
        expect(screen.getByText(/Welc18ome/i)).toBeInTheDocument;
    })
});


