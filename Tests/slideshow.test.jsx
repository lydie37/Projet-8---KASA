import { render, screen, fireEvent } from '@testing-library/react'
import Slideshow from '../src/components/slideshow/Slideshow';

const pictures = ['/img1.jpg', '/img2.jpg', '/img3.jpg']

describe('Slideshow component', () => {

  test('ne rend rien si pictures est vide', () => {
    const { container } = render(<Slideshow pictures={[]} />)
    expect(container.firstChild).toBeNull() // Aucun rendu si pas d’images
  })

  test('affiche la première image et le compteur', () => {
    render(<Slideshow pictures={pictures} />)
    expect(screen.getByAltText('Photo 1')).toHaveAttribute('src', '/img1.jpg') // 1ère image
    expect(screen.getByText('1/3')).toBeInTheDocument() // Compteur 1/3
  })

  test('passe à l’image suivante quand on clique sur le bouton suivant', () => {
    render(<Slideshow pictures={pictures} />)
    fireEvent.click(document.querySelector('.arrow.next')) // Clic sur suivant
    expect(screen.getByAltText('Photo 2')).toHaveAttribute('src', '/img2.jpg') // 2e image
    expect(screen.getByText('2/3')).toBeInTheDocument() // Compteur mis à jour
  })

  test('revient à la dernière image si on clique sur précédent au premier slide', () => {
    render(<Slideshow pictures={pictures} />)
    fireEvent.click(document.querySelector('.arrow.prev')) // Clic précédent
    expect(screen.getByAltText('Photo 3')).toHaveAttribute('src', '/img3.jpg') // Dernière image
    expect(screen.getByText('3/3')).toBeInTheDocument() // Compteur mis à jour
  })

  test('boucle correctement après la dernière image', () => {
    render(<Slideshow pictures={pictures} />)
    const next = document.querySelector('.arrow.next')
    fireEvent.click(next)
    fireEvent.click(next)
    fireEvent.click(next) // 3 clics pour revenir au début
    expect(screen.getByAltText('Photo 1')).toHaveAttribute('src', '/img1.jpg') // Boucle OK
    expect(screen.getByText('1/3')).toBeInTheDocument()
  })
})


