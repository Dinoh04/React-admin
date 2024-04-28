
import { List, Datagrid, TextField, DateField, BooleanField, DeleteButton, ReferenceField, Button } from 'react-admin';



const PostList = (props: any) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <ReferenceField source="userId" reference="users" label="" />
            <DeleteButton />
        </Datagrid>
    </List>
);


export default PostList
