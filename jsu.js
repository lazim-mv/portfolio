String sql = " insert into wps_employee (employer,employeename,"
+ "	agent,labourcardno,nationality,passportno,"
+ "	passportexpirydate,uaenationalid,uaenationalexpirydate,mobile,dateOfJoining,dateOfBirth,email,sex)  "
+ " select b.id, molpersonalno, employeename, employeeaccount,"
+ "	(select id from wps_routingcode where routingCode = agentId), a.labourcardno, a.nationality_id, ltrim(rtrim(a.passportno)),"
+ "	a.passportexpirydate, a.uaenationalid, a.uaenationalexpirydate, a.mobile, a.dateOfJoining, a.dateOfBirth, a.email, a.sex "
+ " from "
+ impTable
+ " a join wps_employer b  on b.employerId = a.employerId "
+ " where a.employerId is not null";

String sql = " insert into wps_employee (employeename,"
				+ "	agent,labourcardno,nationality,passportno,"
				+ "	passportexpirydate,uaenationalid,uaenationalexpirydate,mobile,dateOfJoining,dateOfBirth,email,sex)  "
				+ " select b.id, molpersonalno, employeename, employeeaccount,"
				+ "	(select id from wps_routingcode where routingCode = agentId), a.labourcardno, ltrim(rtrim(a.passportno)),"
				+ "	a.passportexpirydate, a.uaenationalid, a.uaenationalexpirydate, a.mobile, a.dateOfJoining, a.dateOfBirth, a.email, a.sex "
				+ " from "
				+ impTable
				+ " a join wps_employer b  on b.employerId = a.employerId "
				+ " where a.employerId is not null";



