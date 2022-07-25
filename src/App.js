import Carousel, { CarouselItem } from './components/Carousel/Carousel';
import LikeButton from './components/LikeButton/LikeButton';
import Counter from './components/Counter/Counter';
import TodoList from './components/TodoList/TodoList';
import Autocomplete from './components/Autocomplete/Autocomplete';
import Counter2 from './components/Counter/Counter2';
import TodoList2 from './components/TodoList/TodoList2';

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

      <hr />
      <Counter2 />
      <TodoList2 />
    </div>
  );
}

export default App;
