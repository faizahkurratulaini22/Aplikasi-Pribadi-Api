// import React, { useEffect, useState } from 'react';
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, ImageBackground } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const BASE_URL = 'https://doa-doa-api-ahmadramadhan.fly.dev';

// const Homepage = ({ navigation }) => {
//   const [dataDoa, setDataDoa] = useState(null);

//   const getData = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}/api`);
//       const value = respon.json();
//       console.log(value.data)
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getData();
//   });

//   return (
//     <ScrollView>
//       {/*{doaData.map((doa) => (
//         <TouchableOpacity
//           key={doa.id}
//           onPress={() => navigation.navigate('DetailDoa', { doaId: `${BASE_URL}/api/${doa.id}` })}
//         >
//           <ImageBackground source={require('../assets/image/bigi.png')} style={styles.background}>
//             <View style={styles.contentContainer}>
//               <Text style={styles.content}>{doa.doa}</Text>
//             </View>
//           </ImageBackground>
//         </TouchableOpacity>
//       ))}*/}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingVertical: 40,
//     marginHorizontal: 20,
//     marginVertical: 10,
//     borderRadius: 10,
//     overflow: 'hidden',
//   },
//   contentContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   content: {
//     color: '#ffffff',
//     fontSize: 20,
//     fontWeight: '600',
//   },
// });

// export default Homepage;


import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, ImageBackground, TextInput } from 'react-native';

const BASE_URL = 'https://doa-doa-api-ahmadramadhan.fly.dev';

const Homepage = ({ navigation }) => {
  const [dataDoa, setDataDoa] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const getData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api`);
      const data = await response.json();
      setDataDoa(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = () => {
    // Implement logic to filter data based on the searchQuery
    // For example, you can filter data based on the 'doa' property
    const filteredData = dataDoa.filter(doa => doa.doa.toLowerCase().includes(searchQuery.toLowerCase()));
    setDataDoa(filteredData);
  };

  const renderCard = (doa) => (
    <TouchableOpacity
      key={doa.id}
      onPress={() => navigation.navigate('DetailDoa', { doaId: doa.id })}
    >
      <ImageBackground source={require('../assets/image/bigi.png')} style={styles.background}>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>{doa.doa}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Cari doa..."
          onChangeText={(text) => setSearchQuery(text)}
          onSubmitEditing={handleSearch}
        />
      </View>

      {dataDoa && dataDoa.map(renderCard)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  background: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Homepage;