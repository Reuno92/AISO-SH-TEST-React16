import React, {FC, useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';

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
        <Table striped bordered hover responsive>
          <thead>
          <tr>
            <th>
              test
            </th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                test
              </td>
            </tr>
          </tbody>
        </Table>
      </main>
      <footer>

      </footer>
    </div>
  );
};

export default App;
