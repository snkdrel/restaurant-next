import Image from 'next/image';
import styles from './page.module.css';
import Logo from '@/components/logo';

export default function Home() {
  return (
    <main>
      <Logo />

      <div className='card'>
        <div className='row'>
          <Image className='col-md-4 img-fluid' src="/images/food.jpg" width={380} height={200} alt="Image of food"/>
          <div className='col-md-8 card-body'>
            <h4 className='card-title'>Title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare lectus sit amet est placerat. Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Nec tincidunt praesent semper feugiat nibh sed. At quis risus sed vulputate odio ut enim blandit volutpat. Convallis convallis tellus id interdum velit. Sit amet commodo nulla facilisi. Porttitor eget dolor morbi non arcu risus quis varius quam. Eu volutpat odio facilisis mauris. Aliquam malesuada bibendum arcu vitae. Morbi quis commodo odio aenean sed adipiscing diam donec. Nec feugiat nisl pretium fusce. A scelerisque purus semper eget duis at tellus at urna. Integer eget aliquet nibh praesent tristique. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Nulla facilisi etiam dignissim diam quis.</p>
          </div>
        </div>
      </div>
      
      <div className='card'>
        <div className='row'>
          <div className='col-md-8 card-body'>
            <h4 className='card-title'>Title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare lectus sit amet est placerat. Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Nec tincidunt praesent semper feugiat nibh sed. At quis risus sed vulputate odio ut enim blandit volutpat. Convallis convallis tellus id interdum velit. Sit amet commodo nulla facilisi. Porttitor eget dolor morbi non arcu risus quis varius quam. Eu volutpat odio facilisis mauris. Aliquam malesuada bibendum arcu vitae. Morbi quis commodo odio aenean sed adipiscing diam donec. Nec feugiat nisl pretium fusce. A scelerisque purus semper eget duis at tellus at urna. Integer eget aliquet nibh praesent tristique. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Nulla facilisi etiam dignissim diam quis.</p>
          </div>
          <Image className='col-md-4 img-fluid' src="/images/table.jpg" width={380} height={200} alt="Image of table"/>
        </div>
      </div>

    </main>
  )
}
