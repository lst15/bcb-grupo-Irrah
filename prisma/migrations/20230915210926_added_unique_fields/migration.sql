/*
  Warnings:

  - You are about to drop the column `sent_date` on the `message` table. All the data in the column will be lost.
  - You are about to drop the column `createdat` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `client` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpf]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[company_cnpj]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `is_whatsapp` on the `message` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "message" DROP COLUMN "sent_date",
DROP COLUMN "is_whatsapp",
ADD COLUMN     "is_whatsapp" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "createdat";

-- CreateIndex
CREATE UNIQUE INDEX "client_user_id_key" ON "client"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_cpf_key" ON "user"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_phone_key" ON "user"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "user_company_cnpj_key" ON "user"("company_cnpj");
