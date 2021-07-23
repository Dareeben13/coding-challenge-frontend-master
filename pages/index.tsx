import { Box, TextInput } from "grommet";
import React, { useEffect, useState } from "react";
import UserCard from "../components/user.card";
import { fetchStudents, Student } from "../services/students";

type Props = {
  students: Student[],
  themeState?: string
};

const Main: React.FC<Props> = ({ students, themeState }) => {
  const [value, setValue] = useState<string>("")

  const filteredStudent = students.filter(student =>
      student.first_name.toLowerCase().indexOf(value.toLowerCase()) > -1
      ||
      student.last_name.toLowerCase().indexOf(value.toLowerCase()) > -1)
      
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // TODO
    setValue(event.target.value)
  };

  return (
    <Box direction="column" pad="medium" height="100%" overflow="auto">
      <TextInput placeholder="type here" value={value} onChange={onChangeHandler} />
      <Box direction="row" wrap={true}>
        { students && filteredStudent.map((s, idx) => (
          <Box key={idx} margin="10px">
            <UserCard user={s} themeState={themeState} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const getStaticProps = async () => {
  const students = await fetchStudents()
  return {
    props: {
      students
    }
  }
}

export default Main;
