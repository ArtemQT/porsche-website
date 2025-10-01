-- CreateTable
CREATE TABLE "public"."UserConfig" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "modelId" INTEGER NOT NULL,
    "exterior" JSONB NOT NULL,
    "wheels" JSONB NOT NULL,
    "interior" JSONB NOT NULL,
    "package" JSONB NOT NULL,
    "exhaust" JSONB NOT NULL,
    "configPrice" INTEGER NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    "configHash" TEXT NOT NULL,

    CONSTRAINT "UserConfig_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserConfig_configHash_key" ON "public"."UserConfig"("configHash");

-- AddForeignKey
ALTER TABLE "public"."UserConfig" ADD CONSTRAINT "UserConfig_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserConfig" ADD CONSTRAINT "UserConfig_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "public"."CarModels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
