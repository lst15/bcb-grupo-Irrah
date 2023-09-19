/*
  Warnings:

  - You are about to drop the column `allow_consume` on the `client` table. All the data in the column will be lost.
  - You are about to drop the column `credits` on the `client` table. All the data in the column will be lost.
  - You are about to drop the column `current_consume` on the `client` table. All the data in the column will be lost.
  - You are about to drop the column `plan_type` on the `client` table. All the data in the column will be lost.
  - Added the required column `Plan_plan_id` to the `client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_allow_consume` to the `client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_credits` to the `client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_current_consume` to the `client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "client" DROP COLUMN "allow_consume",
DROP COLUMN "credits",
DROP COLUMN "current_consume",
DROP COLUMN "plan_type",
ADD COLUMN     "Plan_plan_id" INTEGER NOT NULL,
ADD COLUMN     "client_allow_consume" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "client_credits" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "client_current_consume" DOUBLE PRECISION NOT NULL;

-- AddForeignKey
ALTER TABLE "client" ADD CONSTRAINT "client_Plan_plan_id_fkey" FOREIGN KEY ("Plan_plan_id") REFERENCES "plan"("plan_id") ON DELETE RESTRICT ON UPDATE CASCADE;
