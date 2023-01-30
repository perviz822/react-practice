const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default ParentComponent;