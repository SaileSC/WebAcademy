CREATE TABLE cliente (
    nome_completo VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL,
    cpf VARCHAR(14) PRIMARY KEY ,
    celular VARCHAR(20) NOT NULL
);

CREATE TABLE categoria (
    codigo INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE numeros_serie (
    codigo INTEGER PRIMARY KEY AUTO_INCREMENT,
    numero_serie VARCHAR(50) NOT NULL
);

CREATE TABLE subcategoria (
    codigo INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    codigo_categoria INTEGER NOT NULL,

    FOREIGN KEY (codigo_categoria) REFERENCES categoria(codigo)
);

CREATE TABLE produto (
	codigo INTEGER PRIMARY KEY AUTO_INCREMENT,
    modelo VARCHAR(100) NOT NULL,
    fabricante VARCHAR(100) NOT NULL,
    preco_base DECIMAL NOT NULL,
    qtd_disponivel INTEGER NOT NULL,
    codigo_subcategoria INTEGER NOT NULL,
    codigo_numeros_serie INTEGER,

    FOREIGN KEY (codigo_subcategoria) references subcategoria(codigo),
    FOREIGN KEY (codigo_numeros_serie) references numeros_serie(codigo)
);

CREATE TABLE enderecos (
    codigo INTEGER PRIMARY KEY AUTO_INCREMENT,
    cidade VARCHAR(100) NOT NULL,
    bairro VARCHAR(100) NOT NULL,
    rua VARCHAR(100) NOT NULL,
    numero INTEGER NOT NULL,
    cpf_cliente VARCHAR(20) NOT NULL,

    FOREIGN KEY (cpf_cliente) REFERENCES cliente(cpf)
);


CREATE TABLE compra (
    codigo INTEGER PRIMARY KEY AUTO_INCREMENT,
    data_hora_compra DATE NOT NULL,
    desconto_aplicado FLOAT(100,1) NOT NULL,
    forma_pagamento VARCHAR(100) NOT NULL,
    total_compra DECIMAL NOT NULL, 
    cpf_cliente VARCHAR(20) NOT NULL, 
    codigo_enderecos INTEGER NOT NULL,

    FOREIGN KEY (cpf_cliente) REFERENCES cliente(cpf),
    FOREIGN KEY (codigo_enderecos) REFERENCES enderecos(codigo)
);

CREATE TABLE item_compra (
    codigo INTEGER PRIMARY KEY,
    quantidade INTEGER NOT NULL,
    codigo_produto INTEGER NOT NULL,
    codigo_compra INTEGER NOT NULL,
    FOREIGN KEY (codigo_produto) REFERENCES produto(codigo),
    FOREIGN KEY (codigo_compra) REFERENCES compra(codigo)
);