DROP TABLE IF EXISTS TB_HEROIS

CREATE TABLE TB_HEROIS (
    ID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
    NOME TEXT NOT NULL,
    PODER TEXT NOT NULL
)

----Create

INSERT INTO TB_HEROIS(nome, poder)
VALUES
    ('Flash', 'Velocidade')
    ('Aquaman','Falar com os animais')
    ('Batman', 'Dinheiro')

----Read

SELECT * FROM TB_HEROIS
SELECT * FROM TB_HEROIS WHERE nome = 'FLASH'

----Update

UPDATE TB_HEROIS
SET NOME = 'Goku', poder = 'Deus'
WHERE ID = 1

----Delete 

DELETE FROM TB_HEROIS
WHERE id = 2