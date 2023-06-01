import Image from 'next/image'
import styles from './page.module.css'
import CardContainer from '@/components/cardContainer'

export default function Home() {
  return (
    <main>
      <div>
        <Image 
          alt="Logo del restaurante"
        />
        <div>Mi restaurante</div>
      </div>
      <CardContainer />
      <CardContainer />
    </main>
  )
}
