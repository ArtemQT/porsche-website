-- CreateEnum
CREATE TYPE "public"."ModelSeries" AS ENUM ('SERIES_911', 'SERIES_718');

-- CreateTable
CREATE TABLE "public"."CarModels" (
    "id" SERIAL NOT NULL,
    "modelSeries" "public"."ModelSeries" NOT NULL,
    "modelName" VARCHAR(255) NOT NULL,
    "modelAcceleration" VARCHAR(64) NOT NULL,
    "topSpeed" VARCHAR(64) NOT NULL,
    "fuelType" VARCHAR(64) NOT NULL,
    "powerKwKp" VARCHAR(64) NOT NULL,
    "modelImage" VARCHAR(64) NOT NULL,

    CONSTRAINT "CarModels_pkey" PRIMARY KEY ("id")
);
