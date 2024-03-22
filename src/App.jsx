import React from 'react';
import Base from './components/Base';
import Foreground from './components/Foreground';
import Box from './components/Box';

function App() {
	return (
		<div className='relative w-full h-screen bg-[#08090A]'>
			{/* <div className="abosolute">
        <Base />
      </div> */}
			<Foreground />
			<Box />
		</div>
	);
}

export default App;
