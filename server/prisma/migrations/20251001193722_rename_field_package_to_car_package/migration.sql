/*
  Warnings:

  - You are about to drop the column `package` on the `UserConfig` table. All the data in the column will be lost.
  - Added the required column `carPackage` to the `UserConfig` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."UserConfig" DROP COLUMN "package",
ADD COLUMN     "carPackage" JSONB NOT NULL;
