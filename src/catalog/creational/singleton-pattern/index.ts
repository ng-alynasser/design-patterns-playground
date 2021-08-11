import { Database } from "./database";

const dataBaseConnection1 = Database.getInstance();
dataBaseConnection1.query("SELECT ....");

const dataBaseConnection2 = Database.getInstance();
dataBaseConnection2.query("SELECT ....");
