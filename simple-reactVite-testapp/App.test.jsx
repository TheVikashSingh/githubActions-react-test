
import React from "react";
import { render,screen } from "@testing-library/react";
import App from "./src/App";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest"


describe("Checking if some words exist?", () => {

    it("checking if a word exists", () => {
        render(<App />);
        expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
    });

    it("checking if a word exists", () => {
        render(<App />);
        expect(screen.getByText(/Test/i)).toBeInTheDocument();
    });

    it("checking if a word exists", () => {
        render(<App />);
        expect(screen.getByText(/siTE/i)).toBeInTheDocument();
    });

});