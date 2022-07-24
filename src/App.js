import Carousel, { CarouselItem } from './components/Carousel/Carousel';
import LikeButton from './components/LikeButton/LikeButton';
import Counter from './components/Counter/Counter';
import TodoList from './components/TodoList/TodoList';
import Autocomplete from './components/Autocomplete/Autocomplete';

function App() {
  return (
    <div className="App">
      <Carousel>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
        <CarouselItem>Item 4</CarouselItem>
      </Carousel>

      <LikeButton />

      <Counter />

      <TodoList />

      <Autocomplete />
    </div>
  );
}

export default App;
