import React from 'react';
import { Link } from 'gatsby';
import '../css/styles.css';

export default function Home() {
	return (
		<div className="flex flex-wrap md:flex-no-wrap h-screen items-center">
			<div className="w-full md:w-1/2 text-left mx-10 md:mx-2 mt-32 mb-16 md:mb-0 md:mt-0 md:text-right">
				<div className="text-left relative inline-block">
					<h1 className="bukhari text-3xl md:text-4xl absolute left-0" style={{ top: '-3rem' }}>
						Films
					</h1>

					<div className="overflow-hidden shadow-2xl">
						<Link to="/films">
							<img
								className="inline-block transform hover:scale-110 transition-all ease-in duration-700"
								src={require('../images/11.png')}
								alt=""
							/>
						</Link>
					</div>
				</div>
			</div>
			<div className="w-full md:w-1/2 text-left mx-10 md:mx-2">
				<div className="text-right inline-block relative">
					<div className="overflow-hidden shadow-2xl">
						<Link to="/photofeatures">
							<img
								className="inline-block transform hover:scale-110 transition-all ease-in duration-700"
								src={require('../images/22.png')}
								alt=""
							/>
						</Link>
					</div>
					<h1 className="bukhari text-3xl md:text-4xl absolute top-0 transform -translate-y-12 md:translate-y-0 md:top-auto md:right-0">
						Photo Feature
					</h1>
				</div>
			</div>
		</div>
	);
}
