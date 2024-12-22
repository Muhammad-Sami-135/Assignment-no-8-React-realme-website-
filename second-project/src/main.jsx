import react from 'react'
import reactDom from 'react-dom/client'
import { Image } from './Image.jsx'
import { Nav } from './navbar.jsx'
import { Card } from './card.jsx'
import { Footer } from './footer.jsx'
import "./style.css"

reactDom.createRoot(document.getElementById('root')).render(
  <div>
    <Nav />,
    <Image />,
    <Card />,
    <Footer />
  </div>
) 
