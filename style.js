import { StyleSheet } from "react-native";

export default StyleSheet.create({
container: {
    backgroundColor: '#998FC7',
    borderWidth: 1,
    flex: 1,
    margin: 10
},

segmented: {
    padding: 22,
},
inputs: {
    margin: 15,
    color: 'black'
   
},
paperbutton: {
   marginHorizontal: 15,
    marginTop: 20,
},
calendar:  {
    backgroundColor: '#D4C2FC',
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90
},
text: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 40,
    marginHorizontal: 20,
    borderWidth: 2,
    fontStyle: 'italic',
    padding: 20
},

historycontainer: {
    backgroundColor: '#998FC7',
    borderWidth: 1,
    margin: 10,
    flex: 1
    
},
historytext: {
    fontStyle: 'italic',
    fontSize: 18,
    textAlign: 'center',
    margin: 5,
    shadowColor: '#28262C'
},
sumbox: {
    borderWidth: 2,
    borderRadius: 5,
    borderEndStartRadius: 30,
    margin: 5,
    marginHorizontal: 30, 
    padding: 10,
    backgroundColor: '#DCD0DC',
    alignItems: 'center'
},

button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 30,
    borderWidth: 2,
    backgroundColor: '#DCD0DC'
    
}
})