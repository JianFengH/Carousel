import Carousel, { CarouselItem } from './components/Carousel';

function App() {
  return (
    <div className="App">
      <Carousel>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
        <CarouselItem>Item 4</CarouselItem>
      </Carousel>
    </div>
  );
}

export default App;
