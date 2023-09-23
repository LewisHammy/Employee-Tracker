USE employeeDB;

INSERT INTO department (name)
VALUES ('Test and Development Center'), ('Race Support');

INSERT INTO role (title, salary, departmentId)
VALUES ('Design Test Manager', 175201, 1), ('Race Engineer', 120526, 1), ('Race Technician', 70000, 1), ('Material Technician', 80000, 2), ('', 70000, 2), ('Health and Safety Manager', 80000, 2);

INSERT INTO employee (firstName, lastName, roleId)
VALUES ('Samuel', 'Anita', 1), ('Blue', 'Color', 4), ('Daniel', 'Julia', 5);

INSERT INTO employee (firstName, lastName, roleId, managerId)
VALUES ('Caity', 'Cathreen', 2, 2), ('Daniela', 'Matthew', 3, 1), ('Pedro', 'Adrian', 6, 3);