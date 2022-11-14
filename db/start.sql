CREATE TABLE partida (
    id_partida SERIAL PRIMARY KEY,
    time_casa VARCHAR(50) NOT NULL,
    gol_casa INTEGER NOT NULL,
    time_fora VARCHAR(50) NOT NULL,
    gol_fora INTEGER NOT NULL,
);
