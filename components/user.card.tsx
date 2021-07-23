import { Avatar, Card, CardBody, CardFooter, Text } from "grommet";
import React from "react";
import { Student } from "../services/students";
import Link from 'next/link'
import styled, {css} from 'styled-components';

export const MyStyledCard = styled(Card)`
    ${({ themeState }) =>
    themeState === 'dark' &&
    css`
      box-shadow:  0px 0px 0px 4px rgb(255 255 255 / 40%) ;
    `}
`;


export type Props = {
  user: Student;
  themeState?: string;
};



const UserCard: React.FC<Props> = ({ user, themeState }) => {

  return(
  <Link href="/[id]" as={`/${user.id}`}>
      <MyStyledCard themeState={themeState} height="small" width="small">
        <CardBody align="center" pad="medium">
          <Avatar src={user.avatar} />
        </CardBody>
        <CardFooter align="start" justify="center" pad="medium">
          <Text textAlign="center">{`${user["first_name"]} ${user["last_name"]}`}</Text>
        </CardFooter>
      </MyStyledCard>
  </Link>
)};

export default React.memo(UserCard);
