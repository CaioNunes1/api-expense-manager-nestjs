-- DropForeignKey
ALTER TABLE "Expenses" DROP CONSTRAINT "Expenses_categoryId_fkey";

-- AddForeignKey
ALTER TABLE "Expenses" ADD CONSTRAINT "Expenses_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
