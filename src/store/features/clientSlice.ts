import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Client {
  id: number,
  actualAddress: string,
  fin: string,
  seriesAndCode: string,
  name: string,
  surname: string,
  fatherName: string,
  registrationAddress: string,
  birthdate: string,
  mobile: number,
  homePhoneNumber: number,
}

interface ClientState {
  clients: Client[];
  searchTerm: string;
}

const initialState: ClientState = {
  clients: [
    {
        id: 1,
        actualAddress: 'Absheron,Sulutepe',
        fin: '5U6P45Y',
        seriesAndCode: '564729910',
        name:'Nuriyya',
        surname:'Ruslanovna',
        fatherName:'Ruslan',
        registrationAddress: 'Qazax',
        birthdate:'11.08.94',
        mobile: +994509825425,
        homePhoneNumber: 1121
      },
      {
        id: 2,
        actualAddress: 'Absheron,Xhirdalan',
        fin: '5Y6P12Y',
        seriesAndCode: '564729910',
        name:'Nariman',
        surname:'Isgandarov',
        fatherName:'Ruslan',
        registrationAddress: 'Qazax',
        birthdate:'04.03.96',
        mobile: +994509225425,
        homePhoneNumber: 1121
      },
      {
        id: 3,
        actualAddress: 'Baku,Hesen Aliyev',
        fin: '5Y6P18Y',
        seriesAndCode: '564232420',
        name:'Ruslan',
        surname:'Isgandarov',
        fatherName:'Tofiq',
        registrationAddress: 'Baku',
        birthdate:'11.08.64',
        mobile: +994509225425,
        homePhoneNumber: 1121
      },
      {
        id: 4,
        actualAddress: 'Absheron, Nubar',
        fin: '5Y6P12P',
        seriesAndCode: '564729780',
        name:'Shafiqa',
        surname:'Isgandarova',
        fatherName:'AllahQulu',
        registrationAddress: 'Baku',
        birthdate:'11.08.76',
        mobile: +994509245425,
        homePhoneNumber: 1121
      }
  ],
  searchTerm: ''
};

export const fetchClient = createAsyncThunk(
  "client/fetch",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (_thunkAPI) => {
    const response = await fetch('http://localhost:8000/client', {
      method: "GET",
    });
    const data = response.json();
    return data;
  },
);

export const saveClient = createAsyncThunk(
  "client/save",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (name: string, _thunkAPI) => {
    const response = await fetch("http://localhost:8000/client", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    });
    const data = await response.json();
    return data;
  },
);

console.log('clients before');
console.log(initialState.clients);
console.log('clients after');

export const ClientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    addClient: (state, action: PayloadAction<{
      homePhoneNumber: number;
      mobile: number;
      birthdate: string;
      registrationAddress: string;
      fatherName: string;
      surname: string;
      seriesAndCode: string;
      fin: string;
      actualAddress: string; 
      name: string 
}>) => {
      state.clients.push({
        id: state.clients.length + 1,
        name: action.payload.name,
        actualAddress: action.payload.actualAddress,
        fin: action.payload.fin,
        seriesAndCode: action.payload.seriesAndCode,
        surname: action.payload.surname,
        fatherName: action.payload.fatherName,
        registrationAddress: action.payload.registrationAddress,
        birthdate: action.payload.birthdate,
        mobile: action.payload.mobile,
        homePhoneNumber: action.payload.homePhoneNumber
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchClient.fulfilled, (state, action) => {
      state.clients = action.payload;
    });
  },
});

export const { setSearchTerm,addClient } = ClientSlice.actions;
export default ClientSlice.reducer;
