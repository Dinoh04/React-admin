import {
  Admin,
  Resource
} from "react-admin";
import { dataProvider } from "./dataProvider";
import PostList from './components/PostList';
import Comment from './components/Comment'


export const App = () => (
  <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} />
      <Resource name="comment" list={Comment} />
  </Admin>
);

