export type RootStackParamList = {
  Bienvenida: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  MainMenu: undefined;
  Clientes: undefined;
  Usuarios: undefined;
  Cruces: undefined;
  Aforo: undefined;
  Dispersion: undefined;
  Recargas: undefined;
  Manual: undefined;
  Soporte: undefined;
  AgregaVehiculo: { onSave: (success: boolean, message: string) => void };
  Pago: undefined;
  RecuperaPassword: {
    email?: string; // Hacemos el email opcional
  };
  Preguntas: undefined;
};


export interface Response<T>{
  data : T,
}