import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function HelloWorldInput() {

    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');
    const [outputNames, setOutputNames] = useState(['Tane, ', 'Jane, ']);

    const showName = (name: string) => {
        let newName: string = name.concat(", ")
        let names = outputNames.concat(newName)
        setOutputNames(names);
    }

    /* setTimeout(
         () => setCounter(counter + 1),
         1000
     ) */

    return (
        <View style={styles.container2}>
            <View>
                <Text>Terve Maailma!</Text>
            </View>
            <View>
                <Text style={styles.bigCentered}>{counter}</Text>
            </View>
            <View>
                <Text>Anna nimi:</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 2, }}
                    onChangeText={text => setName(text)}
                    value={name}
                />
                <Button
                    title="+ 1"
                    onPress={() => setCounter(counter + 1)}
                />
                <Button
                    title="- 1"
                    onPress={() => setCounter(counter - 1)}
                />
                <Button
                    title="Lisää nimi"
                    onPress={() => showName(name)}
                />
                <Text>{outputNames}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bigCentered: {
        color: 'blue',
        fontSize: 48,
        textAlign: 'center',
    },
});
