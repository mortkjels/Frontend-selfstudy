CREATE TABLE Brille{
    INTEGER brilleID  
    VARCHAR (50) Fabrikat
    INTEGER styrke
    VARCHAR (50) Farge

    constraint brilleID primary key 
};

CREATE TABLE Kunde{
    INTEGER kundeID  
    VARCHAR (50) kundenavn
    VARCHAR (50) EPOST
    INTEGER tlf
};