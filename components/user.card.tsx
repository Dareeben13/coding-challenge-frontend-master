import { Avatar, Card, CardBody, CardFooter, Text } from "grommet";
import React from "react";
import { Student } from "../services/students";

type Props = {
  user: Student;
};

const UserCard: React.FC<Props> = ({ user }) => (
  <Card height="small" width="small">
    <CardBody align="center" pad="medium">
      <Avatar src={user.avatar} />
    </CardBody>
    <CardFooter align="start" justify="center" pad="medium">
      <Text textAlign="center">{`${user["first_name"]} ${user["last_name"]}`}</Text>
    </CardFooter>
  </Card>
);

export default UserCard;
