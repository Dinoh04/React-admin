import {
  Admin,
  Resource
} from "react-admin";
import { dataProvider } from "./dataProvider";
import PostList from './components/PostList';


export const App = () => (
  <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} />
  </Admin>
);

