export const validateBody = (body: any) => {
	return body.config &&
		body.config.exterior &&
		body.config.wheels &&
		body.config.interior &&
		body.config.carPackage &&
		body.config.exhaust &&
		body.config.configPrice !== undefined &&
		body.config.totalPrice !== undefined &&
		body.modelId !== undefined
}