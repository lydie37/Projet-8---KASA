import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

describe("Banner component", () => {
  const props = {
    image: "test-image.jpg",
    title: "Bienvenue",
    className: "custom-class",
  };

  test("titre", () => {
    render(<Banner {...props} />);
    expect(screen.getByText("Bienvenue")).toBeInTheDocument();
  });

  test("applique l'image de fond", () => {
    const { container } = render(<Banner {...props} />);
    const div = container.firstChild;
    expect(div).toHaveStyle(`background-image: url(${props.image})`);
  });

  test("ajoute la classe personnalisée", () => {
    const { container } = render(<Banner {...props} />);
    const div = container.firstChild;
    expect(div).toHaveClass("banner");
    expect(div).toHaveClass("custom-class");
  });
});
