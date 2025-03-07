import React from "react";

const CategoriesSlider = () => {
	return (
		<>
			<div className="pl-8 lg:pl-2">
				<div className="container items-center">
					<div className="w-full">
						<p className="text-black text-xl sm:text-2xl font-normal">
							Inicio / Catálogo / Paredes
						</p>
					</div>
				</div>
			</div>
			<div className="bg-add sm:ml-8 lg:ml-24 xl:ml-2 2xl:ml-8 md:mr-8 lg:mr-20 xl:mr-3 2xl:mr-10">
				<h2 className="text-4xl px-4 py-2 font-bold">Paredes</h2>
			</div>
			<section className="w-full xl:px-2 2xl:px-10">
				<div className="flex items-center justify-center mx-auto w-full space-x-8">
					<div className="relative flex flex-col items-start justify-center w-auto">
						<div className="relative flex">
							<div className="flex items-center justify-center w-10 h-10 text-black bg-white rounded-full cursor-pointer shadow-lg">
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15 19l-7-7 7-7"
									></path>
								</svg>
							</div>
						</div>
					</div>
					<div className="box-content relative flex items-center w-4/5 h-auto max-w-full py-5 overflow-hidden xl:w-full rounded-xl from-transparent via-transparent to-gray-100">
						<div className="flex w-full space-x-4 transition duration-500 ease-out transform h-94">
							<div className="flex flex-col flex-shrink-0 w-auto overflow-hidden rounded-lg shadow-slider cursor-pointer">
								<div className="flex flex-col justify-between flex-1 py-4 px-10 xl:px-14 bg-white">
									<div className="flex-1">
										<a href="#_" className="block text-center">
											<span className="text-xl 2xl:text-3xl font-normal leading-tight leading-7 text-black">
												Interiores
											</span>
										</a>
									</div>
								</div>
							</div>

							<div className="flex flex-col flex-shrink-0 w-auto overflow-hidden rounded-lg shadow-slider cursor-pointer">
								<div className="flex flex-col justify-between flex-1 py-4 px-10 xl:px-14 bg-white">
									<div className="flex-1">
										<a href="#_" className="block text-center">
											<span className="text-xl 2xl:text-3xl font-normal leading-tight leading-7 text-black">
												Exteriores
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className="flex flex-col flex-shrink-0 w-auto overflow-hidden rounded-lg shadow-slider cursor-pointer">
								<div className="flex flex-col justify-between flex-1 py-4 px-10 xl:px-14 bg-white">
									<div className="flex-1">
										<a href="#_" className="block text-center">
											<span className="text-xl 2xl:text-3xl font-normal leading-tight leading-7 text-black">
												Batientes
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className="flex flex-col flex-shrink-0 w-auto overflow-hidden rounded-lg shadow-slider cursor-pointer">
								<div className="flex flex-col justify-between flex-1 py-4 px-10 xl:px-14 bg-white">
									<div className="flex-1">
										<a href="#_" className="block text-center">
											<span className="text-xl 2xl:text-3xl font-normal leading-tight leading-7 text-black">
												Plegables
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div
							className="flex w-full space-x-8 transition duration-500 translate-x-4 ease-out transform h-94 overflow-hidden"
						>
							<div className="flex flex-col flex-shrink-0 w-auto overflow-hidden rounded-lg shadow-slider cursor-pointer">
								<div className="flex flex-col justify-between flex-1 py-4 px-10  xl:px-14 bg-white">
									<div className="flex-1">
										<a href="#_" className="block text-center">
											<span className="text-xl 2xl:text-3xl font-normal leading-tight leading-7 text-black">
												Interiores
											</span>
										</a>
									</div>
								</div>
							</div>

							<div className="flex flex-col flex-shrink-0 w-auto overflow-hidden rounded-lg shadow-slider cursor-pointer">
								<div className="flex flex-col justify-between flex-1 py-4 px-10  xl:px-14 bg-white">
									<div className="flex-1">
										<a href="#_" className="block text-center">
											<span className="text-xl 2xl:text-3xl font-normal leading-tight leading-7 text-black">
												Exteriores
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className="flex flex-col flex-shrink-0 w-auto overflow-hidden rounded-lg shadow-lg shadow-slider">
								<div className="flex flex-col justify-between flex-1 py-4 px-10 xl:px-14 bg-white">
									<div className="flex-1">
										<a href="#_" className="block text-center">
											<span className="text-xl 2xl:text-3xl font-normal leading-tight leading-7 text-black">
												Batientes
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className="flex flex-col flex-shrink-0 w-auto overflow-hidden rounded-lg shadow-slider cursor-pointer">
								<div className="flex flex-col justify-between flex-1 py-4 px-10 xl:px-14 xl:px-16 bg-white">
									<div className="flex-1">
										<a href="#_" className="block text-center">
											<span className="text-xl 2xl:text-3xl font-normal leading-tight leading-7 text-black">
												Plegables
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="relative flex flex-col items-end justify-center w-auto">
						<div className="relative flex space-x-2">
							<div className="flex items-center justify-center w-10 h-10 text-black bg-white rounded-full cursor-pointer shadow-lg">
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 5l7 7-7 7"
									></path>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default CategoriesSlider;
