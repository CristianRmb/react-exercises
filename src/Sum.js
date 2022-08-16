function Sum({ numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9] }) {
  return (
    <div>
      <h1>
        Sum ={' '}
        {numbers.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          0,
        )}
      </h1>
    </div>
  );
}

export default Sum;
