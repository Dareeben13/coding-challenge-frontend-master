import { Avatar, Card, CardBody, CardFooter, Text } from "grommet";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MyStyledCard, Props } from "../components/user.card";
import { fetchStudent, Student } from "../services/students";





const StudentDetails: React.FC<Props> = ({themeState}) => {
    const [student, setStudent] = useState<Student | null>(null);
    const { query : {id} } = useRouter()
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchStudent(id as string)
            setStudent(data)
        }
        fetchData()
    },[id])

    return (
        <>
        <div style={{padding : '4em 2em'}}>
            <Link href="/" >
                <span style={{cursor : 'pointer'}}>&#8592; Back</span>
            </Link>   
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', height:'100vh', width:'100vw'}}>
            {student &&
            <div className="card-wrapper">
                    <React.Fragment>
                        <MyStyledCard themeState={themeState} height="small" width="small">
                            <CardBody align="center" pad="medium">
                                <Avatar src={student.avatar} />
                            </CardBody>
                            <CardFooter align="start" justify="center" pad="medium">
                                <Text  size="medium" weight="bold" textAlign="center">{`${student["first_name"]} ${student["last_name"]}`}</Text>
                            </CardFooter>
                        </MyStyledCard>
                    </React.Fragment>
                    <div className="item-row-wrap">
                        <ItemRow left="First Name" right={student.first_name} />
                        <ItemRow left="Last Name" right={student.last_name} />
                        <ItemRow left="Email" right={student.email} />
                        <ItemRow left="Job" right={student.job} />
                        <ItemRow left="Company" right={student.company} />
                    </div>
                </div>
                }
        </div>
        </>
    )
}

type RowProps = {
    left: string;
    right: string;
}

export const ItemRow : React.FC<RowProps> = ({left, right}) => (
    <div className="item-row">
        <Text  size="medium" weight="bold">{ left}:  </Text>
        <Text size="medium" > {right}</Text>
        <br/>
    </div>
)

export default StudentDetails;
