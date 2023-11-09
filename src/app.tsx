import Counter from './components/counter';
import GithubCorner from './components/github-corner';
import Header from './components/header';

function App() {
  return (
    <>
      <Header />
      <main class='flex h-screen flex-col items-center justify-center bg-primary text-color'>
        <GithubCorner
          title='Get started on GitHub'
          url='https://github.com/doinel1a/vite-solid-ts'
        />
        <Counter />
      </main>
    </>
  );
}

export default App;
