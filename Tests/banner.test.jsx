import { render, screen } from "@testing-library/react";
import Banner from '../src/components/banner/Banner';

describe("Banner component", () => {
  const props = {
    image: "test-image.jpg", // Image de fond
    title: "Bienvenue",      // Texte affiché
    className: "custom-class", // Classe CSS optionnelle
  };

  test("applique l'image de fond", () => {
    const { container } = render(<Banner {...props} />);
    const div = container.firstChild;
    expect(div).toHaveStyle(`background-image: url(${props.image})`);
    // Vérifie que l'image de fond est appliquée
  });

  test("ajoute la classe personnalisée", () => {
    const { container } = render(<Banner {...props} />);
    const div = container.firstChild;
    expect(div).toHaveClass("banner");
    expect(div).toHaveClass("custom-class");
    // Vérifie que les classes CSS sont présentes
  });
});

