-- CreateEnum
CREATE TYPE "public"."StatementCategoryType" AS ENUM ('REVENUE', 'COGS', 'OPERATING_REVENUE', 'NON_OPERATING_REVENUE', 'OPERATING_EXPENSE', 'NON_OPERATING_EXPENSE');

-- CreateEnum
CREATE TYPE "public"."ReportAccountType" AS ENUM ('INCOME', 'EXPENSE', 'COGS', 'OTHER');

-- CreateTable
CREATE TABLE "public"."Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "currency" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Period" (
    "id" SERIAL NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Period_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."StatementCategory" (
    "id" SERIAL NOT NULL,
    "statementId" INTEGER NOT NULL,
    "type" "public"."StatementCategoryType" NOT NULL,
    "name" TEXT NOT NULL,
    "totalValue" DOUBLE PRECISION,

    CONSTRAINT "StatementCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."StatementLineItem" (
    "id" SERIAL NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "parentLineItemId" INTEGER,
    "name" TEXT NOT NULL,
    "value" DOUBLE PRECISION,
    "accountId" TEXT,

    CONSTRAINT "StatementLineItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Statement" (
    "id" SERIAL NOT NULL,
    "companyId" INTEGER NOT NULL,
    "periodId" INTEGER NOT NULL,
    "rootfiId" INTEGER NOT NULL,
    "grossProfit" DOUBLE PRECISION,
    "operatingProfit" DOUBLE PRECISION,
    "netProfit" DOUBLE PRECISION,
    "earningsBeforeTaxes" DOUBLE PRECISION,
    "taxes" DOUBLE PRECISION,
    "customFields" JSONB,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Statement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ReportHeader" (
    "id" SERIAL NOT NULL,
    "companyId" INTEGER NOT NULL,
    "reportName" TEXT NOT NULL,
    "basis" TEXT NOT NULL,
    "startPeriod" TIMESTAMP(3) NOT NULL,
    "endPeriod" TIMESTAMP(3) NOT NULL,
    "currency" TEXT,
    "options" JSONB,

    CONSTRAINT "ReportHeader_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ReportAccountValue" (
    "id" SERIAL NOT NULL,
    "accountId" INTEGER NOT NULL,
    "periodId" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION,

    CONSTRAINT "ReportAccountValue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AccountMapping" (
    "id" SERIAL NOT NULL,
    "statementLineItemId" INTEGER NOT NULL,
    "reportAccountId" INTEGER NOT NULL,
    "notes" TEXT,

    CONSTRAINT "AccountMapping_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ReportAccount" (
    "id" SERIAL NOT NULL,
    "reportId" INTEGER NOT NULL,
    "accountName" TEXT NOT NULL,
    "parentAccountId" INTEGER,
    "type" "public"."ReportAccountType",

    CONSTRAINT "ReportAccount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Period_label_idx" ON "public"."Period"("label");

-- CreateIndex
CREATE UNIQUE INDEX "Period_startDate_endDate_key" ON "public"."Period"("startDate", "endDate");

-- CreateIndex
CREATE INDEX "StatementCategory_statementId_type_idx" ON "public"."StatementCategory"("statementId", "type");

-- CreateIndex
CREATE INDEX "Statement_companyId_periodId_idx" ON "public"."Statement"("companyId", "periodId");

-- CreateIndex
CREATE UNIQUE INDEX "Statement_companyId_periodId_key" ON "public"."Statement"("companyId", "periodId");

-- CreateIndex
CREATE INDEX "ReportHeader_companyId_idx" ON "public"."ReportHeader"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "ReportHeader_companyId_startPeriod_endPeriod_key" ON "public"."ReportHeader"("companyId", "startPeriod", "endPeriod");

-- CreateIndex
CREATE INDEX "ReportAccountValue_periodId_idx" ON "public"."ReportAccountValue"("periodId");

-- CreateIndex
CREATE UNIQUE INDEX "ReportAccountValue_accountId_periodId_key" ON "public"."ReportAccountValue"("accountId", "periodId");

-- CreateIndex
CREATE INDEX "AccountMapping_statementLineItemId_reportAccountId_idx" ON "public"."AccountMapping"("statementLineItemId", "reportAccountId");

-- CreateIndex
CREATE INDEX "ReportAccount_reportId_type_idx" ON "public"."ReportAccount"("reportId", "type");

-- CreateIndex
CREATE INDEX "ReportAccount_accountName_idx" ON "public"."ReportAccount"("accountName");

-- AddForeignKey
ALTER TABLE "public"."StatementCategory" ADD CONSTRAINT "StatementCategory_statementId_fkey" FOREIGN KEY ("statementId") REFERENCES "public"."Statement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."StatementLineItem" ADD CONSTRAINT "StatementLineItem_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."StatementCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."StatementLineItem" ADD CONSTRAINT "StatementLineItem_parentLineItemId_fkey" FOREIGN KEY ("parentLineItemId") REFERENCES "public"."StatementLineItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Statement" ADD CONSTRAINT "Statement_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "public"."Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Statement" ADD CONSTRAINT "Statement_periodId_fkey" FOREIGN KEY ("periodId") REFERENCES "public"."Period"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ReportHeader" ADD CONSTRAINT "ReportHeader_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "public"."Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ReportAccountValue" ADD CONSTRAINT "ReportAccountValue_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "public"."ReportAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ReportAccountValue" ADD CONSTRAINT "ReportAccountValue_periodId_fkey" FOREIGN KEY ("periodId") REFERENCES "public"."Period"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AccountMapping" ADD CONSTRAINT "AccountMapping_statementLineItemId_fkey" FOREIGN KEY ("statementLineItemId") REFERENCES "public"."StatementLineItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AccountMapping" ADD CONSTRAINT "AccountMapping_reportAccountId_fkey" FOREIGN KEY ("reportAccountId") REFERENCES "public"."ReportAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ReportAccount" ADD CONSTRAINT "ReportAccount_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "public"."ReportHeader"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ReportAccount" ADD CONSTRAINT "ReportAccount_parentAccountId_fkey" FOREIGN KEY ("parentAccountId") REFERENCES "public"."ReportAccount"("id") ON DELETE SET NULL ON UPDATE CASCADE;
