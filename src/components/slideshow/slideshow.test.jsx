import { render, screen, fireEvent } from '@testing-library/react'
import Slideshow from './Slideshow'

const pictures = ['/img1.jpg', '/img2.jpg', '/img3.jpg']

describe('Slideshow component', () => {
  test('ne rend rien si pictures est vide', () => {
    const { container } = render(<Slideshow pictures={[]} />)
    expect(container.firstChild).toBeNull()
  })

  test('affiche la première image et le compteur', () => {
    render(<Slideshow pictures={pictures} />)
    const image = screen.getByAltText('Photo 1')
    expect(image).toHaveAttribute('src', '/img1.jpg')
    expect(screen.getByText('1/3')).toBeInTheDocument()
  })

  test('passe à l’image suivante quand on clique sur le bouton suivant', () => {
    render(<Slideshow pictures={pictures} />)
    const nextButton = document.querySelector('.arrow.next')
    fireEvent.click(nextButton)
    const image = screen.getByAltText('Photo 2')
    expect(image).toHaveAttribute('src', '/img2.jpg')
    expect(screen.getByText('2/3')).toBeInTheDocument()
  })

  test('revient à la dernière image si on clique sur précédent au premier slide', () => {
    render(<Slideshow pictures={pictures} />)
    const prevButton = document.querySelector('.arrow.prev')
    fireEvent.click(prevButton)
    const image = screen.getByAltText('Photo 3')
    expect(image).toHaveAttribute('src', '/img3.jpg')
    expect(screen.getByText('3/3')).toBeInTheDocument()
  })

  test('boucle correctement après la dernière image', () => {
    render(<Slideshow pictures={pictures} />)
    const nextButton = document.querySelector('.arrow.next')
    // cliquer 3 fois pour revenir à la première
    fireEvent.click(nextButton)
    fireEvent.click(nextButton)
    fireEvent.click(nextButton)
    const image = screen.getByAltText('Photo 1')
    expect(image).toHaveAttribute('src', '/img1.jpg')
    expect(screen.getByText('1/3')).toBeInTheDocument()
  })
})
