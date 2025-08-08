/*
  Warnings:

  - You are about to drop the `AccountMapping` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."AccountMapping" DROP CONSTRAINT "AccountMapping_reportAccountId_fkey";

-- DropForeignKey
ALTER TABLE "public"."AccountMapping" DROP CONSTRAINT "AccountMapping_statementLineItemId_fkey";

-- DropTable
DROP TABLE "public"."AccountMapping";
