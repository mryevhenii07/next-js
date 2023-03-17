import { useState, useEffect } from 'react';
import {
  Document,
  Page,
  View,
  Text,
  Image,
  PDFViewer,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

import IAm from '../public/assets/iam.jpg';

const PDF = () => {
  return (
    <Document style={styles.body}>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.title}>Perdrii Yevhenii</Text>
          <Text>Front-End Developer</Text>
          <Image src={IAm} alt="img" style={styles.image} />
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis sunt, eaque
            necessitatibus nam voluptas suscipit. Maxime dolorem nemo, unde quidem numquam molestias
            quas voluptatum commodi reiciendis, natus, magni modi suscipit?
          </Text>
        </View>
        <View>
          <Text>jjj</Text>
        </View>
      </Page>
    </Document>
  );
};
const PDFView = () => {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <PDFViewer style={styles.body}>
      <PDF />
    </PDFViewer>
  );
};

export default PDFView;

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '80px',
  },
  page: {
    // display: 'flex',
    // alignContent: 'center',
    // justifyContent: 'center',
    // flexDirection: 'column',
    // backgroundColor: 'indigo',
    padding: '10px',
  },
  title: {
    fontSize: '32px',
    textAlign: 'center',
  },
  image: {
    width: '200px',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});
