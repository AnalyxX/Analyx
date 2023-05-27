-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE SCHEMA IF NOT EXISTS mydb DEFAULT CHARACTER SET utf8;
USE mydb;

CREATE TABLE IF NOT EXISTS mydb.Empresa (
  id INT PRIMARY KEY NOT NULL,
  cnpj CHAR(17) NOT NULL,
  razaoSocial VARCHAR(128) NOT NULL,
  responsavel VARCHAR(45) NOT NULL,
  email VARCHAR(256) NOT NULL,
  telefone CHAR(14)
);

CREATE TABLE IF NOT EXISTS mydb.EspecificacaoMaquina (
  id INT PRIMARY KEY NOT NULL,
  cpu VARCHAR(45) NOT NULL,
  disco VARCHAR(45) NOT NULL,
  ram TINYINT NOT NULL,
  numeroSerial VARCHAR(45) NOT NULL
);

CREATE TABLE IF NOT EXISTS `mydb`.`Funcionario` (
  `id` INT NOT NULL,
  `nome` VARCHAR(100) NULL,
  `matricula` VARCHAR(20) NULL,
  `setor` VARCHAR(45) NULL,
  `empresa` INT NOT NULL,
  `gestor` INT NOT NULL,
  `maquina` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Funcionario_Empresa1_idx` (`empresa`),
  INDEX `fk_Funcionario_Funcionario1_idx` (`gestor`),
  INDEX `fk_Funcionario_EspecificacaoMaquina1_idx` (`maquina`),
  CONSTRAINT `fk_Funcionario_Empresa1`
    FOREIGN KEY (`empresa`)
    REFERENCES `mydb`.`Empresa` (`id`),
  CONSTRAINT `fk_Funcionario_Funcionario1`
    FOREIGN KEY (`gestor`)
    REFERENCES `mydb`.`Funcionario` (`id`),
  CONSTRAINT `fk_Funcionario_EspecificacaoMaquina1`
    FOREIGN KEY (`maquina`)
    REFERENCES `mydb`.`EspecificacaoMaquina` (`id`)
);

CREATE TABLE IF NOT EXISTS `mydb`.`Usuario` (
  `id` INT NOT NULL,
  `email` VARCHAR(256) NULL,
  `senha` VARCHAR(256) NULL,
  `funcionario` INT NOT NULL,
  PRIMARY KEY (`id`, `funcionario`),
  INDEX `fk_Usuario_Funcionario1_idx` (`funcionario`),
  CONSTRAINT `fk_Usuario_Funcionario1`
    FOREIGN KEY (`funcionario`)
    REFERENCES `mydb`.`Funcionario` (`id`)
);

CREATE TABLE IF NOT EXISTS `mydb`.`Monitoramento` (
  `id` INT NOT NULL,
  `tempoOcioso` TIME NULL,
  `data` DATE NULL,
  `funcionario` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Monitoramento_Funcionario1_idx` (`funcionario`),
  CONSTRAINT `fk_Monitoramento_Funcionario1`
    FOREIGN KEY (`funcionario`)
    REFERENCES `mydb`.`Funcionario` (`id`)
);

CREATE TABLE IF NOT EXISTS `mydb`.`cpu` (
  `id` INT NOT NULL,
  `usoCpu` TINYINT NULL,
  `tempCpu` SMALLINT NULL,
  `threadsCpu` SMALLINT NULL,
  `monitoramento` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cpu_Monitoramento1_idx` (`monitoramento`),
  CONSTRAINT `fk_cpu_Monitoramento1`
    FOREIGN KEY (`monitoramento`)
    REFERENCES `mydb`.`Monitoramento` (`id`)
);

CREATE TABLE IF NOT EXISTS `mydb`.`ram` (
  `id` INT NOT NULL,
  `usoRam` TINYINT NULL,
  `tempRam` SMALLINT NULL,
  `monitoramento` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ram_Monitoramento1_idx` (`monitoramento`),
  CONSTRAINT `fk_ram_Monitoramento1`
    FOREIGN KEY (`monitoramento`)
    REFERENCES `mydb`.`Monitoramento` (`id`)
);

CREATE TABLE IF NOT EXISTS `mydb`.`rede` (
  `id` INT NOT NULL,
  `latenciaRede` INT NULL,
  `upload` VARCHAR(45) NULL,
  `download` VARCHAR(45) NULL,
  `monitoramento` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_rede_Monitoramento1_idx` (`monitoramento` ) ,
  CONSTRAINT `fk_rede_Monitoramento1`
    FOREIGN KEY (`monitoramento`)
    REFERENCES `mydb`.`Monitoramento` (`id`)
);

CREATE TABLE IF NOT EXISTS `mydb`.`disco` (
  `id` INT NOT NULL,
  `usoDisco` VARCHAR(45) NULL,
  `espacoDisp` VARCHAR(45) NULL,
  `TempDisco` VARCHAR(45) NULL,
  `monitoramento` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_disco_Monitoramento1_idx` (`monitoramento`),
  CONSTRAINT `fk_disco_Monitoramento1`
    FOREIGN KEY (`monitoramento`)
    REFERENCES `mydb`.`Monitoramento` (`id`)
);

insert into usuario values 
(1,"teste@email.com","123");

CREATE TABLE IF NOT EXISTS `mydb`.`Usuario` (
  `id` INT NOT NULL,
  `email` VARCHAR(256) NULL,
  `senha` VARCHAR(256) NULL,
  PRIMARY KEY (`id`)
);

select * from empresa;

/*
comando para sql server - banco remoto - ambiente de produção
*/

CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);

CREATE TABLE aviso (
	id INT PRIMARY KEY IDENTITY(1,1),
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT FOREIGN KEY REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY IDENTITY(1,1),
	descricao VARCHAR(300)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

CREATE TABLE medida (
	id INT PRIMARY KEY IDENTITY(1,1),
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT FOREIGN KEY REFERENCES aquario(id)
);

/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
