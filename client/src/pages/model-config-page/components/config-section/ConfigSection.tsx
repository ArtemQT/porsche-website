import {ModelConfig} from "../../../../modules/model-config";
import type {FC} from "react";

interface ConfigSectionProps {
	modelPrice: number | undefined;
	isModelLoading: boolean;
}

export const ConfigSection:FC<ConfigSectionProps> = ({modelPrice, isModelLoading}) => {
	return (
		<section className='section'>
			<ModelConfig modelPrice={modelPrice}
						 isModelLoading={isModelLoading}
			/>
		</section>
	)
}