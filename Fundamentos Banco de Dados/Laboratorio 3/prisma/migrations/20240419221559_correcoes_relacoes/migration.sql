/*
  Warnings:

  - You are about to alter the column `data_hora_compra` on the `compra` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- DropForeignKey
ALTER TABLE `compra` DROP FOREIGN KEY `compra_codigo_enderecos_fkey`;

-- DropForeignKey
ALTER TABLE `item_compra` DROP FOREIGN KEY `item_compra_codigo_produto_fkey`;

-- DropForeignKey
ALTER TABLE `subcategoria` DROP FOREIGN KEY `subcategoria_codigo_categoria_fkey`;

-- AlterTable
ALTER TABLE `compra` MODIFY `data_hora_compra` DATETIME NOT NULL,
    MODIFY `codigo_enderecos` INTEGER NULL;

-- AlterTable
ALTER TABLE `item_compra` MODIFY `codigo_produto` INTEGER NULL;

-- AlterTable
ALTER TABLE `subcategoria` MODIFY `codigo_categoria` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `subcategoria` ADD CONSTRAINT `subcategoria_codigo_categoria_fkey` FOREIGN KEY (`codigo_categoria`) REFERENCES `categoria`(`codigo`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `item_compra` ADD CONSTRAINT `item_compra_codigo_produto_fkey` FOREIGN KEY (`codigo_produto`) REFERENCES `produto`(`codigo`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compra` ADD CONSTRAINT `compra_codigo_enderecos_fkey` FOREIGN KEY (`codigo_enderecos`) REFERENCES `endereco`(`codigo`) ON DELETE SET NULL ON UPDATE CASCADE;
