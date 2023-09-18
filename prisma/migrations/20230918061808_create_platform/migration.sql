-- CreateTable
CREATE TABLE "Platform" (
    "platform_id" SERIAL NOT NULL,
    "platform_name" INTEGER NOT NULL,
    "platform_cost" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Platform_pkey" PRIMARY KEY ("platform_id")
);
