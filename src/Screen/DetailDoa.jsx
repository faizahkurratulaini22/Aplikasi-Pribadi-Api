// // DetailDoa.js
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import axios from 'axios';

// const DetailDoa = ({ route }) => {
//   const { doaId } = route.params;
//   const [detailDoa, setDetailDoa] = useState(null);

//   useEffect(() => {
//     const getDetailDoa = async () => {
//       try {
//         const response = await axios.get(doaId);
//         console.log('Response from API:', response.data);
//         setDetailDoa(response.data);
//       } catch (error) {
//         console.error('Error Saat Mengambil Detail Doa', error);
//       }
//     };

//     getDetailDoa();
//   }, [doaId]);

//   // Periksa apakah detailDoa sudah di-update di konsol
//   useEffect(() => {
//     console.log('Updated DetailDoa:', detailDoa);
//   }, [detailDoa]);

//   if (!detailDoa) {
//     return <Text>Loading...</Text>;
//   }

//   return (
//     <View style={styles.content}>
//       <Text style={styles.title}>{detailDoa.doa}</Text>
//       <Text style={styles.ayat}>{detailDoa.ayat}</Text>
//       <Text style={styles.latin}>{detailDoa.latin}</Text>
//       <Text style={styles.artinya}>{detailDoa.artinya}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#000', // Warna teks hitam
//   },
//   ayat: {
//     fontSize: 18,
//     marginBottom: 8,
//     color: '#000', // Warna teks hitam
//   },
//   latin: {
//     fontSize: 16,
//     fontStyle: 'italic',
//     marginBottom: 8,
//     color: '#000', // Warna teks hitam
//   },
//   artinya: {
//     fontSize: 16,
//     lineHeight: 24,
//     color: '#000', // Warna teks hitam
//   },
// });

// export default DetailDoa;


// // DetailDoa.js
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import axios from 'axios';

// const DetailDoa = ({ route }) => {
//   const { doaId } = route.params;
//   const [detailDoa, setDetailDoa] = useState(null);

//   useEffect(() => {
//     const getDetailDoa = async () => {
//       try {
//         const response = await axios.get(doaId);
//         console.log('Response from API:', response.data);
//         setDetailDoa(response.data);
//       } catch (error) {
//         console.error('Error Saat Mengambil Detail Doa', error);
//       }
//     };

//     getDetailDoa();
//   }, [doaId]);

//   // Periksa apakah detailDoa sudah di-update di konsol
//   useEffect(() => {
//     console.log('Updated DetailDoa:', detailDoa);
//   }, [detailDoa]);

//   if (!detailDoa) {
//     return <Text>Loading...</Text>;
//   }

//   return (
//     <View style={styles.content}>
//       <Text style={styles.title}>{detailDoa.doa}</Text>
//       <Text style={styles.ayat}>{detailDoa.ayat}</Text>
//       <Text style={styles.latin}>{detailDoa.latin}</Text>
//       <Text style={styles.artinya}>{detailDoa.artinya}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#000', // Warna teks hitam
//   },
//   ayat: {
//     fontSize: 18,
//     marginBottom: 8,
//     color: '#000', // Warna teks hitam
//   },
//   latin: {
//     fontSize: 16,
//     fontStyle: 'italic',
//     marginBottom: 8,
//     color: '#000', // Warna teks hitam
//   },
//   artinya: {
//     fontSize: 16,
//     lineHeight: 24,
//     color: '#000', // Warna teks hitam
//   },
// });

// export default DetailDoa;

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BASE_URL = 'https://doa-doa-api-ahmadramadhan.fly.dev';

const DetailDoa = ({ route }) => {
  const { doaId } = route.params;
  const [doaDetail, setDoaDetail] = useState(null);

  const getDoaDetail = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/${doaId}`);
      const data = await response.json();
      if (data.msg === "silahkan masukkan id") {
        console.log("ID doa tidak valid");
        console.log(data);
      } else {
        setDoaDetail(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoaDetail();
  }, []);

  return (
    <View >
      {doaDetail ? (
        <View style={styles.card}>
          <Text style={styles.title}>{doaDetail.doa}</Text>
          <Text style={styles.text}>{doaDetail.ayat}</Text>
          <Text style={styles.text}>{doaDetail.latin}</Text>
          <Text style={styles.text}>{doaDetail.artinya}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    // backgroundColor: 'green',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'blue', 
    backgroundColor: 'blue'
  },
  text: {
    fontSize: 50,
    marginBottom: 8,
    color: 'blue', // Put text color for visibility
    backgroundColor: 'blue'
  },
});

export default DetailDoa;
