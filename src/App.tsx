import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TestBuildSC2 } from './pages/TestBuild/TestBuildSC2';
import styles from "./app.module.scss"
import { RaceTitle } from './pages/RaceSelectTitle/RaceTitle';
import { Build } from './pages/Build/Build';

const App: FC = () => {

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path='/'           element={<RaceTitle/>}    />
          <Route path='/test/:race' element={<TestBuildSC2/>} />
          <Route path='/Build'  element={<Build/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
