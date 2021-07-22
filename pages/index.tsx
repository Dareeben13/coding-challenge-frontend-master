import { Box, TextInput } from "grommet";
import React, { useEffect, useState } from "react";
import UserCard from "../components/user.card";
import { fetchStudents, Student } from "../services/students";

type Props = {
  students : Student[],
};

const Main: React.FC<Props> = ({ students }) => {
  // console.log(students)
  const onChangeHandler = (event: any) => {
    // TODO
  };

  return (
    <Box direction="column" pad="medium" height="100%" overflow="auto">
      <TextInput placeholder="type here" value="" onChange={onChangeHandler} />
      <Box direction="row" wrap={true}>
        {students.map((s, idx) => (
          <Box key={idx} margin="10px">
            <UserCard user={s} />
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
