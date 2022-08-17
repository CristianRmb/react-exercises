import React, { useMemo } from 'react';

/* Create a FilteredList component that receives a list of objects each containing a name,
an id and a age prop. The FilteredList component should render only the items of the list
whose age is greater than 18, and the filtering should only happen when the list changes.
Use useMemo to memoize the filtered list. */

export function FilteredList({
  users = [
    { name: 'Maria', id: 1, age: 15 },
    { name: 'Marco', id: 2, age: 19 },
    { name: 'Anna', id: 2, age: 24 },
    { name: 'Pietro', id: 3, age: 21 },
    { name: 'Federico', id: 2, age: 17 },
  ],
}) {
  const filteredArray = useMemo(
    () =>
      users
        .filter((person) => person.age >= 18)
        .map((item) => (
          <div key={Math.random()}>
            <h3>
              {item.name}-{item.age}
            </h3>
          </div>
        )),
    [users],
  );

  return <div>{filteredArray}</div>;
}
