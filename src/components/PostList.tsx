
import { List, Datagrid, TextField, DateField, BooleanField, ReferenceField, Button } from 'react-admin';

 const PostList = () => (
    <List>
    <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <ReferenceField source="userId" reference="users" label="name" />
        <Button label='comments' />
    </Datagrid>
</List>
);


export default PostList
