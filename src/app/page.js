import Image from 'next/image';
import styles from './page.module.css';
import Scene from './layout/3D/Scene';
import Header from './layout/Header';
import Background from './layout/Background';
import Hero from './sections/Hero';
import Section from './sections/Section';
import Menu from './sections/Menu';
import Locations from './sections/Locations';

export default function Home() {
  return (
    <div className="sections" id="">
      <Section>
        <Hero />
      </Section>
      <Section>
        <Menu />
      </Section>
      <Section>
        <Locations />
      </Section>
      <Scene />
    </div>
  );
}
