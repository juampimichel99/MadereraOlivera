'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

interface ProductCategory {
  id: string
  name: string
  description: string
}

const categories: ProductCategory[] = [
  {
    id: 'tableros-fenolicos',
    name: 'Tableros y Fenólicos',
    description: 'Tableros fenólicos y OSB de pino para construcción y carpintería de la más alta calidad.',
  },
  {
    id: 'tiranteria-vigas',
    name: 'Tirantería y Vigas',
    description: 'Vigas y tirantería de madera maciza para estructuras, techos y construcciones.',
  },
  {
    id: 'machimbre',
    name: 'Machimbre',
    description: 'Machimbre de madera de primera calidad con acabados profesionales para interiores.',
  },
  {
    id: 'deck-madera',
    name: 'Deck de Madera',
    description: 'Decks de eucalyptus, guayubira y lapacho con tratamiento contra humedad y clima.',
  },
  {
    id: 'chapas',
    name: 'Chapas',
    description: 'Chapas de zinc, galvanizadas, acanaladas y trapezoidales para techos, galpones y construcciones.',
  },
  {
    id: 'fibrofacil-mdf',
    name: 'Fibrofácil y MDF',
    description: 'Placas de fibrofácil y MDF en distintos espesores para muebles, revestimientos y construcciones.',
  },
