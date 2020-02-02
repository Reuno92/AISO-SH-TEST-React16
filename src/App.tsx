import React, {FC, useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import TablePerson from './components/TablePerson';
import {Person} from './model/Person';

const App: FC = () => {

  const [data, setData] = useState(Array<Person>());
  const url: string = 'http://localhost:3000/persons';

  useEffect( function initialRequestData() {
    fetch(url)
      .then((res: Response) => res.json())
      .then((data: any) => setData(data));
  }, [url]);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className="container">
        <TablePerson data={data} />
      </main>
      <footer>

      </footer>
    </div>
  );
};

export default App;
