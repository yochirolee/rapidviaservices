import React from "react";
import Image from "next/image";
import { heroDetails } from "@/data/hero";
import { BiCheckShield } from "react-icons/bi";

const Hero: React.FC = () => {
	return (
		<section
			id="hero"
			className="relative flex items-center justify-center pb-0 pt-20 md:pt-40 px-5"
		>
			<div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
				<div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
			</div>
			<div className="container  grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between items-center mx-auto">
				<div className="mx-auto items-center justify-center h-full w-full  bg-cover bg-center border-gray-300 lgrounded-full mx-left">
					<Image
						className=" lg:rounded-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]"
						src={heroDetails.centerImageSrc}
						alt="Hero Image"
						width={600}
						height={600}
					/>
				</div>
				<div className="flex flex-col text-center space-y-8  p-4">
					<h1 className="text-4xl text-primary font-mono md:text-6xl md:leading-tight font-bold  max-w-lg md:max-w-2xl ">
						Rapid Via Services
					</h1>
					<h2 className="text-xl md:text-4xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl ">
						{heroDetails.heading}
					</h2>
					<p className=" text-foreground  ">{heroDetails.subheading}</p>

					<div className="flex border border-dashed bg-gray-100 border-gray-300 rounded-lg p-4  w-full items-center justify-between  gap-4 mx-auto">
						<p className="text-sm flex flex-col gap-2 items-center text-gray-500">
							<BiCheckShield className="w-6 h-6" />
							Seguridad y confianza
						</p>
						<div className="flex flex-col justify-center  text-red-500 font-bold gap-2 text-sm  ">
							<BiCheckShield className="w-6 h-6 mx-auto" />
							<p>Profesionales certificados</p>
						</div>
						<p className="text-sm flex flex-col gap-2 items-center text-gray-500">
							<BiCheckShield className="w-6  h-6" />
							Atención personalizada
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
