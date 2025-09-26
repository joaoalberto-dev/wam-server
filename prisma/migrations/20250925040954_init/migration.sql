-- CreateTable
CREATE TABLE "public"."Waitlist" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN DEFAULT false,

    CONSTRAINT "Waitlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Signup" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "waitlistId" INTEGER NOT NULL,

    CONSTRAINT "Signup_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Signup" ADD CONSTRAINT "Signup_waitlistId_fkey" FOREIGN KEY ("waitlistId") REFERENCES "public"."Waitlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
