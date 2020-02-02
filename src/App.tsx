import React, {FC, useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TablePerson from './components/TablePerson'

const App: FC = () => {

  const [data, setData] = useState(Array<any>());
  const url: string = 'http://localhost:3000/person';

  useEffect( function initialRequestData() {
    fetch(url)
      .then((res: Response) => res.json())
      .then((data: any) => setData(data));
  });

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className="container">
        <TablePerson />
      </main>
      <footer>

      </footer>
    </div>
  );
};

export default App;
