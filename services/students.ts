export type Student = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  job: string;
  company: string;
};

export const fetchStudents = async (): Promise<Student[]> => {
  const response = await fetch("http://localhost:3000/api/students");
  const data = await response.json();
  return data;
};

export const fetchStudent = async (id: string): Promise<Student> => {
  const response = await fetch(`http://localhost:3000/api/students/${id}`);
  const data = await response.json();
  return data;
};
