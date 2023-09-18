/*
  Warnings:

  - You are about to drop the column `user_id` on the `client` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `message` table. All the data in the column will be lost.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `company_cnpj` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `company_name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `cpf` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[User_user_uuid]` on the table `client` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_uuid]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_cpf]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_email]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_phone]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_company_cnpj]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `User_user_uuid` to the `client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `User_user_uuid` to the `message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_company_cnpj` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_company_name` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_cpf` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_email` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_name` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_phone` to the `user` table without a default value. This is not possible if the table is not empty.
  - The required column `user_uuid` was added to the `user` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "client" DROP CONSTRAINT "client_user_id_fkey";

-- DropForeignKey
ALTER TABLE "message" DROP CONSTRAINT "message_user_id_fkey";

-- DropIndex
DROP INDEX "client_user_id_key";

-- DropIndex
DROP INDEX "user_company_cnpj_key";

-- DropIndex
DROP INDEX "user_cpf_key";

-- DropIndex
DROP INDEX "user_email_key";

-- DropIndex
DROP INDEX "user_phone_key";

-- AlterTable
ALTER TABLE "client" DROP COLUMN "user_id",
ADD COLUMN     "User_user_uuid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "message" DROP COLUMN "user_id",
ADD COLUMN     "User_user_uuid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP CONSTRAINT "user_pkey",
DROP COLUMN "company_cnpj",
DROP COLUMN "company_name",
DROP COLUMN "cpf",
DROP COLUMN "email",
DROP COLUMN "name",
DROP COLUMN "phone",
DROP COLUMN "user_id",
ADD COLUMN     "user_company_cnpj" TEXT NOT NULL,
ADD COLUMN     "user_company_name" TEXT NOT NULL,
ADD COLUMN     "user_cpf" TEXT NOT NULL,
ADD COLUMN     "user_createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "user_email" TEXT NOT NULL,
ADD COLUMN     "user_name" TEXT NOT NULL,
ADD COLUMN     "user_phone" TEXT NOT NULL,
ADD COLUMN     "user_uuid" TEXT NOT NULL,
ADD CONSTRAINT "user_pkey" PRIMARY KEY ("user_uuid");

-- CreateIndex
CREATE UNIQUE INDEX "client_User_user_uuid_key" ON "client"("User_user_uuid");

-- CreateIndex
CREATE UNIQUE INDEX "user_user_uuid_key" ON "user"("user_uuid");

-- CreateIndex
CREATE UNIQUE INDEX "user_user_cpf_key" ON "user"("user_cpf");

-- CreateIndex
CREATE UNIQUE INDEX "user_user_email_key" ON "user"("user_email");

-- CreateIndex
CREATE UNIQUE INDEX "user_user_phone_key" ON "user"("user_phone");

-- CreateIndex
CREATE UNIQUE INDEX "user_user_company_cnpj_key" ON "user"("user_company_cnpj");

-- AddForeignKey
ALTER TABLE "client" ADD CONSTRAINT "client_User_user_uuid_fkey" FOREIGN KEY ("User_user_uuid") REFERENCES "user"("user_uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_User_user_uuid_fkey" FOREIGN KEY ("User_user_uuid") REFERENCES "user"("user_uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
