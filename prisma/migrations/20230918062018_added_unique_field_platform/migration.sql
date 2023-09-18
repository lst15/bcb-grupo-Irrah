/*
  Warnings:

  - You are about to drop the `Platform` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Platform";

-- CreateTable
CREATE TABLE "platform" (
    "platform_id" SERIAL NOT NULL,
    "platform_name" INTEGER NOT NULL,
    "platform_cost" DOUBLE PRECISION NOT NULL,
    "platform_createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "platform_pkey" PRIMARY KEY ("platform_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "platform_platform_name_key" ON "platform"("platform_name");
