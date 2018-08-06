ALTER TABLE characterbases
DROP column about;

ALTER TABLE characterbases
DROP column email;

ALTER TABLE characterbases
DROP column createdAt;

ALTER TABLE characterbases
DROP column updatedAt;

SELECT * FROM characterbases;

ALTER TABLE SkillBases
DROP column createdAt, DROP updatedAt, DROP CharacterSkillChaskillid;

SELECT * FROM characterbases;