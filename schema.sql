DROP DATABASE IF EXISTS HeroHub;
CREATE DATABASE HeroHub;

DROP TABLE IF EXISTS Chat;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Questions;
DROP TABLE IF EXISTS Users_Questions;


CREATE TABLE Chat (
 id BIGSERIAL NOT NULL,
 Message TEXT,
 TimeAdded TIMESTAMP NOT NULL,
 id_Users BIGINT
);


ALTER TABLE Chat ADD CONSTRAINT Chat_pkey PRIMARY KEY (id);

CREATE TABLE Users (
 id BIGSERIAL NOT NULL,
 Username VARCHAR(20) NOT NULL,
 Password VARCHAR NOT NULL DEFAULT '50',
 Score SMALLINT NOT NULL,
 PFP TEXT,
 Location VARCHAR(255)
);


ALTER TABLE Users ADD CONSTRAINT Users_pkey PRIMARY KEY (id);

CREATE TABLE Users_Questions (
 id BIGSERIAL NOT NULL,
 id_Users BIGINT NOT NULL,
 id_Questions BIGINT NOT NULL
);


ALTER TABLE Users_Questions ADD CONSTRAINT Users_Questions_pkey PRIMARY KEY (id);

CREATE TABLE Questions (
 id BIGSERIAL NOT NULL,
 HeroUniverse VARCHAR(50),
 HeroName VARCHAR(255) NOT NULL,
 Type VARCHAR(20),
 Difficulty VARCHAR(10) NOT NULL,
 Points SMALLINT NOT NULL,
 CorrectAnswer TEXT NOT NULL,
 IncorrectAnswers TEXT
);


ALTER TABLE Questions ADD CONSTRAINT Questions_pkey PRIMARY KEY (id);

ALTER TABLE Chat ADD CONSTRAINT Chat_id_Users_fkey FOREIGN KEY (id_Users) REFERENCES Users(id);
ALTER TABLE Users_Questions ADD CONSTRAINT Users_Questions_id_Users_fkey FOREIGN KEY (id_Users) REFERENCES Users(id);
ALTER TABLE Users_Questions ADD CONSTRAINT Users_Questions_id_Questions_fkey FOREIGN KEY (id_Questions) REFERENCES Questions(id);


CREATE INDEX HeroName_Index ON Questions (HeroName);
CREATE INDEX UQUserID_Index ON Users_Questions (id_Users);
CREATE INDEX TimeAdded_Index ON Chat (TimeAdded);
