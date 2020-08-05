import React from 'react';
import '../css/styles.css';

export default function Home() {
	return (
		<div class="flex h-screen items-center">
			<div class="w-1/2 text-right mx-2">
				<div className="text-left relative inline-block">
					<h1 className="bukhari text-4xl absolute left-0" style={{ top: '-3.5rem' }}>
						Films
					</h1>
					<div className="overflow-hidden">
						<img
							className="inline-block transform hover:scale-110 transition-all ease-in duration-700"
							src={require('../images/11.png')}
							alt=""
						/>
					</div>
				</div>
			</div>
			<div class="w-1/2 text-left mx-2">
				<div className="text-right inline-block relative">
					<div className="overflow-hidden">
						<img
							className="inline-block transform hover:scale-110 transition-all ease-in duration-700"
							src={require('../images/22.png')}
							alt=""
						/>
					</div>
					<h1 className="bukhari text-4xl absolute right-0">Photo Feature</h1>
				</div>
			</div>
		</div>
	);
}
