import Carousel, { CarouselItem } from './components/Carousel/Carousel';
import LikeButton from './components/LikeButton/LikeButton';
import Counter from './components/Counter/Counter';
import TodoList from './components/TodoList/TodoList';
import Autocomplete from './components/Autocomplete/Autocomplete';
import Counter2 from './components/Counter/Counter2';
import TodoList2 from './components/TodoList/TodoList2';
import Autocomplete2 from './components/Autocomplete/Autocomplete2';
import CarouselColletion, { CarouselColletionItem } from './components/Carousel/CarouselColletion';
import Modal from './components/Modal/Modal';
import { useState } from 'react';
import FullPage, { FullPageItem } from './components/FullPage/FullPage';
import { ThemeContext, themes } from './components/ThemeContext/ThemeContext';
import ThemeButton from './components/ThemeButton/ThemeButton';

function AppFull() {
  return <FullPage>
    <FullPageItem style={{ background: 'green' }}>1</FullPageItem>
    <FullPageItem style={{ background: 'blue' }}>2</FullPageItem>
    <FullPageItem style={{ background: 'red' }}>3</FullPageItem>
  </FullPage>
}

function App() {
  const [visible, setVisible] = useState(false);

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

      <h2>Autocomplete function component</h2>
      <Autocomplete2 focus onSelectItem={(v) => alert(v)} />

      <h2>CarouselColletion</h2>
      <CarouselColletion>
        <CarouselColletionItem style={{ background: 'red' }}>1</CarouselColletionItem>
        <CarouselColletionItem style={{ background: 'blue' }}>2</CarouselColletionItem>
        <CarouselColletionItem style={{ background: 'green' }}>3</CarouselColletionItem>
        <CarouselColletionItem style={{ background: 'purple' }}>4</CarouselColletionItem>
        <CarouselColletionItem style={{ background: 'gray' }}>5</CarouselColletionItem>
      </CarouselColletion>

      <h2>modal component</h2>
      <button onClick={() => setVisible(true)}>open modal</button>
      <Modal visible={visible} onClose={() => setVisible(false)}>
        <div>modal content</div>
      </Modal>
    </div>
  );
}

function App2() {
  const [theme, setTheme] = useState(themes.dark);

  return <ThemeContext.Provider value={theme}>
    <ThemeButton onClick={() => setTheme((prevTheme) => {
      if (prevTheme === themes.dark) {
        return themes.light;
      } else {
        return themes.dark;
      }
    })}>Change Theme</ThemeButton>
  </ThemeContext.Provider>
}

export default App2;
