import { Flex } from '@chakra-ui/react';
import Courses from './components/Courses.jsx';
import Allcourses from './components/pages/allcourses/allcourses.jsx';
import Update from './components/pages/course details/update.jsx';

function App() {
  return (
    <Flex>
      <Allcourses />
    </Flex>
  );
}

export default App;
