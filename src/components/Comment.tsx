import { List, Datagrid, TextField, DateField, BooleanField, ReferenceField, Button, DeleteButton } from 'react-admin';

const CommentList = (props : any) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="body" />
            <TextField source="postId" label="Post ID" />
            <DeleteButton />
        </Datagrid>
    </List>
);


export default CommentList