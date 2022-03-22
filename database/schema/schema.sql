DROP DATABASE IF EXISTS heroquiz;
CREATE DATABASE heroquiz;


DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS chat CASCADE;
DROP TABLE IF EXISTS quizzes CASCADE;
DROP TABLE IF EXISTS users_quizzes CASCADE;
DROP TABLE IF EXISTS users CASCADE;


CREATE TABLE chat (
 id BIGSERIAL,
 id_users BIGINT,
 body TEXT NOT NULL,
 date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE chat ADD CONSTRAINT chat_pkey PRIMARY KEY (id);

CREATE TABLE users (
 id BIGSERIAL,
 userName VARCHAR(20) NOT NULL,
 pfp_url TEXT,
 location VARCHAR(50),
 password VARCHAR(20) NOT NULL
);


ALTER TABLE users ADD CONSTRAINT users_pkey PRIMARY KEY (id);

CREATE TABLE users_quizzes (
 id BIGSERIAL,
 id_users BIGINT,
 id_quizzes BIGINT,
 score SMALLINT NOT NULL,
 date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 difficulty VARCHAR(20) NOT NULL
);


ALTER TABLE users_quizzes ADD CONSTRAINT users_quizzes_pkey PRIMARY KEY (id);

CREATE TABLE questions (
 id BIGSERIAL,
 id_quizzes BIGINT,
 body TEXT NOT NULL,
 correctAnswer TEXT NOT NULL,
 incorrectAnswers TEXT[] NOT NULL
);


ALTER TABLE questions ADD CONSTRAINT questions_pkey PRIMARY KEY (id);

CREATE TABLE quizzes (
 id BIGSERIAL,
 id_users BIGINT,
 name VARCHAR(50) NOT NULL,
 category VARCHAR(50) NOT NULL,
 date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE quizzes ADD CONSTRAINT quizzes_pkey PRIMARY KEY (id);

ALTER TABLE chat ADD CONSTRAINT chat_id_users_fkey FOREIGN KEY (id_users) REFERENCES users(id);
ALTER TABLE users_quizzes ADD CONSTRAINT users_quizzes_id_users_fkey FOREIGN KEY (id_users) REFERENCES users(id);
ALTER TABLE users_quizzes ADD CONSTRAINT users_quizzes_id_quizzes_fkey FOREIGN KEY (id_quizzes) REFERENCES quizzes(id);
ALTER TABLE questions ADD CONSTRAINT questions_id_quizzes_fkey FOREIGN KEY (id_quizzes) REFERENCES quizzes(id);
ALTER TABLE quizzes ADD CONSTRAINT quizzes_id_users_fkey FOREIGN KEY (id_users) REFERENCES users(id);


CREATE INDEX chatDate_index ON chat (date);
CREATE INDEX userName_index ON users (userName);
CREATE INDEX uqScore_index ON users_quizzes (score);
CREATE INDEX quizName_index ON quizzes (name);

--Sample Data to build from:

INSERT INTO users (userName, pfp_url, location, password)
VALUES ('admin', 'https://drive.google.com/file/d/1yZ3gsUAKiR5gW06pANOGPsKliaeCUDR-/view?usp=sharing'
, 'the cabbage patch', 'admin');

INSERT INTO quizzes (id_users, name, category)
VALUES (1, 'Batman Quiz #1', 'DC');

INSERT INTO quizzes (id_users, name, category)
VALUES (1, 'Iron Man Quiz #1', 'Marvel');

INSERT INTO quizzes (id_users, name, category)
VALUES (1, 'All Might Quiz #1', 'My Hero Academia');

-- COPY questions (id, id_quizzes, body, correctAnswer, incorrectAnswers)
-- FROM '/Users/daniel/Code/Hack_Reactor/Blue-Ocean/hero-quiz/database/data/questions.csv'
-- DELIMITER ','
-- CSV HEADER;