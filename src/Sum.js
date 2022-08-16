/* What happens if the numbers prop of the Sum component is not set? How can you set a default value for this prop? */
function Sum({ numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9] }) {
  // cosi si assegnano i valori di default altrimenti si inserirscono in App in <Sum  numbers={[1,2,3,4,5]}/>
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
