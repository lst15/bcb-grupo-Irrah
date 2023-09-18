-- CreateTable
CREATE TABLE "message_has_platform" (
    "message_has_platform_id" SERIAL NOT NULL,
    "Platform_platform_id" INTEGER NOT NULL,
    "Message_message_id" INTEGER NOT NULL,

    CONSTRAINT "message_has_platform_pkey" PRIMARY KEY ("message_has_platform_id")
);

-- AddForeignKey
ALTER TABLE "message_has_platform" ADD CONSTRAINT "message_has_platform_Platform_platform_id_fkey" FOREIGN KEY ("Platform_platform_id") REFERENCES "platform"("platform_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message_has_platform" ADD CONSTRAINT "message_has_platform_Message_message_id_fkey" FOREIGN KEY ("Message_message_id") REFERENCES "Message"("message_id") ON DELETE RESTRICT ON UPDATE CASCADE;
