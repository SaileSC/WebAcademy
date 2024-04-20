-- CreateTable
CREATE TABLE `cliente` (
    `cpf` VARCHAR(14) NOT NULL,
    `nome_completo` VARCHAR(100) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `celular` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`cpf`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `forma_pagamento` (
    `codigo` INTEGER NOT NULL AUTO_INCREMENT,
    `pagamento_tipo` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `endereco` (
    `codigo` INTEGER NOT NULL AUTO_INCREMENT,
    `cep` VARCHAR(10) NOT NULL,
    `cidade` VARCHAR(50) NOT NULL,
    `bairro` VARCHAR(50) NOT NULL,
    `rua` VARCHAR(50) NOT NULL,
    `numero` INTEGER NOT NULL,
    `cpf_cliente` VARCHAR(14) NOT NULL,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categoria` (
    `codigo` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `categoria_nome_key`(`nome`),
    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subcategoria` (
    `codigo` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(50) NOT NULL,
    `codigo_categoria` INTEGER NOT NULL,

    UNIQUE INDEX `subcategoria_nome_key`(`nome`),
    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produto` (
    `codigo` INTEGER NOT NULL AUTO_INCREMENT,
    `modelo` VARCHAR(50) NOT NULL,
    `precoBase` DECIMAL(10, 2) NOT NULL,
    `qtdDisponivel` INTEGER NOT NULL,
    `codigo_subcategoria` INTEGER NOT NULL,
    `codigo_numeros_serie` INTEGER NULL,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `numeros_serie` (
    `codigo` INTEGER NOT NULL AUTO_INCREMENT,
    `numeroSerie` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `numeros_serie_numeroSerie_key`(`numeroSerie`),
    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `item_compra` (
    `codigo` INTEGER NOT NULL AUTO_INCREMENT,
    `quantidade` INTEGER NOT NULL,
    `codigo_produto` INTEGER NOT NULL,
    `codigo_compra` INTEGER NOT NULL,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `compra` (
    `codigo` INTEGER NOT NULL AUTO_INCREMENT,
    `data_hora_compra` DATETIME NOT NULL,
    `desconto_aplicado` DECIMAL(10, 2) NOT NULL,
    `cpf_cliente` VARCHAR(20) NOT NULL,
    `codigo_forma_pagamento` INTEGER NOT NULL,
    `codigo_enderecos` INTEGER NOT NULL,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `endereco` ADD CONSTRAINT `endereco_cpf_cliente_fkey` FOREIGN KEY (`cpf_cliente`) REFERENCES `cliente`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subcategoria` ADD CONSTRAINT `subcategoria_codigo_fkey` FOREIGN KEY (`codigo`) REFERENCES `categoria`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produto` ADD CONSTRAINT `produto_codigo_subcategoria_fkey` FOREIGN KEY (`codigo_subcategoria`) REFERENCES `subcategoria`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produto` ADD CONSTRAINT `produto_codigo_numeros_serie_fkey` FOREIGN KEY (`codigo_numeros_serie`) REFERENCES `numeros_serie`(`codigo`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `item_compra` ADD CONSTRAINT `item_compra_codigo_produto_fkey` FOREIGN KEY (`codigo_produto`) REFERENCES `produto`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `item_compra` ADD CONSTRAINT `item_compra_codigo_compra_fkey` FOREIGN KEY (`codigo_compra`) REFERENCES `compra`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compra` ADD CONSTRAINT `compra_cpf_cliente_fkey` FOREIGN KEY (`cpf_cliente`) REFERENCES `cliente`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compra` ADD CONSTRAINT `compra_codigo_forma_pagamento_fkey` FOREIGN KEY (`codigo_forma_pagamento`) REFERENCES `forma_pagamento`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compra` ADD CONSTRAINT `compra_codigo_enderecos_fkey` FOREIGN KEY (`codigo_enderecos`) REFERENCES `endereco`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;
