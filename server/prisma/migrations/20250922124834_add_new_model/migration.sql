-- CreateTable
CREATE TABLE "public"."ModelDetail" (
    "id" SERIAL NOT NULL,
    "carModelId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "previewImages" TEXT[],

    CONSTRAINT "ModelDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ModelDetail_carModelId_key" ON "public"."ModelDetail"("carModelId");

-- AddForeignKey
ALTER TABLE "public"."ModelDetail" ADD CONSTRAINT "ModelDetail_carModelId_fkey" FOREIGN KEY ("carModelId") REFERENCES "public"."CarModels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
