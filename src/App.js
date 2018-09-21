import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="conte">
        <div className="conte2">
          <Form>
            <Form.Field>
              <label>Correo</label>
              <input placeholder='Correo' />
            </Form.Field>
            <Form.Field>
              <label>Pasword</label>
              <input placeholder='Password' />
            </Form.Field>
            <Button type='submit'>Aceptar</Button>
         </Form>

        </div>
      </div>
    );
  }
}

export default App;
