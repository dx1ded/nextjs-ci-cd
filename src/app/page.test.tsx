import { describe, it, expect, beforeEach } from "vitest"
import { render, screen, cleanup } from "@testing-library/react"
import Home from "./page"

describe("Home Page", () => {
  beforeEach(() => {
    cleanup()
  })

  it("renders without crashing", () => {
    expect(() => render(<Home />)).not.toThrow()
  })

  it("displays hello world message", () => {
    render(<Home />)
    const message = screen.getByText("Hello World", { exact: true })
    expect(message).toBeDefined()
  })

  it("renders message within a div element", () => {
    render(<Home />)
    const div = screen.getByText("Hello World", { exact: true })
    expect(div.tagName).toBe("DIV")
  })

  it("has correct text content", () => {
    render(<Home />)
    const div = screen.getByText("Hello World", { exact: true })
    expect(div.textContent).toBe("Hello World")
  })
})
