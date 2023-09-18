-- CreateTable
CREATE TABLE "plan" (
    "plan_id" SERIAL NOT NULL,
    "plan_name" TEXT NOT NULL,

    CONSTRAINT "plan_pkey" PRIMARY KEY ("plan_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "plan_plan_id_key" ON "plan"("plan_id");

-- CreateIndex
CREATE UNIQUE INDEX "plan_plan_name_key" ON "plan"("plan_name");
