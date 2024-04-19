CREATE TABLE cliente (
    nome_completo VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL,
    cpf VARCHAR(14) PRIMARY KEY ,
    celular VARCHAR(20) NOT NULL
);

CREATE TABLE categoria (
    codigo INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE numeros_serie (
    codigo INTEGER PRIMARY KEY AUTO_INCREMENT,
    numero_serie VARCHAR(50) NOT NULL
);

CREATE TABLE forma_pagamento (
    codigo INTEGER PRIMARY KEY AUTO_INCREMENT,
    pagamento_tipo VARCHAR(50) NOT NULL
);

CREATE TABLE subcategoria (
    codigo INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) UNIQUE NOT NULL,
    codigo_categoria INTEGER NOT NULL,

    FOREIGN KEY (codigo_categoria) REFERENCES categoria(codigo)
);

CREATE TABLE produto (
	codigo INTEGER PRIMARY KEY AUTO_INCREMENT,
    modelo VARCHAR(50) NOT NULL,
    fabricante VARCHAR(50) NOT NULL,
    preco_base DECIMAL(10, 2) NOT NULL,
    qtd_disponivel INTEGER NOT NULL,
    codigo_subcategoria INTEGER NOT NULL,
    codigo_numeros_serie INTEGER,

    FOREIGN KEY (codigo_subcategoria) references subcategoria(codigo),
    FOREIGN KEY (codigo_numeros_serie) references numeros_serie(codigo)
);

CREATE TABLE enderecos (
    codigo INTEGER PRIMARY KEY AUTO_INCREMENT,
    cidade VARCHAR(50) NOT NULL,
    bairro VARCHAR(50) NOT NULL,
    rua VARCHAR(50) NOT NULL,
    numero INTEGER NOT NULL,
    cpf_cliente VARCHAR(20) NOT NULL,

    FOREIGN KEY (cpf_cliente) REFERENCES cliente(cpf)
);


CREATE TABLE compra (
    codigo INTEGER PRIMARY KEY AUTO_INCREMENT,
    data_hora_compra DATETIME NOT NULL,
    desconto_aplicado DECIMAL(3, 2) NOT NULL,
    codigo_forma_pagamento INTEGER NOT NULL,
    cpf_cliente VARCHAR(20) NOT NULL,
    cep VARCHAR(10) NOT NULL,
    codigo_enderecos INTEGER NOT NULL,

    FOREIGN KEY (codigo_forma_pagamento) REFERENCES forma_pagamento(codigo),
    FOREIGN KEY (cpf_cliente) REFERENCES cliente(cpf),
    FOREIGN KEY (codigo_enderecos) REFERENCES enderecos(codigo)
);

CREATE TABLE item_compra (
    codigo INTEGER PRIMARY KEY AUTO_INCREMENT,
    quantidade INTEGER NOT NULL,
    codigo_produto INTEGER NOT NULL,
    codigo_compra INTEGER NOT NULL,
    FOREIGN KEY (codigo_produto) REFERENCES produto(codigo),
    FOREIGN KEY (codigo_compra) REFERENCES compra(codigo)
);