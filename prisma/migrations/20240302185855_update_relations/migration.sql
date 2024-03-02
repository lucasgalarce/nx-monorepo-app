/*
  Warnings:

  - You are about to drop the column `userId` on the `Listing` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Listing" DROP CONSTRAINT "Listing_userId_fkey";

-- AlterTable
ALTER TABLE "Listing" DROP COLUMN "userId";
