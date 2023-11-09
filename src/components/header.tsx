export default function Header() {
  return (
    <header class='absolute top-0 z-[1] w-full cursor-default bg-accent-primary sm:w-auto'>
      <div class='relative flex justify-center'>
        <h1 class='z-[1] select-none p-4 text-xl font-semibold text-color sm:text-2xl md:text-3xl'>
          Vite SolidTS — Template
        </h1>
        <div class='arrow-right top absolute -right-[43px] -top-[35px] hidden h-0 w-0 rotate-90 border-b-[60px] border-t-[70px] border-b-transparent border-l-accent-primary border-t-transparent sm:-right-[40px] sm:block sm:border-l-[70px] md:-right-[43px] md:border-l-[76px]'></div>
      </div>
    </header>
  );
}
