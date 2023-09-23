USE employeeDB;

INSERT INTO department (name)
VALUES ('Design'), ('Marketing');

INSERT INTO role (title, salary, departmentId)
VALUES ('Design Director', 90000, 1), ('Web Designer', 50000, 1), ('Print Designer', 40000, 1), ('Creative Director', 80000, 2), ('Marketing Manager', 70000, 2), ('Social Media Specialist', 40000, 2);

INSERT INTO employee (firstName, lastName, roleId)
VALUES ('Samuel', 'Anita', 1), ('Blue', 'Color', 4), ('Daniel', 'Julia', 5);

INSERT INTO employee (firstName, lastName, roleId, managerId)
VALUES ('Caity', 'Cathreen', 2, 2), ('Daniela', 'Matthew', 3, 1), ('Pedro', 'Adrian', 6, 3);