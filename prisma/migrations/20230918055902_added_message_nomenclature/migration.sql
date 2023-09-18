/*
  Warnings:

  - You are about to drop the `message` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "message" DROP CONSTRAINT "message_User_user_uuid_fkey";

-- DropTable
DROP TABLE "message";

-- CreateTable
CREATE TABLE "Message" (
    "message_id" SERIAL NOT NULL,
    "message_text" TEXT NOT NULL,
    "message_to" TEXT NOT NULL,
    "User_user_uuid" TEXT NOT NULL,
    "message_sentAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("message_id")
);

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_User_user_uuid_fkey" FOREIGN KEY ("User_user_uuid") REFERENCES "user"("user_uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
