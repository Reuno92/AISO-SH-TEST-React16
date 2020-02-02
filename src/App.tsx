import React, {FC} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';

const App: FC = () => {
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
