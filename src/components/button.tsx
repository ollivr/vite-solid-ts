interface IButton {
  text: string;
  onClick: () => void;
}

export default function Button({ text, onClick }: IButton) {
  return (
    <button
      type='button'
      class='w-16 rounded-xl bg-accent-primary px-4 py-2 text-xl transition-colors hover:bg-accent-primary-state focus:bg-accent-primary-state'
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
}
