interface CounterButtonProps {
  count: number;
  click: () => void;
  children: string;
}

export const CounterButton = ({ count, click, children }: CounterButtonProps) => {
  return (
    <div className="card">
      <button onClick={click}>
        {children} {count}
      </button>
    </div>
  );
};
