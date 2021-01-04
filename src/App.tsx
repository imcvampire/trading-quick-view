import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import {
  FirebaseAppProvider,
} from 'reactfire'
import { Container } from '@material-ui/core'

import Home from 'Home'

const firebaseConfig = {
  apiKey: 'AIzaSyCbskDUoHgwlR7ojxFEjgvFemgZOvUIqwE',
  authDomain: 'trading-quick-view.firebaseapp.com',
  projectId: 'trading-quick-view',
  storageBucket: 'trading-quick-view.appspot.com',
  messagingSenderId: '315619587442',
  appId: '1:315619587442:web:599998da2d6394a897d9eb',
  measurementId: 'G-0CX17K82PQ',
}

function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Container maxWidth="md">
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Container>
    </FirebaseAppProvider>
  )
}

export default App
