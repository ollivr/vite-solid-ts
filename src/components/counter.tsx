import { createSignal } from 'solid-js';
import Button from './button';

export default function Counter() {
  const [count, setCount] = createSignal<number>(0);

  return (
    <section class='container flex h-72 w-96 flex-col items-center justify-between rounded-xl border border-tertiary bg-secondary py-10'>
      <h2 class='text-6xl'>{count()}</h2>
      <div class='flex gap-x-5'>
        <Button
          text='+ 1'
          onClick={() => setCount((previousCount) => previousCount + 1)}
        />
        <Button
          text='- 1'
          onClick={() => setCount((previousCount) => previousCount - 1)}
        />
      </div>
    </section>
  );
}
