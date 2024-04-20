/*
  Warnings:

  - You are about to alter the column `data_hora_compra` on the `compra` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- DropForeignKey
ALTER TABLE `subcategoria` DROP FOREIGN KEY `subcategoria_codigo_fkey`;

-- AlterTable
ALTER TABLE `compra` MODIFY `data_hora_compra` DATETIME NOT NULL;

-- AddForeignKey
ALTER TABLE `subcategoria` ADD CONSTRAINT `subcategoria_codigo_categoria_fkey` FOREIGN KEY (`codigo_categoria`) REFERENCES `categoria`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;
