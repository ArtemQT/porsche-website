import {prisma} from "./prisma.js";

export async function seed() {
	try {
		await prisma.$connect();
		const count = await prisma.carModels.count();

		if (count > 0) {
			console.log("Data already exists — skipping seed.");
			return;
		}

		// Вставка CarModels
		await prisma.carModels.createMany({
			data: [
				{ id: 1, modelSeries: 'SERIES_911', modelName: '911 Carrera GTS', modelAcceleration: '3.0s', topSpeed: '312 km/h', fuelType: 'Petrol', powerKwKp: '398 kW / 541 PS', modelImage: '911/carrera-gts.avif' },
				{ id: 2, modelSeries: 'SERIES_911', modelName: '911 GT3 RS', modelAcceleration: '3.2s', topSpeed: '330 km/h', fuelType: 'Petrol', powerKwKp: '386 kW / 525 PS', modelImage: '911/gt3-rs.avif' },
				{ id: 3, modelSeries: 'SERIES_911', modelName: '911 GT3', modelAcceleration: '3.4s', topSpeed: '311 km/h', fuelType: 'Petrol', powerKwKp: '375 kW / 510 PS', modelImage: '911/gt3.avif' },
				{ id: 4, modelSeries: 'SERIES_911', modelName: '911 Carrera', modelAcceleration: '3.9s', topSpeed: '294 km/h', fuelType: 'Petrol', powerKwKp: '290 kW / 394 PS', modelImage: '911/carrera.avif' },
				{ id: 5, modelSeries: 'SERIES_911', modelName: '911 Turbo S', modelAcceleration: '2.7s', topSpeed: '330 km/h', fuelType: 'Petrol', powerKwKp: '478 kW / 650 PS', modelImage: '911/turbo-s.avif' },
				{ id: 6, modelSeries: 'SERIES_911', modelName: '911 Carrera GTS Cabriolet', modelAcceleration: '3.1s', topSpeed: '312 km/h', fuelType: 'Petrol', powerKwKp: '398 kW / 541 PS', modelImage: '911/carrera-gts-cabriolet.avif' },
				{ id: 7, modelSeries: 'SERIES_718', modelName: '718 Cayman GT4 RS', modelAcceleration: '3.4s', topSpeed: '315 km/h', fuelType: 'Petrol', powerKwKp: '368 kW / 500 PS', modelImage: '718/cayman-gt4-rs.avif' },
				{ id: 8, modelSeries: 'SERIES_718', modelName: '718 Spyder RS', modelAcceleration: '3.4s', topSpeed: '308 km/h', fuelType: 'Petrol', powerKwKp: '368 kW / 500 PS', modelImage: '718/spyder-rs.avif' },
				{ id: 9, modelSeries: 'SERIES_718', modelName: '718 Cayman', modelAcceleration: '5.1s', topSpeed: '275 km/h', fuelType: 'Petrol', powerKwKp: '200 kW / 300 PS', modelImage: '718/cayman.avif' },
				{ id: 10, modelSeries: 'SERIES_718', modelName: '718 Boxter', modelAcceleration: '5.0s', topSpeed: '275 km/h', fuelType: 'Petrol', powerKwKp: '200 kW / 300 PS', modelImage: '718/boxter.avif' },
				{ id: 11, modelSeries: 'SERIES_718', modelName: '718 Cayman GTS 4.0', modelAcceleration: '4.5s', topSpeed: '293 km/h', fuelType: 'Petrol', powerKwKp: '294 kW / 400 PS', modelImage: '718/cayman-gts.avif' },
				{ id: 12, modelSeries: 'SERIES_718', modelName: '718 Boxter GTS 4.0', modelAcceleration: '4.4s', topSpeed: '293 km/h', fuelType: 'Petrol', powerKwKp: '294 kW / 400 PS', modelImage: '718/boxter-gts.avif' }
			]
		})

		// Вставка ModelDetail
		await prisma.modelDetail.createMany({
			data: [
				{ carModelId: 1, price: 111600, previewImages: ["/911/carrera-gts/preview(1).avif", "/911/carrera-gts/preview(2).avif"] },
				{ carModelId: 2, price: 194900, previewImages: ["/911/gt3-rs/preview(1).avif", "/911/gt3-rs/preview(2).avif"] },
				{ carModelId: 3, price: 163500, previewImages: ["/911/gt3/preview(1).avif", "/911/gt3/preview(2).avif"] },
				{ carModelId: 4, price: 163500, previewImages: ["/911/carrera/preview(1).avif", "/911/carrera/preview(2).avif"] },
				{ carModelId: 5, price: 180200, previewImages: ["/911/turbo-s/preview(1).avif", "/911/turbo-s/preview(2).avif"] },
				{ carModelId: 6, price: 121000, previewImages: ["/911/carrera-gts-cabriolet/preview(1).avif", "/911/carrera-gts-cabriolet/preview(2).avif"] },
				{ carModelId: 7, price: 128200, previewImages: ["/718/cayman-gt4-rs/preview(1).avif", "/718/cayman-gt4-rs/preview(2).avif"] },
				{ carModelId: 8, price: 135200, previewImages: ["/718/spyder-rs/preview(1).avif", "/718/spyder-rs/preview(2).avif"] },
				{ carModelId: 9, price: 51300, previewImages: ["/718/cayman/preview(1).avif", "/718/cayman/preview(2).avif"] },
				{ carModelId: 10, price: 56000, previewImages: ["/718/boxter/preview(1).avif", "/718/boxter/preview(2).avif"] },
				{ carModelId: 11, price: 71200, previewImages: ["/718/cayman-gts/preview(1).avif", "/718/cayman-gts/preview(2).avif"] },
				{ carModelId: 12, price: 75800, previewImages: ["/718/boxter-gts/preview(1).avif", "/718/boxter-gts/preview(2).avif"] }
			]
		})

		console.log("All data seeded successfully!");
	} catch (err) {
		console.error("Seed failed:", err);
		process.exitCode = 1;
	} finally {
		await prisma.$disconnect();
	}
}

seed()
