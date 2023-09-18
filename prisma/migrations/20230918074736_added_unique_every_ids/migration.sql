/*
  Warnings:

  - A unique constraint covering the columns `[message_id]` on the table `Message` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[client_id]` on the table `client` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[message_has_platform_id]` on the table `message_has_platform` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[platform_id]` on the table `platform` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Message_message_id_key" ON "Message"("message_id");

-- CreateIndex
CREATE UNIQUE INDEX "client_client_id_key" ON "client"("client_id");

-- CreateIndex
CREATE UNIQUE INDEX "message_has_platform_message_has_platform_id_key" ON "message_has_platform"("message_has_platform_id");

-- CreateIndex
CREATE UNIQUE INDEX "platform_platform_id_key" ON "platform"("platform_id");
