import clsx from 'clsx';

interface CarouselIndicatorsProps {
  count: number;
  activeIndex: number;
}

export const CarouselIndicators = ({
  count,
  activeIndex,
}: CarouselIndicatorsProps) => {
  return (
    <div className="flex justify-center items-center mt-6 gap-2 mx-20">
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className={clsx('w-4 h-4 rounded-full', {
            'bg-green': activeIndex === index,
            'bg-white': activeIndex !== index,
          })}
        />
      ))}
    </div>
  );
};
