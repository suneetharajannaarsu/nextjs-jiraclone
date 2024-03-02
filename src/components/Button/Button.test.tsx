import { describe, test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Button  from "./index";

describe("Button Component Test: " , () => {
    test("should render button", () => {
        render(<Button />);
        expect(screen.getAllByTestId('button')).toBeDefined()
    });
})