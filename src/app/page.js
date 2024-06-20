import fs from 'fs';
import path from 'path';
import Scene from './layout/3D/Scene';
import Hero from './sections/Hero';
import Section from './sections/Section';
import Locations from './sections/Locations';
import MenuSection from './sections/menu/MenuSection';

const getData = async () => {
  // Get the absolute path to the JSON file
  const jsonPath = path.resolve(process.cwd(), 'public/data/menu.json');

  // Read and parse the JSON file
  const jsonData = fs.readFileSync(jsonPath, 'utf-8');
  const data = JSON.parse(jsonData);

  return data;
};

export default async function Home() {
  // get the data from server to client
  const data = await getData();

  return (
    <div className="sections" id="">
      <Section>
        <Hero />
      </Section>
      <Section>
        <MenuSection data={data} />
      </Section>
      <Section>
        <Locations />
      </Section>
      {/* <Scene /> */}
    </div>
  );
}
