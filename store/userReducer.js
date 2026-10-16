import {createSlice} from "@reduxjs/toolkit";


// data-section banane ka function
export let userPart = createSlice({
    name:'userPart',
    initialState:{
        users:[   
            {
            name: 'Ali Hassan',
            email:"ali@gmail.com",
            password:"12345678",
            id:1,
        }],
        user:null,
        items:[],
    },
    // action
    reducers:{


        removeUser(oldData, nyaData){

            let userIndex = oldData.users.findIndex(function(user){
                if(user.id == nyaData.payload){
                    return true;
                }
            })

            if(userIndex != -1){
                 oldData.users.splice(userIndex, 1)
            }

        },
        addUser(oldData, nyaData){

            oldData.users.push(nyaData.payload);

        },

        setUser(oldData, nyaData){

            oldData.user = nyaData.payload;

            
        },

        addName(oldData, nyaData){

            let productParaHua = oldData.items.find(function(p){
                if(p.id == nyaData.payload.id){
                    return true;
                }
            });

            if(productParaHua){
                productParaHua.qty++;
            }else{
                nyaData.payload.qty = 1;
                oldData.items.push(nyaData.payload)
            }



        },
        removeName(oldData, nyaData){
            oldData.items.splice(nyaData.payload, 1);
        },
        setValue(oldData, nyaData){
            
            let productParaHua = oldData.items.find(function(p){
                if(p.id == nyaData.payload.id){
                    return true;
                }
            });

            productParaHua.qty = nyaData.payload.qty;


        },
        updateName(oldData, nyaData){

            
            let productParaHua = oldData.items.find(function(p){
                if(p.id == nyaData.payload.id){
                    return true;
                }
            });


            if(nyaData.payload.abc == 'inc'){
                productParaHua.qty++;
            }else{
                if(productParaHua.qty > 1){
                    productParaHua.qty--;
                }
            }
            
            // oldData.items[nyaData.payload.ab] = nyaData.payload.nyaName;

            // oldData.names.splice(nyaData.payload.ab, 1, nyaData.payload.nyaName);

        }


    }
});

// yahan  userPart.reducer basially aapka initialState ka object h

export let userData = userPart.reducer

export let {removeUser, addUser, addName, removeName, updateName, setValue, setUser} = userPart.actions;